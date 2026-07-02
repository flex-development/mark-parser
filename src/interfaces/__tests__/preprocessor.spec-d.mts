/**
 * @file Type Tests - Preprocessor
 * @module mark-parser/interfaces/tests/unit-d/Preprocessor
 */
import type {
  Code,
  Encoding,
  FileLike,
  Value
} from '@flex-development/mark/parse'
import type TestSubject from '../preprocessor.mts'

describe('unit-d:interfaces/Preprocessor', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Code | FileLike | Value | undefined, Encoding | null | undefined, true]', () => {
      // Arrange
      type Expect = [
        value: Code | FileLike | Value | undefined,
        encoding: Encoding | null | undefined,
        end: true
      ]

      // Expect
      expectTypeOf<TestSubject>().parameters.extract<Expect>().not.toBeNever()
    })

    it('should be callable with [Code | FileLike | Value | undefined, (Encoding | null | undefined)?, (boolean | null | undefined)?]', () => {
      // Arrange
      type Expect = [
        value: Code | FileLike | Value | undefined,
        encoding?: Encoding | null | undefined,
        end?: boolean | null | undefined
      ]

      // Expect
      expectTypeOf<TestSubject>().parameters.extract<Expect>().not.toBeNever()
    })

    it('should be callable with [Code | FileLike | Value | undefined, (Encoding | null | undefined)?, (false | null | undefined)?]', () => {
      // Arrange
      type Expect = [
        value: Code | FileLike | Value | undefined,
        encoding?: Encoding | null | undefined,
        end?: false | null | undefined
      ]

      // Expect
      expectTypeOf<TestSubject>().parameters.extract<Expect>().not.toBeNever()
    })
  })

  describe('returns', () => {
    type T = Code
    type Subject = TestSubject<T>

    it('should return [...NonNullable<T>[], null] | NonNullable<T>[] | T[]', () => {
      // Arrange
      type Expect = [...NonNullable<T>[], null] | NonNullable<T>[] | T[]

      // Expect
      expectTypeOf<Subject>().returns.toEqualTypeOf<Expect>()
    })
  })
})
