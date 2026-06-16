/**
 * @file Type Tests - Extensions
 * @module fsm-tokenizer/types/tests/unit-d/Extensions
 */

import type TestSubject from '#types/extensions'
import type { CreateExtensions } from '@flex-development/fsm-tokenizer'
import type { List } from '@flex-development/fsm/core'
import type { Extension } from '@flex-development/fsm/parse'

describe('unit-d:types/Extensions', () => {
  it('should extract CreateExtensions', () => {
    expectTypeOf<TestSubject>().extract<CreateExtensions>().not.toBeNever()
  })

  it('should extract Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should extract List<Extension>', () => {
    expectTypeOf<TestSubject>().extract<List<Extension>>().not.toBeNever()
  })
})
