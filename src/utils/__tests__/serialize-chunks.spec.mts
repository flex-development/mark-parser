/**
 * @file Unit Tests - serializeChunks
 * @module mark-parser/utils/tests/unit/serializeChunks
 */

import testSubject from '#utils/serialize-chunks'
import { chars, codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/serializeChunks', () => {
  it.each<Parameters<typeof testSubject>>([
    [[codes.vlf, codes.vcr, codes.crlf]],
    [
      [[codes.vht, codes.vs], codes.break, [codes.digit1]],
      {
        breaks: chars.empty
      }
    ],
    [[codes.vht, codes.vs, codes.digit2], true],
    [[[codes.empty], codes.break, [codes.digit3]], { breaks: chars.space }],
    [['hello', codes.break, 'world'], { breaks: true }]
  ])('should return string value of `chunks` (%#)', (chunks, options) => {
    expect(testSubject(chunks, options)).toMatchSnapshot()
  })
})
