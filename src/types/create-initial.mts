/**
 * @file Type Aliases - CreateInitial
 * @module mark-parser/types/CreateInitial
 */

import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'

/**
 * Create an initial construct, a record of initial constructs.
 *
 * @see {@linkcode InitialConstruct}
 *
 * @this {void}
 *
 * @return {InitialConstruct | Partial<InitialConstructs>}
 *  The initial construct or the initial construct record
 */
type CreateInitial = (
  this: void
) => InitialConstruct | Partial<InitialConstructs>

export type { CreateInitial as default }
