/**
 * @file Integration Tests - createTokenizer
 * @module fsm-tokenizer/tests/integration/createTokenizer
 */

import initialize from '#constructs/initialize'
import testSubject from '#create-tokenizer'
import chars from '#enums/chars'
import codes from '#enums/codes'
import ev from '#enums/ev'
import checkThenSucc from '#fixtures/constructs/check-then-succ'
import consumeThenFail from '#fixtures/constructs/consume-then-fail'
import consumeThenSucc from '#fixtures/constructs/consume-then-succ'
import eventsThenFail from '#fixtures/constructs/events-then-fail'
import eventsThenSucc from '#fixtures/constructs/events-then-succ'
import failEventsThenSucc from '#fixtures/constructs/fail-events-then-succ'
import interruptThenSucc from '#fixtures/constructs/interrupt-then-succ'
import partialSucc from '#fixtures/constructs/partial-succ'
import ct from '#fixtures/ct'
import resolve from '#fixtures/resolvers/resolve'
import resolveAll from '#fixtures/resolvers/resolve-all'
import resolveTo from '#fixtures/resolvers/resolve-to'
import tt from '#fixtures/tt'
import alwaysFalse from '#tests/utils/always-false'
import snapshot from '#tests/utils/snapshot-events'
import type {
  Chunk,
  ContentType,
  Event,
  FileLike,
  Initialize,
  List,
  Options,
  Place,
  Token,
  TokenizeContext,
  Tokenizer,
  Value
} from '@flex-development/fsm-tokenizer'
import type { Mock } from 'vitest'

describe('integration:createTokenizer', () => {
  type Case = {
    /**
     * Get test case hooks.
     *
     * @this {void}
     *
     * @param {Case['options']} options
     *  The test case `options`
     * @return {Hooks}
     *  The hooks object
     */
    hooks(this: void, options: Case['options']): Hooks

    /**
     * The initial construct, a record of initial constructs, a function that
     * returns the initial construct or record, or the tokenizer options.
     */
    options: Initialize | Options

    /**
     * The content type.
     */
    parser?: ContentType

    /**
     * The input to tokenize.
     */
    slice: Chunk | FileLike | List<Chunk | FileLike | Value> | Value

    /**
     * Whether to snapshot events.
     */
    snapshot?: true
  }

  type Hooks = {
    /**
     * After hook.
     *
     * @this {void}
     *
     * @param {Event[]} events
     *  The list of events
     * @param {TokenizeContext} context
     *  The tokenize context
     * @return {undefined}
     */
    after(events: Event[], context: TokenizeContext): undefined

    /**
     * Before hook.
     *
     * @this {void}
     *
     * @param {TokenizeContext} context
     *  The tokenize context
     * @return {undefined}
     */
    before?(context: TokenizeContext): undefined
  }

  it.each<[name: string, test: Case]>([
    [
      'allow all codes to be consumed without events (via Construct)',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @return {undefined}
             */
            after(this: void, events: Event[]): undefined {
              return void expect(events).to.be.an('array').of.length(0)
            }
          }
        },
        options: initialize([consumeThenFail, consumeThenSucc]),
        slice: import.meta.url
      }
    ],
    [
      'allow all codes to be consumed without events (via InitialConstruct)',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @return {undefined}
             */
            after(this: void, events: Event[]): undefined {
              return void expect(events).to.be.an('array').of.length(0)
            }
          }
        },
        options: { initialize: { document: initialize(ct.document) } },
        parser: ct.document,
        slice: import.meta.url
      }
    ],
    [
      'guard previous character code',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @return {undefined}
             */
            after(this: void, events: Event[]): undefined {
              return void expect(events).to.be.an('array').of.length(0)
            }
          }
        },
        options: initialize({
          null: [Object.assign({}, eventsThenSucc, { previous: alwaysFalse })]
        }),
        slice: [codes.digit0, import.meta.url]
      }
    ],
    [
      'not set #currentConstruct if running construct is partial',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(
              this: void,
              events: Event[],
              context: TokenizeContext
            ): undefined {
              expect(context).to.have.property('currentConstruct', partialSucc)
              expect(events).to.be.an('array').of.length(2)
              expect(events).to.each.have.nested.property('1.type', tt.succ)

              return void events
            }
          }
        },
        options: {
          extensions: { [ct.document]: { null: [partialSucc] } },
          initialize: { document: initialize(ct.document) }
        },
        parser: ct.document,
        slice: codes.digit1
      }
    ],
    [
      'not try disabled constructs',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @return {undefined}
             */
            after(this: void, events: Event[]): undefined {
              return void expect(events).to.be.an('array').of.length(0)
            }
          }
        },
        options: {
          disable: [eventsThenSucc.name],
          initialize: initialize(eventsThenSucc)
        },
        slice: import.meta.url
      }
    ],
    [
      'resolve events via resolvers',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(
              this: void,
              events: Event[],
              context: TokenizeContext
            ): undefined {
              expect(resolve).toHaveBeenCalledTimes(3)
              expect(resolve).toHaveBeenCalledWith(expect.any(Array), context)
              expect(resolveTo).toHaveBeenCalledWith(events, context)
              expect(resolveTo).toHaveBeenCalledTimes(3)
              expect(resolveTo).toHaveBeenCalledAfter(resolve)
              expect(resolveAll).toHaveBeenCalledOnce()
              expect(resolveAll).toHaveBeenCalledWith(events, context)
              expect(resolveAll).toHaveBeenCalledAfter(resolve)
              expect(resolveAll).toHaveBeenCalledAfter(resolveTo)

              expect(events).to.be.an('array').of.length(8)
              expect(events).to.each.have.nested.property('1.type')
              expect(events).to.each.have.nested.property('1.value')

              return void events
            }
          }
        },
        options: {
          extensions: [
            {
              [ct.document]: {
                null: [
                  Object.assign({}, eventsThenSucc, {
                    resolve,
                    resolveAll,
                    resolveTo
                  })
                ]
              }
            }
          ],
          initialize: {
            [ct.document]: initialize(ct.document, {
              /**
               * @this {void}
               *
               * @param {Event[]} events
               *  The list of events
               * @param {TokenizeContext} context
               *  The tokenize context
               * @return {Event[]}
               *  The list of changed events
               */
              resolveAll(
                this: void,
                events: Event[],
                context: TokenizeContext
              ): Event[] {
                /**
                 * The current point in the content.
                 *
                 * @const {Place} now
                 */
                const now: Place = context.now()

                /**
                 * The new token.
                 *
                 * @const {Token} token
                 */
                const token: Token = context.token(tt.eoc, {
                  end: now,
                  start: now,
                  value: null
                })

                /**
                 * The index of the current event.
                 *
                 * @var {number} index
                 */
                let index: number = -1

                // serialize tokens.
                while (++index < events.length) {
                  assert(events[index], 'expected `events[index]`')
                  const [event, token, self] = events[index]!

                  if (event === ev.enter) {
                    token.value = self.sliceSerialize(token)
                  }
                }

                // add end-of-content events.
                events.push(
                  [ev.enter, token, context],
                  [ev.exit, token, context]
                )

                return events
              }
            })
          }
        },
        parser: ct.document,
        slice: [codes.lowercaseA, codes.lowercaseB, codes.lowercaseC],
        snapshot: true
      }
    ],
    [
      'restore state after failed construct',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(
              this: void,
              events: Event[],
              context: TokenizeContext
            ): undefined {
              expect(events).to.be.an('array').of.length(2)
              expect(events).to.each.have.nested.property('1.type', tt.succ)

              return void context
            }
          }
        },
        options: initialize([eventsThenFail, eventsThenSucc]),
        slice: chars.lowercaseA
      }
    ],
    [
      'restore state after successful check',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(
              this: void,
              events: Event[],
              context: TokenizeContext
            ): undefined {
              expect(events).to.be.an('array').of.length(2)
              expect(events).to.each.have.nested.property('1.type', tt.succ)

              return void context
            }
          }
        },
        options: {
          extensions: { [ct.document]: { [codes.lowercaseB]: checkThenSucc } },
          initialize: { document: initialize(ct.document) }
        },
        parser: ct.document,
        slice: chars.lowercaseB
      }
    ],
    [
      'restore state after successful interrupt',
      {
        hooks(this: void): Hooks {
          /**
           * The tokenizer spy.
           *
           * @var {Mock<Tokenizer>} spy
           */
          let spy: Mock<Tokenizer>

          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(
              this: void,
              events: Event[],
              context: TokenizeContext
            ): undefined {
              expect(events).to.be.an('array').of.length(2)
              expect(events).to.each.have.nested.property('1.type', tt.succ)

              expect(spy.mock.contexts).to.have.length(2)
              expect(spy.mock.contexts[0]).to.not.eq(context)
              expect(spy.mock.contexts[0]).to.have.property('interrupt', true)

              return void context
            },

            /**
             * @this {void}
             *
             * @return {undefined}
             */
            before(this: void): undefined {
              return void (spy = vi.spyOn(eventsThenSucc, 'tokenize'))
            }
          }
        },
        options: initialize(interruptThenSucc),
        slice: codes.lowercaseC
      }
    ],
    [
      'try constructs in order',
      {
        hooks(this: void): Hooks {
          return {
            /**
             * @this {void}
             *
             * @param {Event[]} events
             *  The list of events
             * @param {TokenizeContext} context
             *  The tokenize context
             * @return {undefined}
             */
            after(events: Event[], context: TokenizeContext): undefined {
              expect(events).to.be.an('array').of.length(2)
              expect(events).to.each.have.nested.property('1.type', tt.succ)

              return void context
            }
          }
        },
        options: {
          extensions: {
            [ct.document]: {
              [codes.lowercaseD]: [eventsThenSucc, failEventsThenSucc]
            }
          },
          initialize: { document: initialize(ct.document) }
        },
        parser: ct.document,
        slice: chars.lowercaseD
      }
    ]
  ])('should %s', (_, test) => {
    // Arrange
    const hooks: Hooks = test.hooks(test.options)
    let subject: TokenizeContext = testSubject(test.options)

    // Setup
    if (test.parser) subject = subject.parser[test.parser]()
    void hooks.before?.(subject)

    // Act
    subject.write(test.slice)
    subject.write(codes.eos)

    // Expect (after hook)
    void hooks.after(subject.events, subject)

    // Expect (snapshot)
    test.snapshot && expect(snapshot(subject.events)).toMatchSnapshot()
  })
})
