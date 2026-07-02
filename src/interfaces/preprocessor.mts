/**
 * @file Interfaces - Preprocessor
 * @module mark-parser/interfaces/Preprocessor
 */

import type {
  Chunk,
  Code,
  Encoding,
  FileLike,
  Value
} from '@flex-development/mark/parse'

/**
 * Turn a code, file, or value into chunks.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Code}
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode Value}
 *
 * @template {Chunk} [T]
 *  The preprocessor output
 */
interface Preprocessor<T extends Chunk = Chunk> {
  /**
   * Turn `value` into chunks.
   *
   * @see {@linkcode Code}
   * @see {@linkcode Encoding}
   * @see {@linkcode FileLike}
   * @see {@linkcode Value}
   *
   * @this {void}
   *
   * @param {Code | FileLike | Value | undefined} value
   *  The code, file, or value to preprocess
   * @param {Encoding | null | undefined} encoding
   *  The character encoding to use when `value`
   *  or its contents is an {@linkcode Uint8Array}
   * @param {true} end
   *  Whether the end of stream has been reached
   * @return {[...NonNullable<T>[], null]}
   *  The list of chunks
   */
  (
    this: void,
    value: Code | FileLike | Value | undefined,
    encoding: Encoding | null | undefined,
    end: true
  ): [...NonNullable<T>[], null]

  /**
   * Turn `value` into chunks.
   *
   * @see {@linkcode Code}
   * @see {@linkcode Encoding}
   * @see {@linkcode FileLike}
   * @see {@linkcode Value}
   *
   * @this {void}
   *
   * @param {Code | FileLike | Value | undefined} value
   *  The code, file, or value to preprocess
   * @param {Encoding | null | undefined} encoding
   *  The character encoding to use when `value`
   *  or its contents is an {@linkcode Uint8Array}
   * @param {false | null | undefined} [end]
   *  Whether the end of stream has been reached
   * @return {NonNullable<T>[]}
   *  The list of chunks
   */
  (
    this: void,
    value: Code | FileLike | Value | undefined,
    encoding?: Encoding | null | undefined,
    end?: false | null | undefined
  ): NonNullable<T>[]

  /**
   * Turn `value` into chunks.
   *
   * @see {@linkcode Code}
   * @see {@linkcode Encoding}
   * @see {@linkcode FileLike}
   * @see {@linkcode Value}
   *
   * @this {void}
   *
   * @param {Code | FileLike | Value | undefined} value
   *  The code, file, or value to preprocess
   * @param {Encoding | null | undefined} [encoding]
   *  The character encoding to use when `value`
   *  or its contents is an {@linkcode Uint8Array}
   * @param {boolean | null | undefined} [end]
   *  Whether the end of stream has been reached
   * @return {T[]}
   *  The list of chunks
   */
  (
    this: void,
    value: Code | FileLike | Value | undefined,
    encoding?: Encoding | null | undefined,
    end?: boolean | null | undefined
  ): T[]
}

export type { Preprocessor as default }
