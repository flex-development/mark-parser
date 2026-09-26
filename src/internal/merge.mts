/**
 * @file Internal - merge
 * @module mark-parser/internal/merge
 */

import { ok } from 'devlop'
import pojo from './pojo.mts'

/**
 * Merge one or more objects into a single object.
 *
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * @internal
 *
 * @template {Record<PropertyKey, any>} M
 *  The merged object type
 *
 * @this {void}
 *
 * @param {Record<PropertyKey, any> | null | undefined} target
 *  The target object
 * @param {(Record<PropertyKey, any> | null | undefined)[]} sources
 *  The source object(s)
 * @return {M}
 *  The merged object
 */
function merge<M extends Record<PropertyKey, any>>(
  this: void,
  target: Record<PropertyKey, any> | null | undefined,
  ...sources: (Record<PropertyKey, any> | null | undefined)[]
): M {
  return sources.filter(Boolean).reduce((acc, source) => {
    return [
      ...Object.getOwnPropertySymbols(source!),
      ...Object.getOwnPropertyNames(source!)
    ].reduce((target, property) => {
      ok(target, 'expected `target` object')

      /**
       * The source object value.
       *
       * @var {any} right
       */
      let right: any = source![property]

      if (Object.prototype.hasOwnProperty.call(target, property)) {
        /**
         * The target object value.
         *
         * @const {any} left
         */
        const left: any = target[property]

        if (right === undefined) {
          right = left
        } else if (pojo(left) && pojo(right)) {
          right = merge(left, right)
        }
      }

      return target[property] = right, target
    }, acc)
  }, target ?? {}) as M
}

export default merge
