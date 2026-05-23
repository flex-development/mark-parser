/**
 * @file Type Aliases - Info
 * @module fsm-tokenizer/types/Info
 */

import type { Restore } from '@flex-development/fsm-tokenizer'

/**
 * Internal state; info passed around.
 */
type Info = {
  /**
   * The last known length of the event list.
   */
  from: number

  /**
   * Restore internal state.
   *
   * @see {@linkcode Restore}
   */
  restore: Restore
}

export type { Info as default }
