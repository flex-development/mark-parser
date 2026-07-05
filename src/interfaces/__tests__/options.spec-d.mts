/**
 * @file Type Tests - Options
 * @module mark-parser/interfaces/tests/unit-d/Options
 */

import type TestSubject from '#interfaces/options'
import type {
  CreateExtensions,
  FinalizeContext,
  Initialize
} from '@flex-development/mark-parser'
import type { List } from '@flex-development/mark/core'
import type {
  CodeCheck,
  CreateToken,
  Extensions,
  ParseContext,
  Point
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Options', () => {
  it('should match [debug?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('debug')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [disable?: List<string> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disable')
      .toEqualTypeOf<Nilable<List<string>>>()
  })

  it('should match [eol?: CodeCheck | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('eol')
      .toEqualTypeOf<Nilable<CodeCheck>>()
  })

  it('should match [extensions?: CreateExtensions | Extensions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Nilable<CreateExtensions | Extensions>>()
  })

  it('should match [finalizeContext?: FinalizeContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('finalizeContext')
      .toEqualTypeOf<Nilable<FinalizeContext>>()
  })

  it('should match [from?: Point | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Nilable<Point>>()
  })

  it('should match [initialize: Initialize]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('initialize')
      .toEqualTypeOf<Initialize>()
  })

  it('should match [moveOnBreak?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moveOnBreak')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noEmptyTokens?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmptyTokens')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noPrevious?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noPrevious')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [parser?: ParseContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parser')
      .toEqualTypeOf<Nilable<ParseContext>>()
  })

  it('should match [token?: CreateToken | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('token')
      .toEqualTypeOf<Nilable<CreateToken>>()
  })
})
