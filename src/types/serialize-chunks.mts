/**
 * @file Type Aliases - SerializeChunks
 * @module fsm-tokenizer/types/SerializeChunks
 */

import type {
  Chunk,
  Code,
  SerializeOptions
} from '@flex-development/fsm-tokenizer'

/**
 * Get the string value of a slice of `chunks`.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Code}
 * @see {@linkcode SerializeOptions}
 *
 * @this {void}
 *
 * @param {(Chunk | NonNullable<Code>[])[]} chunks
 *  The chunks to serialize
 * @param {SerializeOptions | boolean | null | undefined} [options]
 *  Options for serializing or whether to expand tabs
 * @return {string}
 *  The string value of `chunks`
 */
type SerializeChunks = (
  this: void,
  chunks: (Chunk | NonNullable<Code>[])[],
  options?: SerializeOptions | boolean | null | undefined
) => string

export type { SerializeChunks as default }
