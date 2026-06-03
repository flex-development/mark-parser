/**
 * @file Internal - createTokenFactory
 * @module fsm-tokenizer/internal/createTokenFactory
 */

import type { Options, TokenFactory } from '@flex-development/fsm-tokenizer'
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
 * @return {TokenFactory}
 *  The token factory
 */
function createTokenFactory(
  this: void,
  options: Partial<Options>
): TokenFactory {
  return options.token ?? token
}

export default createTokenFactory
