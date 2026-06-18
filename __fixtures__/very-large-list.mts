/**
 * @file Fixtures - veryLargeList
 * @module fixtures/veryLargeList
 */

import { constants } from '@flex-development/mark-util-symbol'

/**
 * A very large list.
 *
 * @type {unknown[]}
 */
export default Array.from({ length: constants.v8MaxSafeChunkSize })
