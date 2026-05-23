/**
 * @file Type Aliases - Position
 * @module fsm-tokenizer/types/Position
 */

import type { Place } from '@flex-development/fsm-tokenizer'

/**
 * Range between two points in a source file.
 */
interface Position {
  /**
   * The place of the last character code in the range.
   *
   * @see {@linkcode Place}
   */
  end: Place

  /**
   * The place of the first character code in the range.
   *
   * @see {@linkcode Place}
   */
  start: Place
}

export type { Position as default }
