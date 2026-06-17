/**
 * @file Type Tests - CreateExtensions
 * @module fsm-tokenizer/types/tests/unit-d/CreateExtensions
 */

import type TestSubject from '#types/create-extensions'
import type { Extensions } from '@flex-development/fsm/parse'

describe('unit-d:types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return Extensions', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Extensions>()
    })
  })
})
