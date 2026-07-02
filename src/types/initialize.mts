/**
 * @file Type Aliases - Initialize
 * @module mark-parser/types/Initialize
 */

import type { CreateInitial } from '@flex-development/mark-parser'
import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'

/**
 * An initial construct, a record of initial constructs, or a function that
 * returns the construct or record.
 *
 * @see {@linkcode CreateInitial}
 * @see {@linkcode InitialConstruct}
 * @see {@linkcode InitialConstructs}
 */
type Initialize = CreateInitial | InitialConstruct | Partial<InitialConstructs>

export type { Initialize as default }
