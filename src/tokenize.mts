/**
 * @file tokenize
 * @module fsm-tokenizer/tokenize
 */

import type {
  Tokenizable,
  TokenizeOptions
} from '@flex-development/fsm-tokenizer'
import type {
  Event,
  FileLike,
  TokenizeContext,
  Value
} from '@flex-development/fsm/parse'
import codes from './enums/codes.mts'
import isList from './internal/is-list.mts'
import nil from './internal/nil.mts'
import size from './internal/size.mts'
import decode from './utils/decode.mts'

export default tokenize

/**
 * Tokenize a `value`.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Tokenizable}
 * @see {@linkcode TokenizeContext}
 * @see {@linkcode TokenizeOptions}
 *
 * @this {void}
 *
 * @param {Tokenizable | null | undefined} value
 *  The file, value, or list to tokenize
 * @param {TokenizeContext} context
 *  The tokenizer to write to
 * @param {TokenizeOptions | null | undefined} [options]
 *  Options for tokenizing `value`
 * @return {Event[]}
 *  The list of events
 */
function tokenize(
  this: void,
  value: Tokenizable | null | undefined,
  context: TokenizeContext,
  options?: TokenizeOptions | null | undefined
): Event[] {
  options ??= {}

  if (isList<FileLike | Value>(value)) {
    /**
     * The size of the list.
     *
     * @const {number} count
     */
    const count: number = size(value)

    for (const [index, chunk] of decode(value, context.encoding).entries()) {
      /**
       * Whether this is the end of the stream.
       *
       * @const {boolean} end
       */
      const end: boolean = index === count - 1

      // write to tokenizer or chunk again and write.
      if (chunk === codes.empty || !options.chunker) {
        context.write(chunk)
      } else {
        chunker(options.chunker, chunk)
      }

      // conditionally write stream break.
      if (options.breaks && !end) context.write(codes.break)
    }
  } else if (!nil(value)) {
    /**
     * The decoded chunk.
     *
     * @const {string | typeof codes.empty} decoded
     */
    const decoded: string | typeof codes.empty = decode(value, context.encoding)

    if (decoded === codes.empty) {
      context.write(decoded)
    } else if (options.chunker) {
      chunker(options.chunker, decoded)
    } else {
      context.write(context.preprocess(decoded, context.encoding))
    }
  }

  return context.write(codes.eos)

  /**
   * @this {void}
   *
   * @param {RegExp} pattern
   *  The regular expression used to create chunks
   * @param {string} input
   *  The string to chunk
   * @return {undefined}
   */
  function chunker(this: void, pattern: RegExp, input: string): undefined {
    /**
     * The index where the last match ends.
     *
     * @var {number} index
     */
    let index: number = 0

    // write chunks to the tokenizer.
    for (const { 0: match, index: start } of input.matchAll(pattern)) {
      /**
       * The index at which the match ends.
       *
       * @const {number} end
       */
      const end: number = start + match.length

      // text between matches.
      if (start > index) context.write(input.slice(index, start))

      // the match itself; write preprocessed match to stream.
      context.write(context.preprocess(match))
      index = end
    }

    // remaining tail text; write character code chunks to stream.
    index < input.length && context.write(input.slice(index))

    return void context
  }
}
