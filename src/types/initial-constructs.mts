/**
 * @file Type Aliases - InitialConstructs
 * @module fsm-tokenizer/types/InitialConstructs
 */

import type {
  ContentType,
  InitialConstruct
} from '@flex-development/fsm-tokenizer'

/**
 * Map, where each key is a content type and each value is an initial construct.
 *
 * To register custom content types, augment {@linkcode ContentTypeMap}.
 * They will be added to this map automatically.
 */
type InitialConstructs = { [K in ContentType]: InitialConstruct }

export type { InitialConstructs as default }
