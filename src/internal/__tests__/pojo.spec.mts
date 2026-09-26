/**
 * @file Unit Tests - pojo
 * @module mark-parser/internal/tests/unit/pojo
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it, vi } from 'vitest'
import testSubject from '../pojo.mts'

describe('unit:internal/pojo', () => {
  it.each<Parameters<typeof testSubject>>([
    [[]],
    [codes.eos],
    [codes.break],
    [new Date()],
    [vi.fn()]
  ])('should return `false` if `value` is not plain object', value => {
    expect(testSubject(value)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [{ tokenize: vi.fn() }],
    [Object.create(null)]
  ])('should return `true` if `value` is plain object', value => {
    expect(testSubject(value)).to.be.true
  })
})
