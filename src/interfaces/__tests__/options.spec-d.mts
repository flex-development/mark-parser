/**
 * @file Type Tests - Options
 * @module fsm-tokenizer/interfaces/tests/unit-d/Options
 */

import type TestSubject from '#interfaces/options'
import type {
  CodeCheck,
  Extensions,
  FinalizeContext,
  Initialize,
  PreprocessOptions
} from '@flex-development/fsm-tokenizer'
import type { List } from '@flex-development/fsm/core'
import type {
  CreateToken,
  Encoding,
  ParseContext,
  Point,
  Preprocess
} from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Options', () => {
  it('should extend PreprocessOptions', () => {
    expectTypeOf<TestSubject>().toExtend<PreprocessOptions>()
  })

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

  it('should match [encoding?: Encoding | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('encoding')
      .toEqualTypeOf<Nilable<Encoding>>()
  })

  it('should match [extensions?: Extensions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Nilable<Extensions>>()
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

  it('should match [parser?: ParseContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parser')
      .toEqualTypeOf<Nilable<ParseContext>>()
  })

  it('should match [preprocess?: Preprocess | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocess>>()
  })

  it('should match [token?: CreateToken | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('token')
      .toEqualTypeOf<Nilable<CreateToken>>()
  })
})
