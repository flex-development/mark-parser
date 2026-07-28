/**
 * @file Type Aliases - FinalizeContext
 * @module mark-parser/types/FinalizeContext
 */

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
 *
 * @this {void}
 *
 * @param {Context} context
 *  The current tokenization context
 * @param {InitialConstruct | Partial<InitialConstructs>} initialize
 *  The initial construct, or the record of initial constructs
 * @return {null | undefined}
 */
type FinalizeContext = (
  this: void,
  context: Context,
  initialize: InitialConstruct | Partial<InitialConstructs>
) => null | undefined

export type { FinalizeContext as default }
