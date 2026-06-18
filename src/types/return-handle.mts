/**
 * @file Type Aliases - ReturnHandle
 * @module mark-parser/types/ReturnHandle
 */

import type { Construct } from '@flex-development/mark/parse'
import type Info from './info.mts'

/**
 * The callback to fire when a construct is successful.
 *
 * @see {@linkcode Construct}
 * @see {@linkcode Info}
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Construct} construct
 *  The successful construct
 * @param {Info} info
 *  Info passed around
 * @return {undefined}
 */
type ReturnHandle = (this: void, construct: Construct, info: Info) => undefined

export type { ReturnHandle as default }
