/**
 * @file Type Aliases - Store
 * @module mark-parser/types/Store
 */

import type { Info } from '@flex-development/mark-parser'

/**
 * Store internal state.
 *
 * @see {@linkcode Info}
 *
 * @this {void}
 *
 * @return {Info}
 *  Info passed around
 */
type Store = (this: void) => Info

export type { Store as default }
