/**
 * @file Type Tests - List
 * @module fsm-tokenizer/types/tests/unit-d/List
 */

import type TestSubject from '#types/list'

describe('unit-d:types/List', () => {
  type T = string
  type Subject = TestSubject<T>

  it('should extract ReadonlySet<T>', () => {
    expectTypeOf<Subject>().extract<ReadonlySet<T>>().not.toBeNever()
  })

  it('should extract readonly T[]', () => {
    expectTypeOf<Subject>().extract<readonly T[]>().not.toBeNever()
  })
})
