/**
 * @file preprocess
 * @module mark-parser/preprocess
 */

import type { PreprocessOptions } from '@flex-development/mark-parser'
import type {
  Code,
  Column,
  Encoding,
  FileLike,
  Preprocess,
  Value
} from '@flex-development/mark/parse'
import chars from './enums/chars.mts'
import codes from './enums/codes.mts'
import constants from './enums/constants.mts'
import nil from './internal/nil.mts'
import decode from './utils/decode.mts'

/**
 * Create a preprocessor to turn a value into character code chunks.
 *
 * @see {@linkcode Preprocess}
 * @see {@linkcode PreprocessOptions}
 *
 * @this {void}
 *
 * @param {PreprocessOptions | null | undefined} [options]
 *  The configuration options
 * @return {Preprocess}
 *  The character code preprocessor
 */
function preprocess(
  this: void,
  options?: PreprocessOptions | null | undefined
): Preprocess {
  /**
   * The number of spaces a tab is equivalent to.
   *
   * @const {number} tabSize
   */
  const tabSize: number = options?.tabSize ?? constants.tabSize

  Object.defineProperties(preprocessor, { name: { value: 'preprocess' } })
  return preprocessor as Preprocess

  /**
   * Turn `value` into character code chunks.
   *
   * @this {void}
   *
   * @param {Code | FileLike | Value | undefined} value
   *  The code, file, or value to preprocess
   * @param {Encoding | null | undefined} [encoding]
   *  The character encoding to use when `value`
   *  or its contents is {@linkcode Uint8Array}
   * @param {boolean | null | undefined} [end]
   *  Whether the end of stream has been reached
   * @return {Code[]}
   *  The list of character code chunks
   */
  function preprocessor(
    this: void,
    value: Code | FileLike | Value | undefined,
    encoding?: Encoding | null | undefined,
    end?: boolean | null | undefined
  ): Code[] {
    /**
     * The list of character code chunks.
     *
     * @const {Code[]} chunks
     */
    const chunks: Code[] = []

    if (typeof value === 'number') {
      chunks.push(value)
    } else if (value === chars.empty) {
      chunks.push(codes.empty)
    } else if (!nil(value)) {
      value = decode<string | typeof codes.empty>(value, encoding)

      if (typeof value === 'number') {
        chunks.push(codes.empty)
      } else {
        /**
         * The current column.
         *
         * @var {Column} column
         */
        let column: Column = 1

        /**
         * The index of the current character code.
         *
         * @var {number} index
         */
        let index: number = 0

        while (index < value.length) {
          /**
           * The current character code.
           *
           * @var {NonNullable<Code>} code
           */
          let code: NonNullable<Code> = value[index]!.codePointAt(0)!

          /**
           * The difference between the next column and the current column.
           *
           * @var {number} k
           */
          let k: number = 1

          switch (true) {
            case code === codes.cr:
              if (value[index + 1]?.codePointAt(0) === codes.lf) {
                chunks.push(codes.crlf)
                k++
              } else {
                chunks.push(codes.vcr)
              }

              column = 1
              break
            case code === codes.ht:
              /**
               * The next column.
               *
               * @const {number} n
               */
              const n: number = Math.ceil(column / tabSize) * tabSize

              chunks.push(codes.vht)
              while (column++ < n) chunks.push(codes.vs)

              break
            case code === codes.lf:
              chunks.push(codes.vlf)
              column = 1
              break
            default:
              chunks.push(code)
              column++
              break
          }

          index += k
        }
      }
    }

    return end && chunks.push(codes.eos), chunks
  }
}

export default preprocess
