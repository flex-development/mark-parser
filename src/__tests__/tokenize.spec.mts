/**
 * @file Unit Tests - tokenize
 * @module fsm-tokenizer/tests/unit/tokenize
 */

import initialize from '#constructs/initialize'
import createTokenizer from '#create-tokenizer'
import chars from '#enums/chars'
import codes from '#enums/codes'
import consumeThenSucc from '#fixtures/constructs/consume-then-succ'
import testSubject from '#tokenize'
import decode from '#utils/decode'
import type {
  Encoding,
  FileLike,
  List,
  Preprocess,
  TokenizeContext,
  TokenizeOptions,
  Value,
  Write
} from '@flex-development/fsm-tokenizer'
import type { NIL } from '@flex-development/tutils'
import type { Mock } from 'vitest'

vi.mock('#utils/decode', async og => {
  const module: { default: typeof decode } = await og()
  return { default: vi.fn(module.default).mockName('decode') }
})

describe('unit:tokenize', () => {
  let chunker: RegExp
  let context: TokenizeContext
  let encoding: Encoding | null | undefined
  let preprocess: Mock<Preprocess>
  let write: Mock<Write>

  beforeAll(() => {
    chunker = /\s+/g
    context = createTokenizer(initialize(consumeThenSucc))
    encoding = context.encoding
  })

  beforeEach(() => {
    preprocess = vi.spyOn(context, 'preprocess').mockName('context.preprocess')
    write = vi.spyOn(context, 'write').mockName('context.write')
  })

  it.each<[value: NIL]>([
    [null],
    [undefined]
  ])('should immediately end stream if `value` is nil (%j)', value => {
    // Act
    void testSubject(value, context)

    // Expect
    expect(write).toHaveBeenCalledExactlyOnceWith(codes.eos)
  })

  describe('list values', () => {
    type Case = [
      value: List<FileLike | Value>,
      options?: TokenizeOptions | null | undefined
    ]

    it('should decode `value`', () => {
      // Arrange
      const value: List<FileLike | Value> = []

      // Act
      void testSubject(value, context)

      // Expect
      expect(decode).toHaveBeenCalledWith(value, encoding)
      expect(preprocess).not.toHaveBeenCalled()
      expect(write).toHaveBeenCalledExactlyOnceWith(codes.eos)
    })

    it.each<Case>([
      [['hello world', '🌎 👋']],
      [[' 🌎 👋', 'hello world!'], { breaks: true }]
    ])('should write chunks after chunking decoded item w/ chunker (%#)', (
      value,
      options
    ) => {
      // Act
      void testSubject(value, context, { ...options, chunker })

      // Expect
      expect(preprocess).toHaveBeenCalled()
      expect(write).toHaveBeenLastCalledWith(codes.eos)
      expect(write.mock.calls.flat()).toMatchSnapshot()
    })

    it.each<Case>([
      [new Set([chars.empty, chars.empty, chars.lowercaseA])],
      [['hello', 'world'], { breaks: true }]
    ])('should write decoded item chunk w/o chunker (%#)', (
      value,
      options
    ) => {
      // Act
      void testSubject(value, context, options)

      // Expect
      expect(preprocess).not.toHaveBeenCalled()
      expect(write).toHaveBeenLastCalledWith(codes.eos)
      expect(write.mock.calls.flat()).toMatchSnapshot()
    })
  })

  describe('non-list values', () => {
    it('should write chunks after chunking decoded `value` w/ chunker', () => {
      // Arrange
      const value: string = chars.lowercaseA + chars.space + chars.lowercaseB
      const buffer: Uint8Array = Buffer.from(value)
      const matches: RegExpExecArray[] = [...value.matchAll(chunker)]

      // Act
      void testSubject(buffer, context, { chunker })

      // Expect
      expect(decode).toHaveBeenCalledWith(buffer, encoding)
      expect(preprocess).toHaveBeenCalledTimes(matches.length)
      expect(write).toHaveBeenLastCalledWith(codes.eos)
      expect(write.mock.calls.flat()).toMatchSnapshot()
    })

    it('should write decoded empty chunk if `value` is empty string', () => {
      // Act
      void testSubject(chars.empty, context)

      // Expect
      expect(preprocess).not.toHaveBeenCalled()
      expect(write).toHaveBeenCalledTimes(2)
      expect(write).toHaveBeenCalledWith(codes.empty)
      expect(write).toHaveBeenLastCalledWith(codes.eos)
    })

    it('should write decoded and preprocessed `value` w/o chunker', () => {
      // Arrange
      const value: string = chars.digit3 + chars.digit1 + chars.digit3
      const buffer: Uint8Array = Buffer.from(value)

      // Act
      void testSubject(buffer, context)

      // Expect
      expect(decode).toHaveBeenCalledWith(buffer, encoding)
      expect(preprocess).toHaveBeenCalledExactlyOnceWith(value, encoding)
      expect(write).toHaveBeenCalledTimes(2)
      expect(write).toHaveBeenCalledWith(preprocess.mock.results[0]!.value)
      expect(write).toHaveBeenLastCalledWith(codes.eos)
    })
  })
})
