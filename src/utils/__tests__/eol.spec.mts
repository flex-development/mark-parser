/**
 * @file Unit Tests - eol
 * @module mark-parser/utils/tests/unit/eol
 */

import testSubject from '#utils/eol'
import { codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/eol', () => {
  it('should return `false` if `code` is not line ending', () => {
    expect(testSubject(codes.eof)).to.be.false
  })

  it.each<keyof typeof codes>([
    'cr',
    'crlf',
    'lf',
    'ls',
    'ps',
    'vcr',
    'vlf'
  ])('should return `true` if `code` is line ending (codes.%s)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
