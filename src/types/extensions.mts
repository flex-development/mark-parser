/**
 * @file Type Aliases - Extensions
 * @module fsm-tokenizer/types/Extensions
 */

import type { Extension, List } from '@flex-development/fsm-tokenizer'

/**
 * A syntax extension, or a list of syntax extensions.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type Extensions = Extension | List<Extension>

export type { Extensions as default }
