/**
 * @file Internal - createTokenFactory
 * @module fsm-tokenizer/internal/createTokenFactory
 */

import type { Options } from '@flex-development/fsm-tokenizer'
import type { CreateToken } from '@flex-development/fsm/parse'
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
