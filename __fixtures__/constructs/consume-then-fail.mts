/**
 * @file Fixtures - consumeThenFail
 * @module fsm-tokenizer/constructs/consumeThenFail
 */

import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/fsm/parse'

/**
 * A construct that consumes a single character code and then fails.
 *
 * @const {Construct} consumeThenFail
 */
const consumeThenFail: Construct = { tokenize: tokenizeConsumeThenFail }

export default consumeThenFail

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
function tokenizeConsumeThenFail(
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
  return function consumeThenFail(this: void, code: Code): State | undefined {
    return effects.consume(code), nok
  }
}
