/**
 * @file Type Tests - FinalizeContext
 * @module mark-parser/types/tests/unit-d/FinalizeContext
 */

import type TestSubject from '#types/finalize-context'
import type { Options } from '@flex-development/mark-parser'
import type {
  Context,
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'

describe('unit-d:types/FinalizeContext', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Context, InitialConstruct | InitialConstructs, Partial<Options>]', () => {
      // Arrange
      type Expect = [
        Context,
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
