/**
 * @file Type Aliases - Extensions
 * @module fsm-tokenizer/types/Extensions
 */

import type {
  CreateExtensions,
  Extension,
  List
} from '@flex-development/fsm-tokenizer'

/**
 * A syntax extension, a list of syntax extensions, or a factory function.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type Extensions = CreateExtensions | Extension | List<Extension>

export type { Extensions as default }
