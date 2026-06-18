/**
 * @file Internal - toList
 * @module mark-parser/internal/toList
 */

import isList from '#internal/is-list'
import type ToList from '#types/to-list'

export default toList

/**
 * Convert `value` to a list.
 *
 * @internal
 *
 * @template {any} T
 *  The value to convert
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The value to convert
 * @return {ToList<T>}
 *  `value` or array containing `value`
 */
function toList<T>(this: void, value: T): ToList<T> {
  if (Array.isArray(value)) return value as ToList<T>
  return (isList(value) ? [...value] : [value]) as ToList<T>
}
