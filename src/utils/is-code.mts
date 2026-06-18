/**
 * @file Utilities - isCode
 * @module mark-parser/utils/isCode
 */

import { codes } from '@flex-development/mark-util-symbol'
import type { Code } from '@flex-development/mark/parse'

/**
 * Check if `value` looks like a character code.
 *
 * @see {@linkcode Code}
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is Code}
 *  `true` if `code` is {@linkcode codes.eof} or a number, `false` otherwise
 */
function isCode(this: void, value: unknown): value is Code {
  return value === codes.eof || typeof value === 'number'
}

export default isCode
