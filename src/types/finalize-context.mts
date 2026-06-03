/**
 * @file Type Aliases - FinalizeContext
 * @module fsm-tokenizer/types/FinalizeContext
 */

import type { TokenizeContext } from '@flex-development/fsm-tokenizer'

/**
 * Finalize the tokenize context.
 *
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {TokenizeContext} context
 *  The current tokenize context
 * @return {null | undefined}
 */
type FinalizeContext = (
  this: void,
  context: TokenizeContext
) => null | undefined

export type { FinalizeContext as default }
