/**
 * @file Type Aliases - CreateExtensions
 * @module fsm-tokenizer/types/CreateExtensions
 */

import type { List } from '@flex-development/fsm/core'
import type { Extension } from '@flex-development/fsm/parse'

/**
 * Create a syntax extension or a collection of syntax extensions.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 *
 * @this {void}
 *
 * @return {Extension | List<Extension>}
 *  The syntax extension, or the list of extensions
 */
type CreateExtensions = (this: void) => Extension | List<Extension>

export type { CreateExtensions as default }
