/**
 * @file Type Aliases - ToList
 * @module mark-parser/types/ToList
 */

import type { List } from '@flex-development/mark/core'
import type { IfAny } from '@flex-development/tutils'

/**
 * Convert `T` to a list.
 *
 * @internal
 *
 * @template {any} T
 *  The value to convert
 */
// dprint-ignore-start
type ToList<T> = IfAny<
  T,
  T[],
  T extends List
    ? T extends ReadonlySet<infer U>
      ? U[]
      : T
    : T[]
>
// dprint-ignore-end

export type { ToList as default }
