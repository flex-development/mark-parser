/**
 * @file Type Aliases - Info
 * @module mark-parser/types/Info
 */

import type Restore from './restore.mts'

/**
 * Internal state; info passed around.
 *
 * @internal
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
