/**
 * @file Internal - createDebugger
 * @module fsm-tokenizer/internal/createDebugger
 */

import type { Options } from '@flex-development/fsm-tokenizer'
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
  return createDebug(options.debug ?? 'fsm-tokenizer')
}

export default createDebugger
