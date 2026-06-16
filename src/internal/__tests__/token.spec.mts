/**
 * @file Unit Tests - token
 * @module fsm-tokenizer/internal/tests/unit/token
 */

import tt from '#fixtures/tt'
import testSubject from '#internal/token'
import type { TokenInfo } from '@flex-development/fsm/parse'

describe('unit:internal/token', () => {
  let info: TokenInfo

  beforeAll(() => {
    info = {
      end: { _bufferIndex: -1, _index: 6, column: 10, line: 1, offset: 9 },
      start: { _bufferIndex: -1, _index: 5, column: 10, line: 1, offset: 9 }
    }
  })

  it('should return new token', () => {
    expect(testSubject(tt.eoc, info)).toMatchSnapshot()
  })
})
