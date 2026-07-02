/**
 * @file Type Tests - PreprocessOptions
 * @module mark-parser/interfaces/tests/unit-d/PreprocessOptions
 */

import type TestSubject from '#interfaces/preprocess-options'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/PreprocessOptions', () => {
  it('should match [allowEmptyChunk?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowEmptyChunk')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [ignoreBOM?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ignoreBOM')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [nul?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nul')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [tabSize?: number | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tabSize')
      .toEqualTypeOf<Nilable<number>>()
  })
})
