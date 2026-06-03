/**
 * @file Type Aliases - Write
 * @module fsm-tokenizer/types/Write
 */

import type {
  Chunk,
  Event,
  FileLike,
  List,
  Value
} from '@flex-development/fsm-tokenizer'

/**
 * Write a slice of chunks.
 *
 * The eof code (`null`) can be used to signal end of stream.
 *
 * > 👉 **Note**: Chunks that are not character codes or buffer chunks (arrays
 * > containing numeric character codes) will be converted to such using the
 * > specified character code preprocessor, or the default preprocessor if one
 * > is not specified.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Event}
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 *
 * @this {void}
 *
 * @param {Chunk | FileLike | List<Chunk | FileLike | Value> | Value} slice
 *  The chunk, file, buffer, or list to write
 * @return {Event[]}
 *  The current list of events
 */
type Write = (
  this: void,
  slice: Chunk | FileLike | List<Chunk | FileLike | Value> | Value
) => Event[]

export type { Write as default }
