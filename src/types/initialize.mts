/**
 * @file Type Aliases - Initialize
 * @module fsm-tokenizer/types/Initialize
 */

import type { CreateInitial } from '@flex-development/fsm-tokenizer'
import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/fsm/parse'

/**
 * An initial construct, a record of initial constructs, or a function that
 * returns the construct or record.
 *
 * @see {@linkcode CreateInitial}
 * @see {@linkcode InitialConstruct}
 * @see {@linkcode InitialConstructs}
 */
type Initialize = CreateInitial | InitialConstruct | InitialConstructs

export type { Initialize as default }
