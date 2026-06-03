/**
 * @file Type Tests - Construct
 * @module fsm-tokenizer/interfaces/tests/unit-d/Construct
 */

import type TestSubject from '#interfaces/construct'
import type {
  ConstructPosition,
  Guard,
  Resolver,
  Tokenizer
} from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Construct', () => {
  it('should match [add?: ConstructPosition | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('add')
      .toEqualTypeOf<Nilable<ConstructPosition>>()
  })

  it('should match [concrete?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('concrete')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [name?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [partial?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('partial')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [previous?: Guard | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('previous')
      .toEqualTypeOf<Nilable<Guard>>()
  })

  it('should match [resolve?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolve')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [resolveAll?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveAll')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [resolveTo?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveTo')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [tokenize: Tokenizer]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenize')
      .toEqualTypeOf<Tokenizer>()
  })
})
