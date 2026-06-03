/**
 * @file Type Tests - ParseContext
 * @module fsm-tokenizer/interfaces/tests/unit-d/ParseContext
 */

import type TestSubject from '#interfaces/parse-context'
import type {
  FullNormalizedExtension,
  Parsers
} from '@flex-development/fsm-tokenizer'

describe('unit-d:interfaces/ParseContext', () => {
  it('should extend Parsers', () => {
    expectTypeOf<TestSubject>().toExtend<Parsers>()
  })

  it('should match [constructs: FullNormalizedExtension]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('constructs')
      .toEqualTypeOf<FullNormalizedExtension>()
  })
})
