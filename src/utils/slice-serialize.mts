/**
 * @file Utilities - sliceSerialize
 * @module fsm-tokenizer/utils/sliceSerialize
 */

import type { List } from '@flex-development/fsm/core'
import type {
  Chunk,
  Range,
  SerializeOptions
} from '@flex-development/fsm/parse'
import serializeChunks from './serialize-chunks.mts'
import sliceChunks from './slice-chunks.mts'

/**
 * Get the text spanning `range`.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode List}
 * @see {@linkcode Range}
 * @see {@linkcode SerializeOptions}
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {List<Chunk | string>} chunks
 *  List of chunks
 * @param {Range} range
 *  Position in stream
 * @param {SerializeOptions | boolean | null | undefined} [options]
 *  Options for serializing or whether to expand tabs
 * @return {string}
 *  Serialized slice
 */
function sliceSerialize(
  this: void,
  chunks: List<Chunk | string>,
  range: Range,
  options?: SerializeOptions | boolean | null | undefined
): string {
  return serializeChunks(sliceChunks(chunks, range), options)
}

export default sliceSerialize
