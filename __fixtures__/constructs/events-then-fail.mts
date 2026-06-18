/**
 * @file Fixtures - eventsThenFail
 * @module mark-parser/constructs/eventsThenFail
 */

import tt from '#fixtures/tt'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * A construct that produces a single event pack and then fails.
 *
 * @const {Construct} eventsThenFail
 */
const eventsThenFail: Construct = { tokenize: tokenizeEventsThenFail }

export default eventsThenFail

/**
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
function tokenizeEventsThenFail(
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
  return function eventsThenFail(this: void, code: Code): State | undefined {
    effects.enter(tt.fail)
    effects.consume(code)
    effects.exit(tt.fail)

    if (code === codes.eos) return nok(code) // flush.
    return nok
  }
}
