/**
 * @file Interfaces - TokenInfo
 * @module fsm-tokenizer/interfaces/TokenInfo
 */

import type { Position, TokenFields } from '@flex-development/fsm-tokenizer'

/**
 * Information related to a token.
 *
 * @see {@linkcode Position}
 * @see {@linkcode TokenFields}
 *
 * @extends {Position}
 * @extends {TokenFields}
 */
interface TokenInfo extends Position, TokenFields {}

export type { TokenInfo as default }
