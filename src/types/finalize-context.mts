/**
 * @file Type Aliases - FinalizeContext
 * @module mark-parser/types/FinalizeContext
 */

import type { Options } from '@flex-development/mark-parser'
import type {
  Context,
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'

/**
 * Finalize the tokenization context.
 *
 * @see {@linkcode Context}
 * @see {@linkcode InitialConstruct}
 * @see {@linkcode InitialConstructs}
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {Context} context
 *  The current tokenization context
 * @param {InitialConstruct | InitialConstructs} initialize
 *  The initial construct, or the record of initial constructs
 * @param {Partial<Options>} options
 *  The options used to create the tokenizer
 * @return {null | undefined}
 */
type FinalizeContext = (
  this: void,
  context: Context,
  initialize: InitialConstruct | InitialConstructs,
  options: Partial<Options>
) => null | undefined

export type { FinalizeContext as default }
