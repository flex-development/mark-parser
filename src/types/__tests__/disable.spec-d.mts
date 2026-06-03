/**
 * @file Type Tests - Disable
 * @module fsm-tokenizer/types/tests/unit-d/Disable
 */

import type TestSubject from '#types/disable'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/Disable', () => {
  it('should match [null?: string[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('null')
      .toEqualTypeOf<Nilable<string[]>>()
  })
})
