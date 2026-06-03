/**
 * @file Type Tests - ConstructPosition
 * @module fsm-tokenizer/types/tests/unit-d/ConstructPosition
 */

import type TestSubject from '#types/construct-position'
import type { ConstructPositionMap } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/ConstructPosition', () => {
  it('should equal ConstructPositionMap[keyof ConstructPositionMap]', () => {
    // Arrange
    type Expect = ConstructPositionMap[keyof ConstructPositionMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
