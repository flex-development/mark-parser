/**
 * @file Type Tests - CreateExtensions
 * @module fsm-tokenizer/types/tests/unit-d/CreateExtensions
 */

import type TestSubject from '#types/create-extensions'
import type { Extension, List } from '@flex-development/fsm-tokenizer'

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
    it('should return Extension | List<Extension>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | List<Extension>>()
    })
  })
})
