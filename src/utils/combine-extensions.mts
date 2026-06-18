/**
 * @file Utilities - combineExtensions
 * @module mark-parser/utils/combineExtensions
 */

import toList from '#internal/to-list'
import type { List } from '@flex-development/mark/core'
import type {
  Construct,
  Extension,
  NormalizedExtension
} from '@flex-development/mark/parse'
import { ok } from 'devlop'
import splice from './splice.mts'

export default combineExtensions

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 * @see {@linkcode NormalizedExtension}
 *
 * @category
 *  utils
 *
 * @template {NormalizedExtension} T
 *  The combined extension
 *
 * @param {Extension | List<Extension> | null | undefined} extensions
 *  The list of extensions
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends NormalizedExtension>(
  extensions: Extension | List<Extension> | null | undefined
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 * @see {@linkcode NormalizedExtension}
 *
 * @category
 *  utils
 *
 * @template {NormalizedExtension} T
 *  The combined extension
 *
 * @param {(Extension | List<Extension> | null | undefined)[]} extensions
 *  The extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends NormalizedExtension>(
  ...extensions: (Extension | List<Extension> | null | undefined)[]
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 * @see {@linkcode NormalizedExtension}
 *
 * @category
 *  utils
 *
 * @template {NormalizedExtension} T
 *  The combined extension
 *
 * @param {Extension | List<Extension> | null | undefined} extensions
 *  The extension or list of extensions
 * @param {(Extension | List<Extension> | null | undefined)[]} sources
 *  The extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends NormalizedExtension>(
  extensions: Extension | List<Extension> | null | undefined,
  ...sources: (Extension | List<Extension> | null | undefined)[]
): T {
  extensions = [
    ...toList(extensions ?? []),
    ...toList(sources.filter(source => !!source).flatMap(toList))
  ]

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

    for (hook in (ok(extension, 'expected `extension`'), extension)) {
      /**
       * The field value of the combined extension.
       *
       * @const {ExtensionField} maybe
       */
      const maybe: ExtensionField = Object.hasOwnProperty.call(all, hook)
        ? all[hook]
        : undefined

      /**
       * The current field value.
       *
       * @const {NonNullable<ExtensionField>} left
       */
      const left: NonNullable<ExtensionField> = maybe ?? (all[hook] = {})

      /**
       * The incoming field value.
       *
       * @const {ExtensionField} right
       */
      const right: ExtensionField = extension[hook]

      if (right) {
        /**
         * The current key.
         *
         * @var {keyof NonNullable<ExtensionField>} code
         */
        let key: keyof NonNullable<ExtensionField>

        for (key in right) {
          if (!Object.hasOwnProperty.call(left, key)) left[key] = []
          merge(toList(left[key]!), toList(right[key] ?? []))
        }
      }
    }
  }

  return all as T
}

/**
 * Union of extension field values.
 *
 * @internal
 */
type ExtensionField = Extension[keyof Extension]

/**
 * Merge `list` into `existing`.
 *
 * > 👉 Mutates `existing`.
 *
 * @this {void}
 *
 * @param {(Construct | string)[]} existing
 *  The list to merge into
 * @param {(Construct | string)[]} list
 *  The list to merge
 * @return {undefined}
 */
function merge(
  this: void,
  existing: (Construct | string)[],
  list: (Construct | string)[]
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
