/**
 * @file Unit Tests - isMutableArray
 * @module fsm-tokenizer/internal/tests/unit/isMutableArray
 */

import codes from '#enums/codes'
import testSubject from '#internal/is-mutable-array'

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
