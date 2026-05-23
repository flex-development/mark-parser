/**
 * @file Type Aliases - Initializer
 * @module fsm-tokenizer/types/Initializer
 */

import type {
  Effects,
  State,
  TokenizeContext,
  Tokenizer
} from '@flex-development/fsm-tokenizer'

/**
 * Set up an initial state machine.
 *
 * > 👉 **Note**: Like a {@linkcode Tokenizer}, but without `ok` and `nok`.
 *
 * @see {@linkcode Effects}
 * @see {@linkcode State}
 * @see {@linkcode TokenizeContext}
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @return {State}
 *  The initial state
 */
type Initializer = (this: TokenizeContext, effects: Effects) => State

export type { Initializer as default }
