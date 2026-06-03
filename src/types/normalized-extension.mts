/**
 * @file Type Aliases - NormalizedExtension
 * @module fsm-tokenizer/types/NormalizedExtension
 */

import type { Extension } from '@flex-development/fsm-tokenizer'

/**
 * A filtered, combined extension, where all properties are of `Extension` are
 * optional, but defined.
 *
 * @see {@linkcode Extension}
 */
type NormalizedExtension = {
  [Key in keyof Extension]: Exclude<Extension[Key], null | undefined>
}

export type { NormalizedExtension as default }
