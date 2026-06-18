/**
 * @file Type Tests - TokenizeOptions
 * @module mark-parser/interfaces/tests/unit-d/TokenizeOptions
 */

import type TestSubject from '#interfaces/tokenize-options'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/TokenizeOptions', () => {
  it('should match [breaks?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('breaks')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [chunker?: RegExp | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('chunker')
      .toEqualTypeOf<Nilable<RegExp>>()
  })
})
