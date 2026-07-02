/**
 * @file preprocess
 * @module mark-parser/preprocess
 */

import type {
  PreprocessOptions,
  Preprocessor
} from '@flex-development/mark-parser'
import { decode } from '@flex-development/mark-parser/utils'
import { codes, constants } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  Code,
  Encoding,
  FileLike,
  Value
} from '@flex-development/mark/parse'
import { equal } from 'devlop'
import nil from './internal/nil.mts'

export default preprocess

/**
 * Create a preprocessor.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Preprocessor}
 * @see {@linkcode PreprocessOptions}
 *
 * @this {void}
 *
 * @param {PreprocessOptions | null | undefined} [options]
 *  The configuration options
 * @return {Preprocessor<Code>}
 *  The character code preprocessor
 */
function preprocess(
  this: void,
  options?: PreprocessOptions | null | undefined
): Preprocessor<Code> {
  /**
   * The number of columns represented by a horizontal tab.
   *
   * @const {number} tabSize
   */
  const tabSize: number = options?.tabSize ?? constants.tabSize

  return preprocessor as Preprocessor<Code>

  /**
   * Turn `value` into character code chunks.
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

    /**
     * Whether the previous chunk was a carriage return.
     *
     * If the next chunk is a line feed, both characters are normalized into a
     * single CRLF virtual code.
     *
     * @var {boolean} atCarriageReturn
     */
    let atCarriageReturn: boolean = false

    /**
     * The current visual column.
     *
     * Used to determine how many virtual spaces follow a horizontal tab.
     *
     * @var {number} column
     */
    let column: number = 1

    /**
     * The index of the current character code.
     *
     * @var {number} index
     */
    let index: number = 0

    // add character code chunk.,
    // or decode file or value and extract character code chunks.
    if (typeof value === 'number') {
      chunks.push(value)
    } else if (!nil(value)) {
      /**
       * The decoded chunk.
       *
       * @var {Chunk | undefined} decoded
       */
      let decoded: Chunk | undefined = decode(value, encoding)

      // empty file or value was decoded.
      if (typeof decoded === 'number') {
        equal(decoded, codes.empty, 'expected `codes.empty`')
        if (options?.allowEmptyChunk) chunks.push(codes.empty)
      } else {
        // value is now decoded.
        value = decoded

        // move past byte order mark.
        if (options?.ignoreBOM && value.codePointAt(0) === codes.bom) index++

        // store character code chunks.
        while (index < value.length) {
          /**
           * The current character code.
           *
           * @const {NonNullable<Code>} code
           */
          const code: NonNullable<Code> = value.codePointAt(index)!

          /**
           * The difference between the next column and the current column.
           *
           * @var {number} k
           */
          let k: number = code > 0xffff ? 2 : 1

          // handle carriage return.
          if (atCarriageReturn) {
            atCarriageReturn = false

            // if the next chunk is a line feed,
            // both characters are normalized into a single crlf virtual code.

            // normalize carriage return and line feed.
            if (code === codes.lf) {
              chunks.push(codes.crlf)
              index += k
              continue
            }

            // carriage return without line feed.
            chunks.push(codes.vcr)
          }

          // process character code.
          switch (code) {
            case codes.cr:
              atCarriageReturn = true
              column = 1
              break
            case codes.ht:
              /**
               * The next column.
               *
               * @const {number} n
               */
              const n: number = Math.ceil(column / tabSize) * tabSize

              // normalize htab into virtual htab and spaces.
              chunks.push(codes.vht)
              while (column++ < n) chunks.push(codes.vs)

              break
            case codes.lf: // add virtual line feed.
              chunks.push(codes.vlf)
              column = 1
              break
            case codes.nul: // substitute nul with replacement character.
              chunks.push(options?.nul ? codes.nul : codes.replacement)
              column++
              break
            default: // normal code point.
              chunks.push(code)
              column++
              break
          }

          index += k
        }
      }
    }

    // end of stream.
    if (end) {
      if (atCarriageReturn) chunks.push(codes.vcr)
      chunks.push(codes.eos)
    }

    return chunks
  }
}
