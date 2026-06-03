/**
 * @file Test Utilities - alwaysFalse
 * @module tests/utils/alwaysFalse
 */

import { constant } from '@flex-development/tutils'

/**
 * A function that always returns `false`.
 *
 * @const {(this: void) => false} alwaysFalse
 */
const alwaysFalse: (this: void) => false = constant(false)

export default alwaysFalse
