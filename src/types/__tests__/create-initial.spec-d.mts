/**
 * @file Type Tests - CreateInitial
 * @module fsm-tokenizer/types/tests/unit-d/CreateInitial
 */

import type TestSubject from '#types/create-initial'
import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/fsm/parse'
import type { EmptyArray } from '@flex-development/tutils'

describe('unit-d:types/CreateInitial', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<EmptyArray>()
    })
  })

  describe('returns', () => {
    it('should return InitialConstruct', () => {
      // Arrange
      type Expect = InitialConstruct | InitialConstructs

      // Expect
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expect>()
    })
  })
})
