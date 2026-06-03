/**
 * @file Type Aliases - FullNormalizedExtension
 * @module fsm-tokenizer/types/FullNormalizedExtension
 */

import type { Extension } from '@flex-development/fsm-tokenizer'

/**
 * A full, filtered, and normalized extension, where are all properties of
 * `Extension` are required and defined.
 *
 * @see {@linkcode Extension}
 */
type FullNormalizedExtension = {
  [K in keyof Extension]-?: Exclude<Extension[K], null | undefined>
}

export type { FullNormalizedExtension as default }
