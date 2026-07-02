/**
 * @file createTokenizer
 * @module mark-parser/createTokenizer
 */

import type Info from '#types/info'
import type ReturnHandle from '#types/return-handle'
import type { Initialize, Options } from '@flex-development/mark-parser'
import {
  combineExtensions,
  eol,
  eos,
  resolveAll,
  serializeChunks
} from '@flex-development/mark-parser/utils'
import { push, splice } from '@flex-development/mark-util-chunked'
import { chars, codes, ev } from '@flex-development/mark-util-symbol'
import type { IfNever, List } from '@flex-development/mark/core'
import type {
  Attempt,
  Chunk,
  Code,
  Construct,
  ConstructRecord,
  Constructs,
  ContentType,
  Context,
  Create,
  CreateToken,
  Effects,
  Event,
  Extension,
  InitialConstruct,
  InitialConstructs,
  NormalizedExtension,
  ParseContext,
  Place,
  Point,
  Position,
  SerializeOptions,
  State,
  Token,
  TokenFields,
  TokenInfo,
  TokenizeContext,
  TokenType,
  Writable
} from '@flex-development/mark/parse'
import type { Debugger } from 'debug'
import { ok as assert, equal } from 'devlop'
import createDebugger from './internal/create-debugger.mts'
import createTokenFactory from './internal/create-token-factory.mts'
import isList from './internal/is-list.mts'
import toList from './internal/to-list.mts'

export default createTokenizer

/**
 * Create a tokenizer.
 *
 * @see {@linkcode Context}
 * @see {@linkcode IfNever}
 * @see {@linkcode Initialize}
 * @see {@linkcode Options}
 * @see {@linkcode Point}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Initialize} initialize
 *  The initial construct, a record of initial constructs,
 *  or a function that returns the initial construct or record
 * @param {Partial<Options> | Point | null | undefined} [options]
 *  The tokenizer options or the point before the first character in the content
 * @return {IfNever<Context, TokenizeContext, Context>}
 *  The tokenization context
 */
function createTokenizer(
  this: void,
  initialize: Initialize,
  options?: Partial<Options> | Point | null | undefined
): IfNever<Context, TokenizeContext, Context>

/**
 * Create a tokenizer.
 *
 * @see {@linkcode Context}
 * @see {@linkcode IfNever}
 * @see {@linkcode Initialize}
 * @see {@linkcode Options}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Initialize | Options} options
 *  The initial construct, a record of initial constructs, a function that
 *  returns the initial construct or record, or the tokenizer options
 * @return {IfNever<Context, TokenizeContext, Context>}
 *  The tokenization context
 */
function createTokenizer(
  this: void,
  options: Initialize | Options
): IfNever<Context, TokenizeContext, Context>

/**
 * Create a tokenizer.
 *
 * @see {@linkcode Initialize}
 * @see {@linkcode Options}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Initialize | Options} initialize
 *  The initial construct, a record of initial constructs, a function that
 *  returns the initial construct or record, or the tokenizer options
 * @param {Partial<Options> | Point | null | undefined} [options]
 *  The tokenizer options or the point before the first character in the content
 * @return {TokenizeContext}
 *  The tokenization context
 */
function createTokenizer(
  this: void,
  initialize: Initialize | Options,
  options?: Partial<Options> | Point | null | undefined
): TokenizeContext {
  if ('initialize' in initialize) {
    options = initialize
    initialize = initialize.initialize
  } else if (options && 'line' in options) {
    options = { from: options, initialize: initialize }
  } else {
    options = { ...options, initialize: initialize }
  }

  assert('initialize' in options, 'expected options object')
  if (typeof initialize === 'function') initialize = initialize()

  /**
   * The debug logger.
   *
   * @const {Debugger} debug
   */
  const debug: Debugger = createDebugger(options)

  /**
   * The context object to transition the state machine.
   *
   * @const {Effects} effects
   */
  const effects: Effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter,
    exit,
    interrupt: constructFactory(onsuccessfulcheck, { interrupt: true })
  }

  /**
   * The list of constructs with `resolveAll` handlers.
   *
   * @const {Construct[]} resolveAlls
   */
  const resolveAlls: Construct[] = []

  /**
   * The token factory.
   *
   * @const {CreateToken} token
   */
  const token: CreateToken = createTokenFactory(options)

  /**
   * The character code consumption state, used for tracking bugs.
   *
   * @var {boolean | null} consumed
   */
  let consumed: boolean | null = true

  /**
   * The expected character code, used for tracking bugs.
   *
   * @var {Code} expected
   */
  let expected: Code

  /**
   * The last buffer chunk index.
   *
   * @var {number} lastBufferIndex
   */
  let lastBufferIndex: number = -1

  /**
   * The current point in the content.
   *
   * @var {Place} place
   */
  let place: Place = { column: 1, line: 1, offset: 0, ...options.from } as Place

  /**
   * The token stack.
   *
   * @var {Token[]} stack
   */
  let stack: Token[] = []

  /**
   * The current state.
   *
   * @var {State | undefined} state
   */
  let state: State | undefined

  /**
   * The tokenization context.
   *
   * Contains state and tools for resolving and serializing.
   *
   * @const {TokenizeContext} context
   */
  const context: TokenizeContext = Object.defineProperties({
    chunks: [],
    code: codes.bos,
    currentConstruct: undefined,
    debug,
    defineSkip,
    effects,
    events: [],
    now,
    parser: options.parser ?? {} as ParseContext,
    previous: codes.eos,
    serializeChunks,
    skips: {},
    sliceSerialize,
    sliceStream,
    token,
    write
  }, {
    chunks: {
      configurable: false,
      enumerable: false,
      writable: true
    },
    debug: {
      configurable: false,
      enumerable: false,
      writable: true
    },
    effects: {
      configurable: false,
      enumerable: false,
      writable: false
    },
    serializeChunks: {
      configurable: false,
      enumerable: false,
      writable: true
    },
    skips: {
      configurable: false,
      enumerable: false,
      writable: false
    }
  })

  place._bufferIndex = lastBufferIndex
  place._index = 0

  finalizeContext(context, initialize, options)

  if ('tokenize' in initialize) {
    resolveAlls.push(initialize)
    state = initialize.tokenize.call(context, effects)
  }

  return context

  /**
   * Move {@linkcode place} a bit forward.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function accountForPotentialSkip(this: void): undefined {
    if (place.line in context.skips && place.column < 2) {
      place.column = context.skips[place.line]!
      place.offset += place.column - 1
    }

    return void place
  }

  /**
   * Resolve events.
   *
   * @this {void}
   *
   * @param {Construct} construct
   *  The successful construct
   * @param {Info['from']} from
   *  The last known length of the event list
   * @return {undefined}
   */
  function addResult(
    this: void,
    construct: Construct,
    from: Info['from']
  ): undefined {
    if (construct.resolveAll && !resolveAlls.includes(construct)) {
      resolveAlls.push(construct)
    }

    // resolve the events parsed by `construct.tokenize`.
    if (construct.resolve) {
      splice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    // resolve events parsed from the start of content (which may include
    // other constructs) to the last one parsed by `construct.tokenize`.
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }

    assert(
      /* v8 ignore next 3 */ construct.partial ||
        !context.events.length ||
        context.events[context.events.length - 1]![0] === ev.exit,
      'expected last token to end'
    )

    return void construct
  }

  /**
   * Factory to attempt/check/interrupt.
   *
   * @this {void}
   *
   * @param {ReturnHandle} onreturn
   *  The success callback
   * @param {Partial<TokenizeContext> | null | undefined} [fields]
   *  The fields to attach to the tokenization context
   * @return {Attempt}
   *  attempt/check/interrupt
   */
  function constructFactory(
    this: void,
    onreturn: ReturnHandle,
    fields?: Partial<TokenizeContext> | null | undefined
  ): Attempt {
    return hook

    /**
     * Handle an object mapping codes to constructs, a list of constructs,
     * or a single construct.
     *
     * @this {void}
     *
     * @param {Constructs} construct
     *  The constructs to try
     * @param {State} succ
     *  The successful tokenization state
     * @param {State | undefined} [fail]
     *  The failed tokenization state
     * @return {State}
     *  The next state
     */
    function hook(
      this: void,
      construct: Constructs,
      succ: State,
      fail?: State | undefined
    ): State {
      /**
       * The current construct.
       *
       * @var {Construct} currentConstruct
       */
      let currentConstruct: Construct

      /**
       * The internal state.
       *
       * @var {Info} info
       */
      let info: Info

      /**
       * The index of the current construct.
       *
       * @var {number} j
       */
      let j: number

      /**
       * The construct list.
       *
       * @var {Construct[]} list
       */
      let list: Construct[]

      // handle list of constructs, single construct, or map of constructs
      return 'tokenize' in construct || isList(construct)
        ? handleConstructList(toList(construct))
        : handleConstructRecord(construct)

      /**
       * Handle a list of constructs.
       *
       * @this {void}
       *
       * @param {Construct[]} constructs
       *  The list of constructs
       * @return {State}
       *  The next state
       */
      function handleConstructList(this: void, constructs: Construct[]): State {
        list = constructs
        j = 0

        if (!constructs.length) {
          assert(fail, 'expected `fail` to be given')
          return fail
        }

        assert(constructs[j], 'expected `constructs[j]`')
        return handleConstruct(constructs[j]!)
      }

      /**
       * Handle an object mapping codes to constructs.
       *
       * @this {void}
       *
       * @param {ConstructRecord} map
       *  The construct record
       * @return {State}
       *  The next state
       */
      function handleConstructRecord(this: void, map: ConstructRecord): State {
        return record

        /**
         * @this {void}
         *
         * @param {Code} code
         *  The current character code
         * @return {State | undefined}
         *  The next state
         */
        function record(this: void, code: Code): State | undefined {
          /**
           * The list of constructs to try.
           *
           * @const {Construct[]} list
           */
          const list: Construct[] = []

          if (!eos(code)) {
            code in map && list.push(...toList(map[code] as Construct))
            map.null && list.push(...toList(map.null))
          }

          return handleConstructList(list)(code)
        }
      }

      /**
       * Handle a single construct.
       *
       * @this {void}
       *
       * @param {Construct} construct
       *  The construct
       * @return {State}
       *  The next state
       */
      function handleConstruct(this: void, construct: Construct): State {
        return start

        /**
         * @this {void}
         *
         * @param {Code} code
         *  The current character code
         * @return {State | undefined}
         *  The next state
         */
        function start(code: Code): State | undefined {
          info = store()
          currentConstruct = construct

          // set current construct.
          if (!construct.partial) context.currentConstruct = construct

          // always populated by defaults.
          assert(
            context.parser.constructs.disable.null,
            'expected `disable.null` to be populated'
          )

          // construct is disabled by name.
          if (
            construct.name &&
            context.parser.constructs.disable.null.includes(construct.name)
          ) {
            return nok(code)
          }

          // construct is disabled by guard.
          if (
            construct.previous &&
            !construct.previous.call(context, context.previous)
          ) {
            return nok(code)
          }

          return construct.tokenize.call(
            // create an object w/ `context` as its prototype.
            // this allows a "live binding", which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      /**
       * The state to go on successful tokenization.
       *
       * @this {void}
       *
       * @param {Code} code
       *  The current character code
       * @return {State}
       *  The next state
       */
      function ok(this: void, code: Code): State {
        equal(code, expected, 'expected `code` to equal expected code')

        consumed = true
        onreturn(currentConstruct, info)

        return succ
      }

      /**
       * The state to go on failed tokenization.
       *
       * @this {void}
       *
       * @param {Code} code
       *  The current character code
       * @return {State | undefined}
       *  The next state
       */
      function nok(this: void, code: Code): State | undefined {
        assert(list, 'expected construct `list`')
        equal(code, expected, 'expected `code` to equal `expected`')

        consumed = true
        info.restore()

        if (++j < list.length) {
          assert(list[j], 'expected construct')
          return handleConstruct(list[j]!)
        }

        return fail
      }
    }
  }

  /**
   * Consume a character code and move onto the next.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {undefined}
   */
  function consume(this: void, code: Code): undefined {
    assert(options && 'initialize' in options, 'expected options object')
    equal(code, expected, 'expected `code` to equal expected code')
    debug('consume: `%o`; previous: `%o`', code, context.previous)
    assert(consumed === null, 'expected unconsumed code')

    if (
      code !== codes.bos && // beginning of stream
      code !== codes.empty && // empty string chunk (preprocessed)
      code !== codes.eos && // end of stream
      code !== codes.vs // virtual space
    ) {
      if ((options.eol ?? eol)(code)) {
        place.column = 1
        place.line++
        place.offset += code === codes.crlf ? 2 : 1
        accountForPotentialSkip()
        debug('position after eol: %o', place)
      } else if (code !== codes.break || options.moveOnBreak) {
        place.column++
        place.offset++
      }
    }

    if (place._bufferIndex < 0) { // not in a string chunk.
      place._index++
    } else { // inside string chunk.
      lastBufferIndex = ++place._bufferIndex

      /**
       * The current chunk.
       *
       * @const {Chunk | undefined} chunk
       */
      const chunk: Chunk | undefined = context.chunks[place._index]

      assert(typeof chunk === 'string', 'expected string chunk')

      // at end of string chunk.
      // points with non-negative `_bufferIndex` values reference strings.
      if (lastBufferIndex === chunk.length) {
        place._index++
        place._bufferIndex = -1
      }
    }

    context.previous = code
    context.code = peek()

    debug('context.code: `%o`', context.code)
    return consumed = true, void code
  }

  /**
   * Create a tokenizer factory.
   *
   * @this {void}
   *
   * @param {ContentType} contentType
   *  The content type
   * @return {Create}
   *  The tokenizer factory
   */
  function creator(this: void, contentType: ContentType): Create {
    return create

    /**
     * @this {void}
     *
     * @param {Point | null | undefined} [from]
     *  Where to start the tokenizer
     * @return {TokenizeContext}
     *  The new tokenization context
     */
    function create(
      this: void,
      from?: Point | null | undefined
    ): TokenizeContext {
      assert(options && 'initialize' in options, 'expected options object')
      assert(contentType in initialize, 'expected initial construct record')

      /**
       * The new tokenization context.
       *
       * @const {TokenizeContext} ctx
       */
      const ctx: TokenizeContext = createTokenizer({
        ...options,
        debug: debug.namespace + chars.colon + contentType,
        from: from ?? options.from,
        initialize: (initialize as InitialConstructs)[contentType],
        parser: context.parser
      })

      ctx.contentType = contentType
      return ctx
    }
  }

  /**
   * Define a skip point.
   *
   * Where a line starts after a prefix can be defined here.
   *
   * When the tokenizer moves after consuming a line ending corresponding to
   * the line number in the given point, the tokenizer shifts past the prefix
   * based on the column in the shifted point.
   *
   * @this {void}
   *
   * @param {Place} point
   *  The skip point
   * @return {undefined}
   */
  function defineSkip(this: void, point: Place): undefined {
    context.skips[point.line] = point.column
    accountForPotentialSkip()
    return void debug('position: define skip: `%j`', point)
  }

  /**
   * Start a new token.
   *
   * @this {void}
   *
   * @param {TokenType} type
   *  The token type
   * @param {TokenFields | null | undefined} [fields]
   *  Token fields
   * @return {Token}
   *  The open token
   */
  function enter(
    this: void,
    type: TokenType,
    fields?: TokenFields | null | undefined
  ): Token {
    fields ??= {}

    /**
     * Where the token starts.
     *
     * @const {Place} start
     */
    const start: Place = context.now()

    /**
     * The token info.
     *
     * @const {TokenInfo} info
     */
    const info: TokenInfo = Object.assign(fields as TokenInfo, { start })

    /**
     * The new token.
     *
     * @const {Token} token
     */
    const token: Token = context.token(type, info)

    assert(typeof type === 'string', 'expected `type` to be a string')
    assert(type.length > 0, 'expected `type` to be a non-empty string')
    debug('enter: `%s`; %o', type, token.start)

    // add enter event and push `token` onto the `stack`.
    context.events.push([ev.enter, token, context])
    stack.push(token)

    return token
  }

  /**
   * Close an open token.
   *
   * @this {void}
   *
   * @param {TokenType} type
   *  The token type
   * @return {Token}
   *  The closed token
   */
  function exit(this: void, type: TokenType): Token {
    assert(typeof type === 'string', 'expected `type` to be a string')
    assert(type.length > 0, 'expected `type` to be a non-empty string')
    assert(options && 'initialize' in options, 'expected options object')

    /**
     * The token to close.
     *
     * @const {Token | undefined} token
     */
    const token: Token | undefined = stack.pop()

    assert(token, 'cannot exit without open token')

    // close token.
    token.end = context.now()

    /**
     * Whether the token is empty.
     *
     * @const {boolean} emptyToken
     */
    const emptyToken: boolean = token.start._index === token.end._index &&
      token.start._bufferIndex === token.end._bufferIndex

    // handle empty token closed at end of string chunk.
    if (options.noEmptyTokens) {
      assert(!emptyToken, 'expected non-empty token (`' + type + '`)')
    } else if (
      emptyToken &&
      token.start._bufferIndex < 0 &&
      typeof context.chunks[token.start._index - 1] === 'string'
    ) {
      token.start._index = token.end._index - 1
      token.start._bufferIndex = lastBufferIndex
    }

    debug('exit: `%s`; %o', token.type, token.end)

    // add exit event.
    assert(type === token.type, 'expected exit token to match current token')
    context.events.push([ev.exit, token, context])

    return token
  }

  /**
   * Finalize the tokenization context.
   *
   * @this {void}
   *
   * @param {TokenizeContext} context
   *  The base tokenization context
   * @param {InitialConstruct | Partial<InitialConstructs>} initialize
   *  The initial construct, or the record of initial constructs
   * @param {Partial<Options>} options
   *  The tokenizer options
   * @return {null | undefined}
   *  Nothing
   */
  function finalizeContext(
    this: void,
    context: TokenizeContext,
    initialize: InitialConstruct | Partial<InitialConstructs>,
    options: Partial<Options>
  ): null | undefined {
    /**
     * The base syntax extension.
     *
     * @const {NormalizedExtension} extension
     */
    const extension: NormalizedExtension = {
      disable: { null: options.disable ? [...options.disable] : [] }
    }

    /**
     * The extension, or extensions, to combine.
     *
     * @const {Extension | List<Extension> | null | undefined} extensions
     */
    const extensions: Extension | List<Extension> | null | undefined =
      typeof options.extensions === 'function'
        ? options.extensions()
        : options.extensions

    // combine extensions.
    context.parser.constructs = combineExtensions(extension, extensions)

    // add content-level tokenizers.
    if (!Object.prototype.hasOwnProperty.call(initialize, 'tokenize')) {
      for (const ct in initialize) {
        Object.assign(context.parser, { [ct]: creator(ct as ContentType) })
        if (ct in context.parser.constructs) continue
        Object.assign(context.parser.constructs, { [ct]: {} })
      }
    }

    return options.finalizeContext?.(context, initialize, options)
  }

  /**
   * Deal with one character code.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The character code to handle
   * @return {undefined}
   */
  function go(this: void, code: Code): undefined {
    assert(consumed, `expected code \`${code}\` to be consumed`)
    consumed = null
    debug('go: `%o`, %j', code, /* v8 ignore next */ state?.name)
    expected = code
    assert(typeof state === 'function', 'expected state function')
    return state = state(code), void code
  }

  /**
   * Get the current point in the file.
   *
   * @this {void}
   *
   * @return {Place}
   *  The current point
   */
  function now(this: void): Place {
    const { _bufferIndex, _index, column, line, offset } = place
    // eslint-disable-next-line sort-keys
    return { line, column, offset, _index, _bufferIndex }
  }

  /**
   * Restore state after a check.
   *
   * @this {void}
   *
   * @param {Construct} construct
   *  The successful construct
   * @param {Pick<Info, 'restore'>} info
   *  Info passed around
   * @return {undefined}
   */
  function onsuccessfulcheck(
    this: void,
    construct: Construct,
    info: Pick<Info, 'restore'>
  ): undefined {
    return void info.restore()
  }

  /**
   * Handle a successful construct.
   *
   * @this {void}
   *
   * @param {Construct} construct
   *  The successful construct
   * @param {Info} info
   *  Info passed around
   * @return {undefined}
   */
  function onsuccessfulconstruct(
    this: void,
    construct: Construct,
    info: Info
  ): undefined {
    return void addResult(construct, info.from)
  }

  /**
   * Get the next character code without changing position without changing the
   * position of the tokenizer.
   *
   * @this {void}
   *
   * @return {Code}
   *  The peeked character code
   */
  function peek(this: void): Code {
    /**
     * The peeked character code.
     *
     * @var {Code} code
     */
    let code: Code | undefined

    if (place._index < context.chunks.length) {
      /**
       * The current chunk.
       *
       * @const {Chunk | undefined} chunk
       */
      const chunk: Chunk | undefined = context.chunks[place._index]

      assert(chunk !== undefined, 'expected `chunk`')

      if (typeof chunk !== 'string') { // not in string chunk.
        assert(place._bufferIndex < 0, 'expected negative `_bufferIndex`')
        code = chunk
      } else if (place._bufferIndex < 0) { // at beginning of string chunk.
        code = chunk.codePointAt(0)
      } else { // in or at end of string chunk.
        code = chunk.codePointAt(place._bufferIndex)
      }

      assert(code !== undefined, 'expected `code`')
      return code
    }

    return eos(context.chunks.at(-1)) ? codes.eos : codes.break
  }

  /**
   * Get the chunks spanning a token (or location).
   *
   * Numeric chunks are addressed by `_index` only.\
   * String chunks are addressed by `_index` plus `_bufferIndex`.
   *
   * @this {void}
   *
   * @param {Chunk[]} chunks
   *  The slice of chunks
   * @param {Position} range
   *  The position in stream
   * @return {Chunk[]}
   *  The list of chunks spanning `range`
   */
  function sliceChunks(this: void, chunks: Chunk[], range: Position): Chunk[] {
    const { _bufferIndex: endBufIndex, _index: endIndex } = range.end
    const { _bufferIndex: startBufIndex, _index: startIndex } = range.start

    /**
     * The chunks spanning {@linkcode range}.
     *
     * @var {Chunk[]} view
     */
    let view: Chunk[] = []

    if (!chunks.length) {
      // no chunks, no view.
    } else if (startIndex === endIndex) { // within the same chunk.
      if (startBufIndex === endBufIndex) {
        view = [chars.empty]
      } else { // slice string chunk.
        assert(endBufIndex > -1, 'expected non-negative end buffer index')
        assert(startBufIndex > -1, 'expected non-negative start buffer index')
        assert(typeof chunks[startIndex] === 'string', 'expected string chunk')
        view = [chunks[startIndex].slice(startBufIndex, endBufIndex)]
      }
    } else { // spanning multiple chunks.
      view = chunks.slice(startIndex, endIndex)

      // starts inside string chunk.
      if (startBufIndex > -1) {
        /**
         * The first chunk in the slice.
         *
         * @const {Chunk | undefined} head
         */
        const head: Chunk | undefined = view[0]

        // replace `head` with slice of itself.
        assert(typeof head === 'string', 'expected string chunk')
        view[0] = head.slice(startBufIndex)
      }

      if (endBufIndex > 0) { // ends inside string chunk.
        assert(typeof chunks[endIndex] === 'string', 'expected string chunk')
        view.push(chunks[endIndex].slice(0, endBufIndex))
      }
    }

    return view
  }

  /**
   * Get the text that spans a token (or location).
   *
   * @this {void}
   *
   * @param {Position} range
   *  The position in stream
   * @param {SerializeOptions | boolean | null | undefined} [options]
   *  Options for serializing or whether to expand tabs
   * @return {string}
   *  The serialized slice
   */
  function sliceSerialize(
    this: void,
    range: Position,
    options?: SerializeOptions | boolean | null | undefined
  ): string {
    return context.serializeChunks(context.sliceStream(range), options)
  }

  /**
   * Get the chunks that span a token (or location).
   *
   * @this {void}
   *
   * @param {Position} range
   *  The position in stream
   * @return {Chunk[]}
   *  The chunks in stream spanning `range`
   */
  function sliceStream(this: void, range: Position): Chunk[] {
    return sliceChunks(context.chunks, range)
  }

  /**
   * Store state.
   *
   * @this {void}
   *
   * @return {Info}
   *  Info passed around
   */
  function store(this: void): Info {
    /**
     * The current character code.
     *
     * @const {Code} code
     */
    const code: Code = context.code

    /**
     * The current construct.
     *
     * @const {Construct | null | undefined} construct
     */
    const construct: Construct | null | undefined = context.currentConstruct

    /**
     * The current number of events.
     *
     * @const {number} from
     */
    const from: number = context.events.length

    /**
     * The current point.
     *
     * @const {Place} lastPlace
     */
    const lastPlace: Place = context.now()

    /**
     * The current token stack.
     *
     * @const {Token[]} lastStack
     */
    const lastStack: Token[] = [...stack]

    /**
     * The previous character code.
     *
     * @const {Code} previous
     */
    const previous: Code = context.previous

    return { from, restore }

    /**
     * Restore state.
     *
     * @this {void}
     *
     * @return {undefined}
     */
    function restore(this: void): undefined {
      place = lastPlace

      context.code = code
      context.previous = previous
      context.currentConstruct = construct
      context.events.length = from

      stack = lastStack
      lastBufferIndex = place._bufferIndex

      return accountForPotentialSkip(), void debug('restore: %o', place)
    }
  }

  /**
   * Main loop to walk through chunks.
   *
   * > 👉 **Note**: The {@linkcode consume} method modifies `bufferIndex` and
   * > `_index` in {@linkcode place} to advance the loop until end of stream.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function tokenize(this: void): undefined {
    /**
     * The index of the current chunk.
     *
     * @var {number} chunkIndex
     */
    let chunkIndex: number

    while (place._index < context.chunks.length) {
      /**
       * The current chunk.
       *
       * @const {Chunk | undefined} chunk
       */
      const chunk: Chunk | undefined = context.chunks[place._index]

      if (typeof chunk === 'string') {
        chunkIndex = place._index

        // normalize buffer index to loop through string chunk.
        /* v8 ignore else -- @preserve */ if (place._bufferIndex < 0) {
          place._bufferIndex = 0
        }

        // loop through string chunk to deal with character codes.
        while (
          place._index === chunkIndex &&
          place._bufferIndex < chunk.length
        ) {
          /**
           * The current character code.
           *
           * @const {Code | undefined} code
           */
          const code: Code | undefined = chunk.codePointAt(place._bufferIndex)

          // deal with character code.
          assert(code !== undefined, 'expected `chunk[place._bufferIndex]`')
          go(code)
        }
      } else {
        // deal with character code.
        assert(chunk !== undefined, 'expected `chunk`')
        go(chunk)
      }
    }

    return void state
  }

  /**
   * Write a slice of chunks.
   *
   * The eos code (`null`) can be used to signal end of stream.
   *
   * @this {void}
   *
   * @param {Writable} slice
   *  The chunk or list of chunks to write
   * @return {Event[]}
   *  The list of events if at the end of stream, otherwise an empty array
   */
  function write(this: void, slice: Writable): Event[] {
    context.chunks = push(context.chunks, [...toList(slice)])

    // run constructs on new chunks.
    tokenize()

    // exit if not done, resolvers might change stuff.
    if (!eos(context.chunks.at(-1))) return []

    // resolve events.
    assert('tokenize' in initialize, 'expected initial construct')
    addResult(initialize, 0)
    context.events = resolveAll(resolveAlls, context.events, context)

    return context.events
  }
}
