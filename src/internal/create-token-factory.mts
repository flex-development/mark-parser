/**
 * @file Internal - createTokenFactory
 * @module mark-parser/internal/createTokenFactory
 */

import type { Options } from '@flex-development/mark-parser'
import type {
  CreateToken,
  Token,
  TokenInfo,
  TokenType
} from '@flex-development/mark/parse'
import { u } from '@flex-development/unist-util-builder'

/**
 * Create a token factory.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Partial<Options>} options
 *  The tokenizer options
 * @return {CreateToken}
 *  The token factory
 */
function createTokenFactory(
  this: void,
  options: Partial<Options>
): CreateToken {
  return options.token ?? token

  /**
   * @this {void}
   *
   * @param {TokenType} type
   *  The token type
   * @param {TokenInfo | null | undefined} [info]
   *  The token info
   * @return {Token}
   *  The new token
   */
  function token(
    this: void,
    type: TokenType,
    info?: TokenInfo | null | undefined
  ): Token {
    return u(type, { ...info } as TokenInfo)
  }
}

export default createTokenFactory
