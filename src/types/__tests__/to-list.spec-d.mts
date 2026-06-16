/**
 * @file Type Tests - ToList
 * @module fsm-tokenizer/types/tests/unit-d/ToList
 */

import type TestSubject from '#types/to-list'
import type { Chunk } from '@flex-development/fsm/parse'

describe('unit-d:types/ToList', () => {
  it('should return T if T extends readonly unknown[]', () => {
    // Arrange
    type T = readonly Chunk[]

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  it('should return T[] if T does not extend List', () => {
    // Arrange
    type T = string

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should return U[] if T extends ReadonlySet<infer U>', () => {
    // Arrange
    type U = Chunk
    type T = ReadonlySet<U>

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<U[]>()
  })

  it('should return U[] if T extends Set<infer U>', () => {
    // Arrange
    type U = Chunk
    type T = Set<U>

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<U[]>()
  })
})
