/**
 * @file Fixtures - partialSucc
 * @module fsm-tokenizer/constructs/partialSucc
 */

import type {
  Construct,
  Effects,
  PartialConstruct,
  State,
  TokenizeContext
} from '@flex-development/fsm/parse'
import eventsThenSucc from './events-then-succ.mts'

/**
 * A construct that runs a partial construct.
 *
 * @const {Construct} partialSucc
 */
const partialSucc: Construct = { tokenize: tokenizePartialSucc }

export default partialSucc

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
function tokenizePartialSucc(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  /**
   * The partial construct.
   *
   * @const {PartialConstruct} construct
   */
  const construct: PartialConstruct = Object.assign({}, eventsThenSucc, {
    partial: true as const
  })

  return effects.attempt(construct, ok)
}
