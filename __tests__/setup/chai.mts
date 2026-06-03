/**
 * @file Test Setup - chai
 * @module tests/setup/chai
 * @see https://chaijs.com
 */

import each from '#tests/plugins/chai/each'
import { chai } from 'vitest'

/**
 * initialize chai plugins.
 */
chai.use(each)
