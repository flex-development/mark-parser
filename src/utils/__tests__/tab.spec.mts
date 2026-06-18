/**
 * @file Unit Tests - tab
 * @module mark-parser/utils/tests/unit/tab
 */

import testSubject from '#utils/tab'
import { codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/tab', () => {
  it('should return `false` if `code` is not horizontal tab', () => {
    expect(testSubject(codes.eof)).to.be.false
  })

  it.each<keyof typeof codes>([
    'ht',
    'vht'
  ])('should return `true` if `code` is horizontal tab (codes.%s)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
