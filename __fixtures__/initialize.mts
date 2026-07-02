/**
 * @file Fixtures - initialize
 * @module fixtures/initialize
 */

import type { InitialConstructs } from '@flex-development/mark/parse'
import { constants } from 'micromark-util-symbol'

/**
 * Record, where each key is a content type,
 * and each value is a mock initial construct.
 *
 * @const {InitialConstructs} initialize
 */
const initialize: InitialConstructs = {
  [constants.contentTypeDocument]: { tokenize: vi.fn() },
  [constants.contentTypeFlow]: { tokenize: vi.fn() },
  [constants.contentTypeContent]: { tokenize: vi.fn() },
  [constants.contentTypeString]: { tokenize: vi.fn() },
  [constants.contentTypeText]: { tokenize: vi.fn() }
}

export default initialize
