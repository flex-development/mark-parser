/**
 * @file Unit Tests - eof
 * @module mark-parser/utils/tests/unit/eof
 */

import testSubject from '#utils/eof'
import { codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/eof', () => {
  it('should return `false` if `code` is not `codes.eof`', () => {
    expect(testSubject(codes.break)).to.be.false
  })

  it('should return `true` if `code` is `codes.eof`', () => {
    expect(testSubject(codes.eof)).to.be.true
  })
})
