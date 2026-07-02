/**
 * @file Test Utilities - factorySpace
 * @module tests/utils/factorySpace
 */

import type {
  Code,
  Effects,
  State,
  TokenType
} from '@flex-development/mark/parse'
import { markdownSpace } from 'micromark-util-character'
import type * as micromark from 'micromark-util-types'

/**
 * Tokenize spaces and tabs.
 *
 * @see {@linkcode Effects}
 * @see {@linkcode State}
 * @see {@linkcode TokenType}
 * @see {@linkcode micromark.Effects}
 *
 * @param {Effects | micromark.Effects} effects
 *  The context object to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {TokenType | null | undefined} [type]
 *  The token type
 * @param {number | null | undefined} [max]
 *  The maximum number of spaces/tabs to consume (exclusive)
 * @return {State}
 *  The initial state
 */
function factorySpace(
  effects: Effects | micromark.Effects,
  ok: State,
  type?: TokenType | null | undefined,
  max?: number | null | undefined
): State {
  /**
   * The maximum number of spaces/tabs to tokenize.
   *
   * @const {number} limit
   */
  const limit: number = max ? max - 1 : Number.POSITIVE_INFINITY

  /**
   * The number of codes consumed.
   *
   * @var {number} size
   */
  let size: number = 0

  return space

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function space(this: void, code: Code): State | undefined {
    if (!markdownSpace(code)) return ok(code)
    return type && effects.enter(type as never), prefix(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function prefix(this: void, code: Code): State | undefined {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    type && effects.exit(type as never)
    return ok(code)
  }
}

export default factorySpace
