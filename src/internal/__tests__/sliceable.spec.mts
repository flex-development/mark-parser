/**
 * @file Unit Tests - sliceable
 * @module mark-parser/internal/tests/unit/sliceable
 */

import testSubject from '#internal/sliceable'
import { chars, codes } from '@flex-development/mark-util-symbol'

describe('unit:internal/sliceable', () => {
  it('should return `false` if `value` is not an array or string', () => {
    expect(testSubject(codes.eof)).to.be.false
  })

  it('should return `true` if `value` is an array', () => {
    expect(testSubject([])).to.be.true
  })

  it('should return `true` if `value` is a string', () => {
    expect(testSubject(chars.empty)).to.be.true
  })
})
