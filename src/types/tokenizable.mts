/**
 * @file Type Aliases - Tokenizable
 * @module fsm-tokenizer/types/Tokenizable
 */

import type { List } from '@flex-development/fsm/core'
import type { FileLike, Value } from '@flex-development/fsm/parse'

/**
 * Union of values that can be tokenized.
 *
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 */
type Tokenizable = FileLike | List<FileLike | Value> | Value

export type { Tokenizable as default }
