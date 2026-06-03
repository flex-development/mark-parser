/**
 * @file Internal - isMutableArray
 * @module fsm-tokenizer/internal/isMutableArray
 */

/**
 * Check if `value` is a mutable array.
 *
 * @internal
 *
 * @template {any} [T=unknown]
 *  The array item type
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is T[]}
 *  `true` if `value` is a mutable array, `false` otherwise
 */
function isMutableArray<T = unknown>(this: void, value: unknown): value is T[] {
  return Array.isArray(value) && !Object.isFrozen(value)
}

export default isMutableArray
