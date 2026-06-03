/**
 * @file Type Tests - ContentExtensions
 * @module fsm-tokenizer/types/tests/unit-d/ContentExtensions
 */

import type TestSubject from '#types/content-extensions'
import type {
  ConstructRecord,
  ContentType
} from '@flex-development/fsm-tokenizer'

describe('unit-d:types/ContentExtensions', () => {
  it('should match Partial<Record<ContentType, ConstructRecord | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<
      ContentType,
      ConstructRecord | null | undefined
    >>

    // Expect
    expectTypeOf<TestSubject>().toMatchObjectType<Expect>()
  })
})
