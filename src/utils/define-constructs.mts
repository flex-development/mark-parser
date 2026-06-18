/**
 * @file Utilities - defineConstructs
 * @module mark-parser/utils/defineConstructs
 */

import type {
  Construct,
  ConstructRecord
} from '@flex-development/mark/parse'

export default defineConstructs

/**
 * Define a list of constructs.
 *
 * @category
 *  utils
 *
 * @template {any} T
 *  The input item
 *
 * @this {void}
 *
 * @param {ReadonlyArray<any>} list
 *  The input constructs
 * @return {(Construct & T)[]}
 *  The construct list
 */
function defineConstructs<T>(
  this: void,
  list: readonly any[]
): (Construct & T)[]

/**
 * Define a construct record.
 *
 * @category
 *  utils
 *
 * @template {Record<string, any>} T
 *  The input record
 *
 * @this {void}
 *
 * @param {T} record
 *  The input record
 * @return {ConstructRecord & T}
 *  The construct record
 */
function defineConstructs<T extends Record<string, any>>(
  this: void,
  record: T
): ConstructRecord & T

/**
 * Define a list or record of constructs.
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {unknown} constructs
 *  The input
 * @return {Construct[] | ConstructRecord}
 *  The defined construct list or record
 */
function defineConstructs(
  this: void,
  constructs: unknown
): Construct[] | ConstructRecord {
  return constructs as Construct[] | ConstructRecord
}
