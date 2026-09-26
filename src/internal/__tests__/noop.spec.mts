/**
 * @file Unit Tests - noop
 * @module mark-parser/internal/tests/unit/noop
 */

import testSubject from '#internal/noop'
import { describe, expect, it } from 'vitest'

describe('unit:internal/noop', () => {
  it('should return `undefined`', () => {
    expect(testSubject()).to.be.undefined
  })
})
