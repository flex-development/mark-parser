/**
 * @file Type Aliases - CodeCheck
 * @module mark-parser/types/CodeCheck
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Check whether a character `code` passes a test.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  `true` if `code` passes test, `false` otherwise
 */
type CodeCheck = (this: void, code: Code) => boolean

export type { CodeCheck as default }
