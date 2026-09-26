/**
 * @file Unit Tests - nil
 * @module mark-parser/internal/tests/unit/nil
 */

import testSubject from '#internal/nil'
import { chars, codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'

describe('unit:internal/nil', () => {
  it('should return `false` if `value` is not `null` or `undefined`', () => {
    expect(testSubject(chars.empty)).to.be.false
  })

  it('should return `true` if `value` is `null`', () => {
    expect(testSubject(codes.eof)).to.be.true
  })

  it('should return `true` if `value` is `undefined`', () => {
    expect(testSubject(undefined)).to.be.true
  })
})
