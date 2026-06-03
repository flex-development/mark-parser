/**
 * @file Type Aliases - Create
 * @module fsm-tokenizer/types/Create
 */

import type { Point, TokenizeContext } from '@flex-development/fsm-tokenizer'

/**
 * Create a tokenization context.
 *
 * @see {@linkcode Point}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Point | null | undefined} [from]
 *  Where to start the tokenizer
 * @return {TokenizeContext}
 *  The new tokenize context
 */
type Create = (this: void, from?: Point | null | undefined) => TokenizeContext

export type { Create as default }
