/**
 * @file Type Tests - TokenizeOptions
 * @module mark-parser/interfaces/tests/unit-d/TokenizeOptions
 */

import type TestSubject from '#interfaces/tokenize-options'
import type {
  PreprocessOptions,
  Preprocessor
} from '@flex-development/mark-parser'
import type { Encoding } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/TokenizeOptions', () => {
  it('should extend PreprocessOptions', () => {
    expectTypeOf<TestSubject>().toExtend<PreprocessOptions>()
  })

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

  it('should match [encoding?: Encoding | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('encoding')
      .toEqualTypeOf<Nilable<Encoding>>()
  })

  it('should match [preprocess?: Preprocessor | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocessor>>()
  })
})
