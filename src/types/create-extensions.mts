/**
 * @file Type Aliases - CreateExtensions
 * @module mark-parser/types/CreateExtensions
 */

import type { Extensions } from '@flex-development/mark/parse'

/**
 * Create a syntax extension or a collection of syntax extensions.
 *
 * @see {@linkcode Extensions}
 *
 * @this {void}
 *
 * @return {Extensions}
 *  The syntax extension, or the list of extensions
 */
type CreateExtensions = (this: void) => Extensions

export type { CreateExtensions as default }
