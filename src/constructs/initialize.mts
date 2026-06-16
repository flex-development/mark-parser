/**
 * @file Constructs - initialize
 * @module fsm-tokenizer/constructs/initialize
 */

import type {
  Code,
  Constructs,
  ContentType,
  Effects,
  InitialConstruct,
  State,
  TokenizeContext
} from '@flex-development/fsm/parse'

/**
 * Create an initial construct.
 *
 * @see {@linkcode Constructs}
 * @see {@linkcode ContentType}
 * @see {@linkcode InitialConstruct}
 *
 * @this {void}
 *
 * @param {Constructs | ContentType | null | undefined} [constructs]
 *  The construct(s) to try or the name of the content parser
 * @param {Partial<InitialConstruct> | null | undefined} [data]
 *  The initial construct data
 * @return {InitialConstruct}
 *  The initial construct
 */
function initialize(
  this: void,
  constructs?: Constructs | ContentType | null | undefined,
  data?: Partial<InitialConstruct> | null | undefined
): InitialConstruct {
  return { ...data, tokenize: tokenizeInitial }

  /**
   * Set up a state machine to handle character codes streaming in.
   *
   * @this {TokenizeContext}
   *
   * @param {Effects} effects
   *  The context object to transition state machine
   * @return {State}
   *  The initial state
   */
  function tokenizeInitial(this: TokenizeContext, effects: Effects): State {
    /**
     * The tokenize context.
     *
     * @const {TokenizeContext} self
     */
    const self: TokenizeContext = this

    return attempt

    /**
     * Try {@linkcode constructs}.
     *
     * @this {void}
     *
     * @param {Code} code
     *  The current character code
     * @return {State | undefined}
     *  The next state
     */
    function attempt(this: void, code: Code): State | undefined {
      if (typeof constructs === 'string') {
        constructs = self.parser.constructs[constructs]
      }

      return effects.attempt(constructs ?? [], attempt, eat)(code)
    }

    /**
     * Consume `code` and retry {@linkcode constructs}.
     *
     * @this {void}
     *
     * @param {Code} code
     *  The current character code
     * @return {State | undefined}
     *  The next state
     */
    function eat(this: void, code: Code): State | undefined {
      return effects.consume(code), attempt
    }
  }
}

export default initialize
