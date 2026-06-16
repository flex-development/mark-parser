/**
 * @file Type Tests - FinalizeContext
 * @module fsm-tokenizer/types/tests/unit-d/FinalizeContext
 */

import type TestSubject from '#types/finalize-context'
import type { Options } from '@flex-development/fsm-tokenizer'
import type {
  InitialConstruct,
  InitialConstructs,
  TokenizeContext
} from '@flex-development/fsm/parse'

describe('unit-d:types/FinalizeContext', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [TokenizeContext, InitialConstruct | InitialConstructs, Partial<Options>]', () => {
      // Arrange
      type Expect = [
        TokenizeContext,
        InitialConstruct | InitialConstructs,
        Partial<Options>
      ]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<null | undefined>()
    })
  })
})
