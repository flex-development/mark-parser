/**
 * @file Type Tests - InitialConstructs
 * @module fsm-tokenizer/types/tests/unit-d/InitialConstructs
 */

import type TestSubject from '#types/initial-constructs'
import type {
  ContentType,
  InitialConstruct
} from '@flex-development/fsm-tokenizer'

describe('unit-d:types/InitialConstructs', () => {
  it('should equal Record<ContentType, InitialConstruct>', () => {
    // Arrange
    type Expect = Record<ContentType, InitialConstruct>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
