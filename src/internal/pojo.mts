/**
 * @file Internal - pojo
 * @module mark-parser/internal/pojo
 */

import type { Objectify, ObjectPlain } from '@flex-development/tutils'

export default pojo

/**
 * Check if `value` is a plain object ([POJO][pojo]).
 *
 * A plain object is an object created by the [`Object`][object] constructor
 * or an object with a `[[Prototype]]` of `null`.
 *
 * [object]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
 * [pojo]: https://masteringjs.io/tutorials/fundamentals/pojo
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is ObjectPlain}
 *  `true` if `value` is a plain object, `false` otherwise
 */
function pojo(this: void, value: unknown): value is ObjectPlain {
  /**
   * Whether `value` is a plain object.
   *
   * @var {boolean} plain
   */
  let plain: boolean = false

  switch (true) {
    case !isObject(value):
      break
    case Object.getPrototypeOf(value) === null:
      plain = true
      break
    default:
      /**
       * The current prototype.
       *
       * @var {any} proto
       */
      let proto: any = value

      while (Object.getPrototypeOf(proto)) proto = Object.getPrototypeOf(proto)
      plain = proto === Object.getPrototypeOf(value)

      break
  }

  return plain
}

/**
 * Check if `value` is a [language type][language-type] `Object`.
 *
 * Object types include:
 *
 * - arrays
 * - functions
 * - instance objects
 * - plain objects (pojos)
 *
 * [language-type]: http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is Objectify<any>}
 *  `true` if `value` is a non-null object, `false` otherwise
 */
function isObject(this: void, value: unknown): value is Objectify<any> {
  if (value === null) return false
  return typeof value === 'function' || typeof value === 'object'
}
