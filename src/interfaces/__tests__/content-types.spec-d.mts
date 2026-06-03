/**
 * @file Type Tests - ContentTypeMap
 * @module fsm-tokenizer/interfaces/tests/unit-d/TokenTypeMap
 */

import type TestSubject from '#interfaces/content-type-map'

describe('unit-d:interfaces/ContentTypeMap', () => {
  it('should register content types', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
