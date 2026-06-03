/**
 * @file Utilities - defineConstruct
 * @module fsm-tokenizer/utils/defineConstruct
 */

import type { Construct } from '@flex-development/fsm-tokenizer'

/**
 * Define a construct.
 *
 * @category
 *  utils
 *
 * @template {any} T
 *  The input construct
 *
 * @this {void}
 *
 * @param {T} construct
 *  The input construct
 * @return {Construct & T}
 *  The construct
 */
function defineConstruct<T>(this: void, construct: T): Construct & T {
  return construct as Construct & T
}

export default defineConstruct
