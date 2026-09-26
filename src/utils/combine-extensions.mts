/**
 * @file Utilities - combineExtensions
 * @module mark-parser/utils/combineExtensions
 */

import merge from '#internal/merge'
import toList from '#internal/to-list'
import { splice } from '@flex-development/mark-util-chunked'
import type { List } from '@flex-development/mark/core'
import type {
  Extension,
  NormalizedExtension
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

export default combineExtensions

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @category
 *  utils
 *
 * @template {AnyNormalizedExtension} T
 *  The combined extension
 *
 * @param {AnyExtension | List<AnyExtension> | null | undefined} extensions
 *  The list of extensions
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends AnyNormalizedExtension>(
  extensions: AnyExtension | List<AnyExtension> | null | undefined
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @category
 *  utils
 *
 * @template {AnyNormalizedExtension} T
 *  The combined extension
 *
 * @param {(AnyExtension | List<AnyExtension> | null | undefined)[]} extensions
 *  The extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends AnyNormalizedExtension>(
  ...extensions: (AnyExtension | List<AnyExtension> | null | undefined)[]
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @category
 *  utils
 *
 * @param {AnyExtension | List<AnyExtension> | null | undefined} extensions
 *  The extension or list of extensions
 * @param {(AnyExtension | List<AnyExtension> | null | undefined)[]} sources
 *  The extensions to combine
 * @return {AnyNormalizedExtension}
 *  The combined extension
 */
function combineExtensions(
  extensions: AnyExtension | List<AnyExtension> | null | undefined,
  ...sources: (AnyExtension | List<AnyExtension> | null | undefined)[]
): AnyNormalizedExtension {
  /**
   * The combined extension.
   *
   * @const {NormalizedExtension} all
   */
  const all: NormalizedExtension = {}

  /**
   * The index of the current extension.
   *
   * @var {number} index
   */
  let index: number = -1

  // normalize the list of syntax extensions.
  extensions = [extensions, ...sources].filter(s => !!s).flatMap(toList)

  // merge extensions into `all`.
  while (++index < extensions.length) {
    /**
     * The current extension.
     *
     * @const {Extension | undefined} extension
     */
    const extension: Extension | undefined = extensions[index]

    /**
     * The current hook name.
     *
     * @var {keyof Extension} hook
     */
    let hook: keyof Extension

    assert(extension, 'expected `extension`')

    for (hook in extension) {
      // merge `settings` fields as objects.
      if (hook === 'settings') {
        all[hook] = merge(all[hook], extension[hook])
        continue
      }

      /**
       * The field value of the combined extension.
       *
       * @const {Record<string, any> | undefined} maybe
       */
      const maybe: Record<string, any> | undefined =
        Object.hasOwnProperty.call(all, hook) ? all[hook] : undefined

      /**
       * The current top-level extension field value.
       *
       * @const {Record<string, any>} left
       */
      const left: Record<string, any> = maybe ?? (all[hook] = {})

      /**
       * The incoming top-level extension field value.
       *
       * @const {Record<string, any> | null | undefined} right
       */
      const right: Record<string, any> | null | undefined = extension[hook]

      if (right) {
        /**
         * The current extension field key.
         *
         * @var {string} key
         */
        let key: string

        for (key in right) {
          if (!Object.hasOwnProperty.call(left, key)) left[key] = []
          lists(toList(left[key]), toList(right[key] ?? []))
        }
      }
    }
  }

  return all
}

/**
 * A supported extension.
 */
type AnyExtension = Pick<Extension, 'disable'>

/**
 * A supported extension that has been normalized.
 */
type AnyNormalizedExtension = Pick<NormalizedExtension, 'disable'>

/**
 * Merge `list` into `existing` (both lists of constructs, partial constructs,
 * or character codes).
 *
 * > 👉 **Note**: Mutates `existing`.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown[]} existing
 *  The list to merge into
 * @param {unknown[]} list
 *  The list to merge
 * @return {undefined}
 */
function lists(
  this: void,
  existing: unknown[],
  list: unknown[]
): undefined {
  /**
   * The items to inject into the existing list.
   *
   * @const {unknown[]} before
   */
  const before: unknown[] = []

  /**
   * The current index in the merge list.
   *
   * @var {number} index
   */
  let index: number = -1

  while (++index < list.length) { // @ts-expect-error might be a construct.
    ;(list[index]!.add === 'after' ? existing : before).push(list[index])
  }

  return void splice(existing, 0, 0, before)
}
