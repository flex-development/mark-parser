/**
 * @file Type Tests - ConstructPositionMap
 * @module fsm-tokenizer/interfaces/tests/unit-d/ConstructPositionMap
 */

import type TestSubject from '../construct-position-map.mts'

describe('unit-d:interfaces/ConstructPositionMap', () => {
  it('should match [after: "after"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('after').toEqualTypeOf<'after'>()
  })

  it('should match [before: "before"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('before')
      .toEqualTypeOf<'before'>()
  })
})
