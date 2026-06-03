/**
 * @file Type Tests - TokenFields
 * @module fsm-tokenizer/interfaces/tests/unit-d/TokenFields
 */

import type TestSubject from '#interfaces/token-fields'
import type {
  ContentType,
  Token,
  TokenizeContext
} from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/TokenFields', () => {
  it('should match [_tokenizer?: TokenizeContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_tokenizer')
      .toEqualTypeOf<Nilable<TokenizeContext>>()
  })

  it('should match [contentType?: ContentType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('contentType')
      .toEqualTypeOf<Nilable<ContentType>>()
  })

  it('should match [next?: Token | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('next')
      .toEqualTypeOf<Nilable<Token>>()
  })

  it('should match [previous?: Token | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('previous')
      .toEqualTypeOf<Nilable<Token>>()
  })
})
