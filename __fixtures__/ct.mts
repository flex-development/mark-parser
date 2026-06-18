/**
 * @file Fixtures - ct
 * @module fixtures/ct
 */

import type { ContentType } from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
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
