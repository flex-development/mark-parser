/**
 * @file Fixtures - tt
 * @module fixtures/tt
 */

import type { TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Token types.
 *
 * @enum {TokenType}
 */
enum tt {
  eoc = 'eoc',
  fail = 'fail',
  succ = 'succ'
}

export default tt
