/**
 * @file Type Tests - NormalizedExtension
 * @module fsm-tokenizer/types/tests/unit-d/NormalizedExtension
 */

import type TestSubject from '#types/normalized-extension'
import type {
  ConstructRecord,
  ContentType,
  Extension
} from '@flex-development/fsm-tokenizer'
import type { NIL } from '@flex-development/tutils'

describe('unit-d:types/NormalizedExtension', () => {
  it('should extend `Extension`', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should remove `NIL` from `Extension` properties', () => {
    // Arrange
    type K = Exclude<keyof Extension, ContentType>
    type V = Exclude<Extension[K], NIL>
    type U = Record<K, V> & Record<ContentType, ConstructRecord>

    // Expect
    expectTypeOf<TestSubject>().toExtend<Partial<U>>()
  })
})
