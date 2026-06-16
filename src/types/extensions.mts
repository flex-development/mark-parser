/**
 * @file Type Aliases - Extensions
 * @module fsm-tokenizer/types/Extensions
 */

import type { CreateExtensions } from '@flex-development/fsm-tokenizer'
import type { List } from '@flex-development/fsm/core'
import type { Extension } from '@flex-development/fsm/parse'

/**
 * A syntax extension, a list of syntax extensions, or a factory function.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type Extensions = CreateExtensions | Extension | List<Extension>

export type { Extensions as default }
