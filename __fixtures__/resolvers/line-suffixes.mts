/**
 * @file Resolvers - resolveLineSuffixes
 * @module fixtures/resolvers/resolveLineSuffixes
 * @see https://github.com/micromark/micromark/blob/main/packages/micromark/dev/lib/initialize/text.js#L144-L244
 */

import { codes, ev } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  Event,
  Place,
  Token,
  TokenizeContext,
  TokenType
} from '@flex-development/mark/parse'
import { constants, types as tt } from 'micromark-util-symbol'

/**
 * Resolve line suffixes.
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {TokenizeContext} context
 *  The tokenization context
 * @return {Event[]}
 *  The list of changed events
 */
function resolveLineSuffixes(
  this: void,
  events: Event[],
  context: TokenizeContext
): Event[] {
  /**
   * The index of the current event.
   *
   * > 👉 **Note**: Starts at `0` to skip the first event.
   *
   * @var {number} index
   */
  let index: number = 0

  while (++index <= events.length) {
    if (index === events.length || events[index]![1].type === tt.lineEnding) {
      if (events[index - 1]![1].type === tt.data) {
        /**
         * The data token.
         *
         * @const {Token} data
         */
        const data: Token = events[index - 1]![1]

        /**
         * The chunks spanning {@linkcode data}.
         *
         * @const {Chunk[]} chunks
         */
        const chunks: Chunk[] = context.sliceStream(data)

        /**
         * The current buffer index.
         *
         * @var {number} bufferIndex
         */
        let bufferIndex: number = -1

        /**
         * The index of the current chunk.
         *
         * @var {number} chunkIndex
         */
        let chunkIndex: number = chunks.length

        /**
         * The size of the line suffix.
         *
         * @var {number} size
         */
        let size: number = 0

        /**
         * Whether tabs were used.
         *
         * @var {boolean | undefined} tabs
         */
        let tabs: boolean | undefined = undefined

        while (chunkIndex--) {
          /**
           * The current chunk.
           *
           * @const {NonNullable<Chunk>} chunk
           */
          const chunk: NonNullable<Chunk> = chunks[chunkIndex]!

          if (typeof chunk === 'string') {
            bufferIndex = chunk.length

            while (chunk.codePointAt(bufferIndex - 1) === codes.space) {
              size++
              bufferIndex--
            }

            if (bufferIndex) break
            bufferIndex = -1
          } else if (chunk === codes.vht) {
            tabs = true
            size++
          } else if (chunk !== codes.vs) {
            chunkIndex++ // nul or replacement character, exit.
            break
          }
        }

        if (size) {
          /**
           * The position of the new token in a string chunk.
           *
           * @const {number} _bufferIndex
           */
          const _bufferIndex: number = chunkIndex
            ? bufferIndex
            : data.start._bufferIndex + bufferIndex

          /**
           * Whether a line suffix token should be inserted.
           *
           * @const {boolean} lineSuffix
           */
          const lineSuffix: boolean = index === events.length ||
            tabs ||
            size < constants.hardBreakPrefixSizeMin

          /**
           * The start point of the new token.
           *
           * @const {Place} start
           */
          const start: Place = {
            _bufferIndex,
            _index: data.start._index + chunkIndex,
            column: data.end.column - size,
            line: data.end.line,
            offset: data.end.offset - size
          }

          /**
           * The token type of the new token.
           *
           * @const {TokenType} type
           */
          const type: TokenType = lineSuffix
            ? tt.lineSuffix
            : tt.hardBreakTrailing

          /**
           * The new token.
           *
           * @const {Token} token
           */
          const token: Token = context.token(type, {
            end: Object.assign({}, data.end),
            start: (data.end = Object.assign({}, start), start)
          })

          if (data.start.offset === data.end.offset) {
            Object.assign(data, token)
          } else {
            /**
             * The new `enter` event.
             *
             * @const {Event} enter
             */
            const enter: Event = [ev.enter, token, context]

            /**
             * The new `exit` event.
             *
             * @const {Event} exit
             */
            const exit: Event = [ev.exit, token, context]

            events.splice(index, 0, enter, exit)
            index += 2
          }
        }

        index++
      }
    }
  }

  return events
}

export default resolveLineSuffixes
