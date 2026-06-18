/**
 * @file Constructs - eos
 * @module fixtures/constructs/eos
 */

import codes from '#enums/codes'
import tt from '#fixtures/tt'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * The end-of-content construct.
 *
 * @const {Construct} eoc
 */
const eoc: Construct = {
  name: tt.eoc,
  tokenize: tokenizeEnd
}

export default eoc

/**
 * Tokenize the end of content.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeEnd(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  return function end(this: void, code: Code): State | undefined {
    if (code !== codes.eos) return nok(code)

    effects.enter(tt.eoc)
    effects.consume(code)
    effects.exit(tt.eoc)

    return ok
  }
}
