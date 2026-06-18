/**
 * @file Fixtures - interruptThenSucc
 * @module mark-parser/constructs/interruptThenSucc
 */

import codes from '#enums/codes'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import eventsThenSucc from './events-then-succ.mts'

/**
 * A construct that interrupts, then produces a single event pack and succeeds.
 *
 * @const {Construct} interruptThenSucc
 */
const interruptThenSucc: Construct = {
  tokenize: tokenizeInterruptThenSucc
}

export default interruptThenSucc

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
function tokenizeInterruptThenSucc(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  return interruptThenSucc

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function interruptThenSucc(this: void, code: Code): State | undefined {
    if (code === codes.eos) return effects.consume(code), ok
    return effects.interrupt(eventsThenSucc, afterInterrupt)(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterInterrupt(this: void, code: Code): State | undefined {
    return effects.attempt(eventsThenSucc, ok)(code)
  }
}
