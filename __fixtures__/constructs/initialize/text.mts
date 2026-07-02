/**
 * @file Fixtures - text
 * @module fixtures/initialize/text
 * @see https://github.com/micromark/micromark/blob/4.0.2/packages/micromark/dev/lib/initialize/text.js
 */

import resolveLineSuffixes from '#fixtures/resolvers/line-suffixes'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  ConstructRecord,
  Effects,
  Event,
  InitialConstruct,
  Resolver,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import { constants, types as tt } from 'micromark-util-symbol'

/**
 * The markdown string construct.
 *
 * @const {InitialConstruct} string
 */
const string: InitialConstruct = initialize(constants.contentTypeString)

/**
 * The markdown text construct.
 *
 * @const {InitialConstruct} text
 */
const text: InitialConstruct = initialize(constants.contentTypeText)

export { string, text }

/**
 * Create an initial construct.
 *
 * @this {void}
 *
 * @param {'string' | 'text'} contentType
 *  The content type
 * @return {InitialConstruct}
 *  The initial construct
 */
function initialize(
  this: void,
  contentType: 'string' | 'text'
): InitialConstruct {
  /**
   * The content type, capitalized.
   *
   * @const {string} capt
   */
  const capt: string = `${contentType[0]!.toUpperCase()}${contentType.slice(1)}`

  /**
   * The name of the tokenizer.
   *
   * @const {string} tokenizer
   */
  const tokenizer: string = tokenize.name + capt

  return {
    resolveAll: resolver(contentType === 'text' && resolveLineSuffixes),
    tokenize: Object.defineProperties(tokenize, { name: { value: tokenizer } })
  }

  /**
   * @this {TokenizeContext}
   *
   * @param {Effects} effects
   *  The context object to transition the state machine
   * @return {State}
   *  The initial state
   */
  function tokenize(this: TokenizeContext, effects: Effects): State {
    /**
     * The tokenization context.
     *
     * @const {TokenizeContext} self
     */
    const self: TokenizeContext = this

    /**
     * The constructs to try.
     *
     * @const {ConstructRecord} constructs
     */
    const constructs: ConstructRecord = self.parser.constructs[contentType]

    /**
     * Field state.
     *
     * @const {State} state
     */
    const state: State = effects.attempt(constructs, start, notText)

    return start

    /**
     * @this {void}
     *
     * @param {Code} code
     *  The current character code
     * @return {State | undefined}
     *  The next state
     */
    function start(this: void, code: Code): State | undefined {
      return atBreak(code) ? state(code) : notText(code)
    }

    /**
     * @this {void}
     *
     * @param {Code} code
     *  The current character code
     * @return {State | undefined}
     *  The next state
     */
    function notText(this: void, code: Code): State | undefined {
      if (code === codes.eos) return void effects.consume(code)
      return effects.enter(tt.data), effects.consume(code), data
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
      if (atBreak(code)) return effects.exit(tt.data), state(code)
      return effects.consume(code), data
    }

    /**
     * @this {void}
     *
     * @param {Code} code
     *  The current character code
     * @return {State | undefined}
     *  The next state
     */
    function atBreak(this: void, code: Code): boolean {
      if (code === codes.eos) return true

      /**
       * The constructs to try for {@linkcode code}.
       *
       * @const {Construct | Construct[] | null | undefined} pack
       */
      const pack: Construct | Construct[] | null | undefined = constructs[code]

      if (pack) {
        assert(Array.isArray(pack), 'expected list of constructs')

        /**
         * The index of the current construct in {@linkcode pack}.
         *
         * @var {number} index
         */
        let index: number = -1

        while (++index < pack.length) {
          assert(pack[index], 'expected `pack[index]`')

          /**
           * The current construct.
           *
           * @const {Construct} item
           */
          const item: Construct = pack[index]!

          if (!item.previous || item.previous.call(self, self.previous)) {
            return true
          }
        }
      }

      return false
    }
  }

  /**
   * Create a `resolveAll` handler.
   *
   * @this {void}
   *
   * @param {Resolver | false} extraResolver
   *  An additional resolver to run
   * @return {Resolver}
   *  The resolver
   */
  function resolver(this: void, extraResolver: Resolver | false): Resolver {
    /**
     * The name of the resolver.
     *
     * @const {string} name
     */
    const name: string = resolveAll.name + capt

    Object.defineProperties(tokenize, { name: { value: name } })
    return resolveAll

    /**
     * @this {void}
     *
     * @param {Event[]} events
     *  The current list of events
     * @param {TokenizeContext} context
     *  The tokenization context
     * @return {Event[]}
     *  The list of changed events
     */
    function resolveAll(
      this: void,
      events: Event[],
      context: TokenizeContext
    ): Event[] {
      /**
       * The index of the current event.
       *
       * @var {number} index
       */
      let index: number = -1

      /**
       * The index of the `enter` event.
       *
       * @var {number | undefined} enter
       */
      let enter: number | undefined = undefined

      // merge adjacent `data` events.
      while (++index <= events.length) {
        if (enter === undefined) {
          if (events[index] && events[index]![1].type === tt.data) {
            enter = index
            index++
          }
        } else if (!events[index] || events[index]![1].type !== tt.data) {
          // do nothing if there is one data token.
          if (index !== enter + 2) {
            events[enter]![1].end = events[index - 1]![1].end
            events.splice(enter + 2, index - enter - 2)
            index = enter + 2
          }

          enter = undefined
        }
      }

      return extraResolver ? extraResolver(events, context) : events
    }
  }
}
