/**
 * @file Unit Tests - serializeChunks
 * @module mark-parser/utils/tests/unit/serializeChunks
 */

import testSubject from '#utils/serialize-chunks'
import { chars, codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/serializeChunks', () => {
  it.each<Parameters<typeof testSubject>>([
    [[codes.bos, codes.sof, codes.empty]],
    [[codes.vlf, codes.vcr, codes.crlf]],
    [[codes.vht, codes.vs, codes.digit1]],
    [[codes.vht, codes.vs, codes.digit3], true],
    [[codes.digit3, codes.break, '13'], { breaks: chars.slash }],
    [[codes.lowercaseH, codes.break, codes.lowercaseI]],
    [['hello', codes.break, 'world'], { breaks: true }]
  ])('should return string value of `chunks` (%#)', (chunks, options) => {
    expect(testSubject(chunks, options)).toMatchSnapshot()
  })
})
