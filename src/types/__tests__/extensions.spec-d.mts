/**
 * @file Type Tests - Extensions
 * @module fsm-tokenizer/types/tests/unit-d/Extensions
 */

import type TestSubject from '#types/extensions'
import type { Extension, List } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Extensions', () => {
  it('should extract Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should extract List<Extension>', () => {
    expectTypeOf<TestSubject>().extract<List<Extension>>().not.toBeNever()
  })
})
