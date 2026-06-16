/**
 * @file Fixtures - ct
 * @module fixtures/ct
 */

import type { ContentType } from '@flex-development/fsm/parse'

declare module '@flex-development/fsm/parse' {
  interface ContentTypeMap {
    document: ct.document
  }
}

/**
 * Content types.
 *
 * @enum {ContentType}
 */
enum ct {
  document = 'document',
  string = 'string'
}

export default ct
