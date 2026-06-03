/**
 * @file Type Tests - ContentType
 * @module fsm-tokenizer/types/tests/unit-d/ContentType
 */

import type TestSubject from '#types/content-type'
import type { ContentTypeMap } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/ContentType', () => {
  it('should equal ContentTypeMap[keyof ContentTypeMap]', () => {
    // Arrange
    type Expect = ContentTypeMap[keyof ContentTypeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
