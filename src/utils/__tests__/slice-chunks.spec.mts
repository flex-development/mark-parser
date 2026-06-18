/**
 * @file Unit Tests - sliceChunks
 * @module mark-parser/utils/tests/unit/sliceChunks
 */

import testSubject from '#utils/slice-chunks'
import { chars, codes } from '@flex-development/mark-util-symbol'

describe('unit:utils/sliceChunks', () => {
  it.each<Parameters<typeof testSubject>>([
    [
      [],
      {
        end: { _bufferIndex: -1, _index: 1 },
        start: { _bufferIndex: 13, _index: 0 }
      }
    ],
    [
      [codes.leftBracket, codes.rightBracket, codes.eos],
      {
        end: { _bufferIndex: -1, _index: 1 },
        start: { _bufferIndex: -1, _index: 1 }
      }
    ],
    [
      [
        chars.colon + chars.plus,
        codes.break,
        chars.digit1 + chars.colon,
        codes.eos
      ],
      {
        end: { _bufferIndex: 1, _index: 2 },
        start: { _bufferIndex: 1, _index: 0 }
      }
    ],
    [
      [
        codes.digit0,
        codes.digit1,
        codes.digit2,
        codes.digit3,
        codes.digit4,
        codes.digit5,
        codes.digit6,
        codes.digit7,
        codes.digit8,
        codes.digit9,
        codes.eos
      ],
      {
        end: { _bufferIndex: -1, _index: 7 },
        start: { _bufferIndex: -1, _index: 3 }
      }
    ],
    [
      ['--color=3', codes.eos],
      {
        end: { _bufferIndex: 7, _index: 0 },
        start: { _bufferIndex: 0, _index: 0 }
      }
    ],
    [
      [' hello world ', codes.eos],
      {
        end: { _bufferIndex: 12, _index: 0 },
        start: { _bufferIndex: 1, _index: 0 }
      }
    ]
  ])('should return chunks spanning `range` (%#)', (chunks, range) => {
    expect(testSubject(chunks, range)).toMatchSnapshot()
  })
})
