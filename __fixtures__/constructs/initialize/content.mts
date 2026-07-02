/**
 * @file Fixtures - content
 * @module fixtures/initialize/content
 * @see https://github.com/micromark/micromark/blob/4.0.2/packages/micromark/dev/lib/initialize/content.js
 */

import factorySpace from '#tests/utils/factory-space'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Effects,
  InitialConstruct,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import { markdownLineEnding } from 'micromark-util-character'
import { constants, types as tt } from 'micromark-util-symbol'

/**
 * The markdown content construct.
 *
 * @const {InitialConstruct} content
 */
const content: InitialConstruct = { tokenize: tokenizeContent }

export default content

/**
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizeContent(this: TokenizeContext, effects: Effects): State {
  /**
   * The initial content state.
   *
   * @const {State} contentStart
   */
  const contentStart: State = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStart,
    paragraphInitial
  )

  /**
   * The previous chunk text token.
   *
   * @var {Token | undefined} previous
   */
  let previous: Token | undefined

  return contentStart

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterContentStart(this: void, code: Code): State | undefined {
    if (code === codes.eos) return void effects.consume(code)
    assert(markdownLineEnding(code), 'expected eol')

    effects.enter(tt.lineEnding)
    effects.consume(code)
    effects.exit(tt.lineEnding)

    return factorySpace(effects, contentStart, tt.linePrefix)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function paragraphInitial(this: void, code: Code): State | undefined {
    assert(
      code !== codes.eos && !markdownLineEnding(code),
      'expected anything other than a line ending or eof'
    )

    effects.enter(tt.paragraph)
    return lineStart(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function lineStart(this: void, code: Code): State | undefined {
    /**
     * The chunk text token.
     *
     * @const {Token} token
     */
    const token: Token = effects.enter(tt.chunkText, {
      contentType: constants.contentTypeText,
      previous
    })

    if (previous) previous.next = token
    previous = token

    return data(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function data(this: void, code: Code): State | undefined {
    if (code === codes.eos) {
      effects.exit(tt.chunkText)
      effects.exit(tt.paragraph)
      return void effects.consume(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit(tt.chunkText)
      return lineStart
    }

    effects.consume(code)
    return data
  }
}
