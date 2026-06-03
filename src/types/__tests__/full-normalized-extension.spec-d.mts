/**
 * @file Type Tests - FullNormalizedExtension
 * @module fsm-tokenizer/types/tests/unit-d/FullNormalizedExtension
 */

import type TestSubject from '#types/full-normalized-extension'
import type {
  ConstructRecord,
  ContentType,
  Extension,
  NormalizedExtension
} from '@flex-development/fsm-tokenizer'
import type { NIL } from '@flex-development/tutils'

describe('unit-d:types/FullNormalizedExtension', () => {
  it('should extend `Extension`', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should extend `NormalizedExtension`', () => {
    expectTypeOf<TestSubject>().toExtend<NormalizedExtension>()
  })

  it('should require all `Extension` properties and remove `NIL`', () => {
    // Arrange
    type K = Exclude<keyof Extension, ContentType>
    type V = Exclude<Extension[K], NIL>
    type Expect = Record<K, V> & Record<ContentType, ConstructRecord>

    // Expect
    expectTypeOf<TestSubject>().toExtend<Expect>()
  })
})
