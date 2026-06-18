/**
 * @file Unit Tests - size
 * @module mark-parser/internal/tests/unit/size
 */

import testSubject from '#internal/size'
import { chars } from '@flex-development/mark-util-symbol'

describe('unit:internal/size', () => {
  it('should return size of `list` (Set)', () => {
    // Arrange
    const list: Set<string> = new Set([chars.digit1, chars.digit3])

    // Act + Expect
    expect(testSubject(list)).to.eq(list.size)
  })

  it('should return size of `list` (array)', () => {
    // Arrange
    const list: string[] = [chars.digit3, chars.digit1, chars.digit3]

    // Act + Expect
    expect(testSubject(list)).to.eq(list.length)
  })
})
