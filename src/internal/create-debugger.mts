/**
 * @file Internal - createDebugger
 * @module mark-parser/internal/createDebugger
 */

import type { Options } from '@flex-development/mark-parser'
import createDebug, { type Debugger } from 'debug'

/**
 * Create a debugger.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Partial<Options>} options
 *  The tokenizer options
 * @return {Debugger}
 *  The debugger
 */
function createDebugger(this: void, options: Partial<Options>): Debugger {
  return createDebug(options.debug ?? 'mark-parser')
}

export default createDebugger
