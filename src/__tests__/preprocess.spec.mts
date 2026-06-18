/**
 * @file Unit Tests - preprocess
 * @module mark-parser/tests/unit/preprocess
 */

import nil from '#internal/nil'
import testSubject from '#preprocess'
import type { PreprocessOptions } from '@flex-development/mark-parser'
import { chars, codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  FileLike,
  Preprocess,
  Value
} from '@flex-development/mark/parse'

describe('unit:preprocess', () => {
  it('should return character code preprocessor', () => {
    // Act
    const subject: Preprocess = testSubject()

    // Expect
    expect(subject).to.be.a('function').with.property('name', 'preprocess')
  })

  describe('preprocess', () => {
    it.each<[
      value: Code | FileLike | Value | undefined,
      end?: boolean | null | undefined,
      options?: PreprocessOptions | null | undefined
    ]>([
      [codes.eos, true],
      [codes.break],
      [chars.empty],
      [chars.lf + chars.cr + chars.crlf],
      [{ value: chars.empty }, true],
      [{ value: Buffer.from('hello' + chars.ht + 'world') }],
      [Buffer.from('hi' + chars.ht + 'world'), null, { tabSize: 4 }],
      [Buffer.from('--debug=true --pizza-type meat --small'), true]
    ])('should return character code chunk list (%#)', (value, end) => {
      // Arrange
      const subject: Preprocess = testSubject({ tabSize: 4 })

      // Act
      const result = subject(value, null, end)

      // Expect
      expect(result).to.be.an('array')

      // Expect (conditional)
      if (!nil(value)) expect(result).to.have.property('length').be.gte(1)
      if (end) expect(result.at(-1)).to.eq(codes.eos)

      // Expect (snapshot)
      expect(result).toMatchSnapshot()
    })
  })
})
