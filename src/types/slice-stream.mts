/**
 * @file Type Aliases - SliceStream
 * @module fsm-tokenizer/types/SliceStream
 */

import type { Chunk, Range } from '@flex-development/fsm-tokenizer'

/**
 * Get the chunks spanning `range`.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Range}
 *
 * @this {void}
 *
 * @param {Range} range
 *  The position in stream
 * @return {Chunk[]}
 *  The chunks in stream spanning `range`
 */
type SliceStream = (this: void, range: Range) => Chunk[]

export type { SliceStream as default }
