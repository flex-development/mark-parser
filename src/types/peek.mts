/**
 * @file Type Aliases - Peek
 * @module fsm-tokenizer/types/Peek
 */

import type { Code } from '@flex-development/fsm-tokenizer'

/**
 * Get the next character code without changing position.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @return {Code}
 *  The peeked character code
 */
type Peek = (this: void) => Code

export type { Peek as default }
