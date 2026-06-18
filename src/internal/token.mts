/**
 * @file Internal - token
 * @module mark-parser/internal/token
 */

import type {
  Token,
  TokenInfo,
  TokenType
} from '@flex-development/mark/parse'
import { u } from '@flex-development/unist-util-builder'

/**
 * Create a new token.
 *
 * @internal
 *
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
  return Object.defineProperties(u(type, { ...info } as TokenInfo), {
    next: { enumerable: false, writable: true },
    previous: { enumerable: false, writable: true }
  })
}

export default token
