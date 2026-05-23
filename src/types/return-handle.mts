/**
 * @file Type Aliases - ReturnHandle
 * @module fsm-tokenizer/types/ReturnHandle
 */

import type { Construct, Info } from '@flex-development/fsm-tokenizer'

/**
 * The callback to fire when a construct is successful.
 *
 * @see {@linkcode Construct}
 * @see {@linkcode Info}
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
