/**
 * @file Test Utilities - markdown
 * @module tests/utils/markdown
 */

import { parse, postprocess, preprocess } from 'micromark'
import type { Event, ParseOptions, Value } from 'micromark-util-types'

/**
 * Parse markdown.
 *
 * @this {void}
 *
 * @param {Value} value
 *  The value to parse
 * @return {Event[]}
 *  The list of events
 */
function markdown(this: void, value: Value, options?: ParseOptions): Event[] {
  return postprocess(
    parse(options)
      .document()
      .write(preprocess()(value, undefined, true))
  )
}

export default markdown
