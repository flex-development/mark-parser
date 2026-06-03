/**
 * @file Type Tests - Parsers
 * @module fsm-tokenizer/types/tests/unit-d/Parsers
 */

import type TestSubject from '#types/parsers'
import type { ContentType, Create } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Parsers', () => {
  it('should match Record<ContentType, Create>', () => {
    // Arrange
    type Expect = Record<ContentType, Create>

    // Expect
    expectTypeOf<TestSubject>().toMatchObjectType<Expect>()
  })
})
