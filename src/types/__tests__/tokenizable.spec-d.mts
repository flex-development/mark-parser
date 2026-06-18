/**
 * @file Type Tests - Tokenizable
 * @module mark-parser/types/tests/unit-d/Tokenizable
 */

import type TestSubject from '#types/tokenizable'
import type { List } from '@flex-development/mark/core'
import type { FileLike, Value } from '@flex-development/mark/parse'

describe('unit-d:types/Tokenizable', () => {
  it('should extract FileLike', () => {
    expectTypeOf<TestSubject>().extract<FileLike>().not.toBeNever()
  })

  it('should extract List<FileLike | Value>', () => {
    // Arrange
    type Expect = List<FileLike | Value>

    // Expect
    expectTypeOf<TestSubject>().extract<Expect>().not.toBeNever()
  })

  it('should extract Value', () => {
    expectTypeOf<TestSubject>().extract<Value>().not.toBeNever()
  })
})
