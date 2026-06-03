/**
 * @file Type Tests - TokenInfo
 * @module fsm-tokenizer/interfaces/tests/unit-d/TokenInfo
 */

import type TestSubject from '#interfaces/token-info'
import type { Position, TokenFields } from '@flex-development/fsm-tokenizer'

describe('unit-d:interfaces/TokenInfo', () => {
  it('should extend Position', () => {
    expectTypeOf<TestSubject>().toExtend<Position>()
  })

  it('should extend TokenFields', () => {
    expectTypeOf<TestSubject>().toExtend<TokenFields>()
  })
})
