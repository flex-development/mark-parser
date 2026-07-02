/**
 * @file Type Tests - Initialize
 * @module mark-parser/types/tests/unit-d/Initialize
 */

import type TestSubject from '#types/initialize'
import type { CreateInitial } from '@flex-development/mark-parser'
import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'

describe('unit-d:types/Initialize', () => {
  it('should extract CreateInitial', () => {
    expectTypeOf<TestSubject>().extract<CreateInitial>().not.toBeNever()
  })

  it('should extract InitialConstruct', () => {
    expectTypeOf<TestSubject>().extract<InitialConstruct>().not.toBeNever()
  })

  it('should extract Partial<InitialConstructs>', () => {
    expectTypeOf<TestSubject>()
      .extract<Partial<InitialConstructs>>()
      .not.toBeNever()
  })
})
