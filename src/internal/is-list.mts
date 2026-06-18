/**
 * @file Internal - isList
 * @module mark-parser/internal/isList
 */

import type { List } from '@flex-development/mark/core'

/**
 * Check if `value` is a list.
 *
 * @internal
 *
 * @template {any} [T=unknown]
 *  The list item type
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is List<T>}
 *  `true` if `value` is an array or {@linkcode Set}, `false` otherwise
 */
function isList<T = unknown>(this: void, value: unknown): value is List<T> {
  return Array.isArray(value) || value instanceof Set
}

export default isList
