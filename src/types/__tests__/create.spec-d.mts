/**
 * @file Type Tests - Create
 * @module fsm-tokenizer/types/tests/unit-d/Create
 */

import type TestSubject from '#types/create'
import type { Point, TokenizeContext } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Create', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Point | null | undefined)?]', () => {
      // Arrange
      type Expect = [(Point | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return TokenizeContext', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<TokenizeContext>()
    })
  })
})
