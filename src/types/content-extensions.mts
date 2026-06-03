/**
 * @file Type Aliases - ContentExtensions
 * @module fsm-tokenizer/types/ContentExtensions
 */

import type {
  ConstructRecord,
  ContentType,
  ContentTypeMap
} from '@flex-development/fsm-tokenizer'

/**
 * Map, where each key is a content type and each value is a construct record.
 *
 * To register custom content types, augment {@linkcode ContentTypeMap}.
 * They will be added to this map automatically.
 */
type ContentExtensions = {
  [K in ContentType]?: ConstructRecord | null | undefined
}

export type { ContentExtensions as default }
