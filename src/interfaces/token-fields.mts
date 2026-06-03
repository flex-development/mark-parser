/**
 * @file Interfaces - TokenFields
 * @module fsm-tokenizer/interfaces/TokenFields
 */

import type {
  ContentType,
  Token,
  TokenizeContext
} from '@flex-development/fsm-tokenizer'

/**
 * Registry of token fields.
 *
 * This interface can be augmented to register custom token fields.
 *
 * @example
 *  declare module '@flex-development/fsm-tokenizer' {
 *    interface TokenFields {
 *      value?: string | null
 *    }
 *  }
 */
interface TokenFields {
  /**
   * The connected tokenizer.
   *
   * Typically used when dealing with linked tokens; a child tokenizer is
   * usually needed to tokenize them.
   *
   * @see {@linkcode TokenizeContext}
   */
  _tokenizer?: TokenizeContext | null | undefined

  /**
   * Declare the token as having content of a certain type.
   *
   * @see {@linkcode ContentType}
   */
  contentType?: ContentType | null | undefined

  /**
   * The next token.
   *
   * @see {@linkcode Token}
   */
  next?: Token | null | undefined

  /**
   * The previous token.
   *
   * @see {@linkcode Token}
   */
  previous?: Token | null | undefined
}

export type { TokenFields as default }
