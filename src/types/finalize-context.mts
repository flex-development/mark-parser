/**
 * @file Type Aliases - FinalizeContext
 * @module mark-parser/types/FinalizeContext
 */

import type { Options } from '@flex-development/mark-parser'
import type {
  InitialConstruct,
  InitialConstructs,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * Finalize the tokenize context.
 *
 * @see {@linkcode InitialConstruct}
 * @see {@linkcode InitialConstructs}
 * @see {@linkcode Options}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {TokenizeContext} context
 *  The current tokenize context
 * @param {InitialConstruct | InitialConstructs} initialize
 *  The initial construct, or the record of initial constructs
 * @param {Partial<Options>} options
 *  The options used to create the tokenizer
 * @return {null | undefined}
 */
type FinalizeContext = (
  this: void,
  context: TokenizeContext,
  initialize: InitialConstruct | InitialConstructs,
  options: Partial<Options>
) => null | undefined

export type { FinalizeContext as default }
