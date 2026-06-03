/**
 * @file Type Tests - Peek
 * @module fsm-tokenizer/types/tests/unit-d/Peek
 */

import type TestSubject from '#types/peek'
import type { Code } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Peek', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return Code', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Code>()
    })
  })
})
