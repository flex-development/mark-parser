/**
 * @file Type Tests - NamedConstruct
 * @module fsm-tokenizer/interfaces/tests/unit-d/NamedConstruct
 */

import type TestSubject from '#interfaces/named-construct'
import type { Construct } from '@flex-development/fsm-tokenizer'

describe('unit-d:interfaces/NamedConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<string>()
  })
})
