/**
 * @file Type Tests - Restore
 * @module mark-parser/types/tests/unit-d/Restore
 */

import type TestSubject from '#types/restore'
import type { EmptyArray } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'

describe('unit-d:types/Restore', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<EmptyArray>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
