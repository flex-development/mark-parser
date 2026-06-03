/**
 * @file Type Tests - Extension
 * @module fsm-tokenizer/interfaces/tests/unit-d/Extension
 */

import type TestSubject from '#interfaces/extension'
import type {
  ContentExtensions,
  Disable
} from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Extension', () => {
  it('should extend ContentExtensions', () => {
    expectTypeOf<TestSubject>().toExtend<ContentExtensions>()
  })

  it('should match [disable?: Disable | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disable')
      .toEqualTypeOf<Nilable<Disable>>()
  })
})
