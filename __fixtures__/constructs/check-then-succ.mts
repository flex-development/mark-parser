/**
 * @file Fixtures - checkThenSucc
 * @module mark-parser/constructs/checkThenSucc
 */

import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import eventsThenSucc from './events-then-succ.mts'

/**
 * A construct that checks, then produces a single event pack and succeeds.
 *
 * @const {Construct} checkThenSucc
 */
const checkThenSucc: Construct = {
  tokenize: tokenizeCheckThenSucc
}

export default checkThenSucc

/**
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeCheckThenSucc(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  return effects.check(eventsThenSucc, afterCheck)

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterCheck(this: void, code: Code): State | undefined {
    return effects.attempt(eventsThenSucc, ok)(code)
  }
}
