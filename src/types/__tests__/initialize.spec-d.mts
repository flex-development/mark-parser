/**
 * @file Type Tests - Initialize
 * @module fsm-tokenizer/types/tests/unit-d/Initialize
 */

import type TestSubject from '#types/initialize'
import type {
  CreateInitial,
  InitialConstruct,
  InitialConstructs
} from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Initialize', () => {
  it('should extract CreateInitial', () => {
    expectTypeOf<TestSubject>().extract<CreateInitial>().not.toBeNever()
  })

  it('should extract InitialConstruct', () => {
    expectTypeOf<TestSubject>().extract<InitialConstruct>().not.toBeNever()
  })

  it('should extract InitialConstructs', () => {
    expectTypeOf<TestSubject>().extract<InitialConstructs>().not.toBeNever()
  })
})
