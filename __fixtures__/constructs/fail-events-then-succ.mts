/**
 * @file Fixtures - failEventsThenSucc
 * @module mark-parser/constructs/failEventsThenSucc
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
 * A construct that produces a single `fail` event pack and then succeeds.
 *
 * @const {Construct} failEventsThenSucc
 */
const failEventsThenSucc: Construct = { tokenize: tokenizeFailEventsThenSucc }

export default failEventsThenSucc

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
function tokenizeFailEventsThenSucc(
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
  return function failsThenSucc(this: void, code: Code): State | undefined {
    if (code === codes.eos) return effects.consume(code), ok

    effects.enter(tt.fail)
    effects.consume(code)
    effects.exit(tt.fail)

    return ok
  }
}
