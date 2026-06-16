/**
 * @file Internal - size
 * @module fsm-tokenizer/internal/size
 */

import type { List } from '@flex-development/fsm/core'

/**
 * Get the size of a `list`.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {List} list
 *  The list to measure
 * @return {number}
 *  The length of the list if its an array, or the size if its a set
 */
function size(this: void, list: List): number {
  return Array.isArray(list) ? list.length : list.size
}

export default size
