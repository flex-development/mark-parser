/**
 * @file Type Aliases - Parsers
 * @module fsm-tokenizer/types/Parsers
 */

import type {
  ContentType,
  ContentTypeMap,
  Create
} from '@flex-development/fsm-tokenizer'

/**
 * Map, where each key is a content type
 * and each value is a function that creates a tokenization context.
 *
 * To register custom content types, augment {@linkcode ContentTypeMap}.
 * They will be added to this map automatically.
 */
type Parsers = { [K in ContentType]: Create }

export type { Parsers as default }
