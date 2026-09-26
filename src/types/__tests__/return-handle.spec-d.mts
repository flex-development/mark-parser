/**
 * @file Type Tests - ReturnHandle
 * @module mark-parser/types/tests/unit-d/ReturnHandle
 */

import type Info from '#types/info'
import type TestSubject from '#types/return-handle'
import type { Construct } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'

describe('unit-d:types/ReturnHandle', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Construct, Info]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Construct, Info]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
