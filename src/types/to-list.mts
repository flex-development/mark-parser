/**
 * @file Type Aliases - ToList
 * @module fsm-tokenizer/types/ToList
 */

import type { List } from '@flex-development/fsm-tokenizer'

/**
 * Convert `T` to a list.
 *
 * @internal
 *
 * @template {any} T
 *  The value to convert
 */
// dprint-ignore-start
type ToList<T> = T extends List
  ? T extends ReadonlySet<infer U>
    ? U[]
    : T
  : T[]
// dprint-ignore-end

export type { ToList as default }
