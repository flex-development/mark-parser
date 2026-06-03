/**
 * @file Type Tests - PartialConstruct
 * @module fsm-tokenizer/interfaces/tests/unit-d/PartialConstruct
 */

import type TestSubject from '#interfaces/partial-construct'
import type { Construct } from '@flex-development/fsm-tokenizer'

describe('unit-d:interfaces/PartialConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [partial: true]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('partial').toEqualTypeOf<true>()
  })
})
