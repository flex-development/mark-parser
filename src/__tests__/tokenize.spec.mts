/**
 * @file Unit Tests - tokenize
 * @module mark-parser/tests/unit/tokenize
 */

import initialize from '#constructs/initialize'
import createTokenizer from '#create-tokenizer'
import consumeThenSucc from '#fixtures/constructs/consume-then-succ'
import createPreprocess from '#preprocess'
import testSubject from '#tokenize'
import decode from '#utils/decode'
import type {
  Preprocessor,
  TokenizeOptions
} from '@flex-development/mark-parser'
import { chars, codes } from '@flex-development/mark-util-symbol'
import type { List } from '@flex-development/mark/core'
import type {
  Encoding,
  FileLike,
  TokenizeContext,
  Value,
  Write
} from '@flex-development/mark/parse'
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
  let preprocess: Preprocessor
  let write: Mock<Write>

  beforeAll(() => {
    chunker = /\s+/g
    context = createTokenizer(initialize(consumeThenSucc))
    encoding = 'utf8'
  })

  beforeEach(() => {
    preprocess = vi.fn(createPreprocess()) as unknown as Preprocessor
    preprocess = vi.mocked(preprocess).mockName('preprocess')

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
      void testSubject(value, context, { encoding })

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
      void testSubject(value, context, { ...options, chunker, preprocess })

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
      void testSubject(value, context, { ...options, preprocess })

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
      void testSubject(buffer, context, { chunker, encoding, preprocess })

      // Expect
      expect(decode).toHaveBeenCalledWith(buffer, encoding)
      expect(preprocess).toHaveBeenCalledTimes(matches.length)
      expect(write).toHaveBeenLastCalledWith(codes.eos)
      expect(write.mock.calls.flat()).toMatchSnapshot()
    })

    it('should write decoded empty chunk if `value` is empty string', () => {
      // Act
      void testSubject(chars.empty, context, { preprocess })

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
      const preprocessor: Mock<Preprocessor> = vi.mocked(preprocess)

      // Act
      void testSubject(buffer, context, { encoding, preprocess })

      // Expect
      expect(decode).toHaveBeenCalledWith(buffer, encoding)
      expect(preprocess).toHaveBeenCalledExactlyOnceWith(value, encoding)
      expect(write).toHaveBeenCalledTimes(2)
      expect(write).toHaveBeenCalledWith(preprocessor.mock.results[0]!.value)
      expect(write).toHaveBeenLastCalledWith(codes.eos)
    })
  })
})
