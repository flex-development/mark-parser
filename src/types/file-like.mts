/**
 * @file Type Aliases - FileLike
 * @module fsm-tokenizer/types/FileLike
 */

import type { Value } from '@flex-development/fsm-tokenizer'

/**
 * A file-like structure.
 */
type FileLike = {
  /**
   * The contents of the file.
   *
   * @see {@linkcode Value}
   */
  value: Value
}

export type { FileLike as default }
