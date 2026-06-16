/**
 * @file Unit Tests - decode
 * @module fsm-tokenizer/utils/tests/unit/decode
 */

import chars from '#enums/chars'
import codes from '#enums/codes'
import testSubject from '#utils/decode'
import type { List } from '@flex-development/fsm/core'
import type {
  Chunk,
  Encoding,
  FileLike,
  Value
} from '@flex-development/fsm/parse'

describe('unit:utils/decode', () => {
  it.each<[chunk: Chunk]>([
    [chars.dot],
    [codes.dot],
    [codes.eof]
  ])('should return `chunk` (%#)', chunk => {
    expect(testSubject(chunk)).to.eq(chunk)
  })

  it.each<[
    chunks: (Chunk | FileLike | Value)[],
    encoding?: Encoding | null | undefined
  ]>([
    [[chars.empty, codes.lf, { value: Buffer.from(':+1:') }, codes.eof]],
    [[chars.lowercaseA, chars.lowercaseB, chars.lowercaseC]],
    [[codes.lowercaseA, codes.lowercaseB, codes.lowercaseC, codes.eof]],
    [[Buffer.from(chars.empty), codes.eof], 'utf8']
  ])('should return decoded `chunks` (%#)', (chunks, encoding) => {
    // Act
    const result = testSubject(chunks, encoding)

    // Expect
    expect(result).to.eq(chunks)
    expect(result).toMatchSnapshot()
  })

  it.each<[
    chunks: List<Chunk | FileLike | Value>,
    encoding?: Encoding | null | undefined
  ]>([
    [[chars.lowercaseX, chars.lowercaseY, chars.lowercaseZ]],
    [[codes.lowercaseX, codes.lowercaseY, codes.lowercaseZ, codes.eof]],
    [new Set([Buffer.from('hello world'), chars.lf, chars.lf, codes.eof])]
  ])('should return new list from `chunks` (%#)', (chunks, encoding) => {
    // Arrange
    chunks = Object.freeze(chunks)

    // Act
    const result = testSubject(chunks, encoding)

    // Expect
    expect(result).to.not.eq(chunks)
    expect(result).toMatchSnapshot()
  })
})
