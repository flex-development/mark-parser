/**
 * @file Type Aliases - Range
 * @module fsm-tokenizer/types/Range
 */

import type { RangeInfo } from '@flex-development/fsm-tokenizer'

/**
 * A range of chunks in a stream.
 */
interface Range {
  /**
   * The position of the last chunk in the range.
   *
   * @see {@linkcode RangeInfo}
   */
  end: RangeInfo

  /**
   * The position of the first chunk in the range.
   *
   * @see {@linkcode Position}
   */
  start: RangeInfo
}

export type { Range as default }
