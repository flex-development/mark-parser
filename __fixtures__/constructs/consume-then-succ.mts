/**
 * @file Fixtures - consumeThenSucc
 * @module fsm-tokenizer/constructs/consumeThenSucc
 */

import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/fsm-tokenizer'

/**
 * A construct that consumes a single character code and then succeeds.
 *
 * @const {Construct} consumeThenSucc
 */
const consumeThenSucc: Construct = { tokenize: tokenizeConsumeThenSucc }

export default consumeThenSucc

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
function tokenizeConsumeThenSucc(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  return function consumeThenSucc(this: void, code: Code): State | undefined {
    return effects.consume(code), ok
  }
}
