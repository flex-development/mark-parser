/**
 * @file Unit Tests - isMutableArray
 * @module mark-parser/internal/tests/unit/isMutableArray
 */

import testSubject from '#internal/is-mutable-array'
import { codes } from '@flex-development/mark-util-symbol'

describe('unit:internal/isMutableArray', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.eos],
    [new Set()]
  ])('should return `false` if `value` is not an array (%#)', value => {
    expect(testSubject(value)).to.be.false
  })

  it('should return `false` if `value` is a readonly array', () => {
    expect(testSubject(Object.freeze([]))).to.be.false
  })

  it('should return `true` if `value` is an array and not frozen', () => {
    expect(testSubject([])).to.be.true
  })
})
