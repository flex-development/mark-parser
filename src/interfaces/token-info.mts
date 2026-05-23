/**
 * @file Interfaces - TokenInfo
 * @module fsm-tokenizer/interfaces/TokenInfo
 */

import type {
  Position,
  Token,
  TokenFields
} from '@flex-development/fsm-tokenizer'

/**
 * Information related to a token.
 *
 * @see {@linkcode Position}
 * @see {@linkcode TokenFields}
 *
 * @extends {Position}
 * @extends {TokenFields}
 */
interface TokenInfo extends Position, TokenFields {
  /**
   * The next token.
   *
   * @see {@linkcode Token}
   */
  next?: Token | undefined

  /**
   * The previous token.
   *
   * @see {@linkcode Token}
   */
  previous?: Token | undefined
}

export type { TokenInfo as default }
