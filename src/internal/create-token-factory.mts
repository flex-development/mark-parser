/**
 * @file Internal - createTokenFactory
 * @module mark-parser/internal/createTokenFactory
 */

import type { Options } from '@flex-development/mark-parser'
import type { CreateToken } from '@flex-development/mark/parse'
import token from './token.mts'

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
}

export default createTokenFactory
