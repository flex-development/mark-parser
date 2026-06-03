/**
 * @file createTokenizer
 * @module fsm-tokenizer/createTokenizer
 */

import type {
  Attempt,
  Chunk,
  Code,
  Column,
  Construct,
  ConstructRecord,
  Constructs,
  ContentType,
  Create,
  Effects,
  Event,
  FileLike,
  Info,
  InitialConstruct,
  InitialConstructs,
  Initialize,
  Line,
  List,
  NormalizedExtension,
  Options,
  ParseContext,
  Place,
  Point,
  Range,
  ReturnHandle,
  SerializeOptions,
  State,
  Token,
  TokenFactory,
  TokenFields,
  TokenInfo,
  TokenizeContext,
  TokenType,
  Value
} from '@flex-development/fsm-tokenizer'
import { Location } from '@flex-development/vfile-location'
import type { Debugger } from 'debug'
import { ok as assert } from 'devlop'
import { codes, constants, ev } from './enums/index.mts'
import createDebugger from './internal/create-debugger.mts'
import createDefineSkip from './internal/create-define-skip.mts'
import createTokenFactory from './internal/create-token-factory.mts'
import isList from './internal/is-list.mts'
import noop from './internal/noop.mts'
import skip from './internal/skip.mts'
import toList from './internal/to-list.mts'
import preprocess from './preprocess.mts'
import {
  combineExtensions,
  decode,
  eol,
  eos,
  isCode,
  push,
  resolveAll,
  serializeChunks,
  sliceChunks,
  splice,
  tab
} from './utils/index.mts'

export default createTokenizer

/**
 * Create a tokenizer.
 *
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
 * @return {TokenizeContext}
 *  The tokenize context
 */
function createTokenizer(
  this: void,
  initialize: Initialize,
  options?: Partial<Options> | Point | null | undefined
): TokenizeContext

/**
 * Create a tokenizer.
 *
 * @see {@linkcode Initialize}
 * @see {@linkcode Options}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Initialize | Options} options
 *  The initial construct, a record of initial constructs, a function that
 *  returns the initial construct or record, or the tokenizer options
 * @return {TokenizeContext}
 *  The tokenize context
 */
function createTokenizer(
  this: void,
  options: Initialize | Options
): TokenizeContext

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
 *  The tokenize context
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
   * Map, where each key is a line number and each value a column to be skipped
   * to when the tokenizer has reached that line.
   *
   * @const {Record<Line, Column>} skips
   */
  const skips: Record<Line, Column> = {}

  /**
   * The token factory.
   *
   * @const {TokenFactory} token
   */
  const token: TokenFactory = createTokenFactory(options)

  /**
   * The list of chunks.
   *
   * @var {Chunk[]} chunks
   */
  let chunks: Chunk[] = []

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
  let place: Place = new Location(null, options.from).place as Place

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
    code: codes.eos,
    currentConstruct: undefined,
    debug,
    defineSkip: createDefineSkip(place, skips, debug),
    effects,
    encoding: options.encoding,
    events: [],
    now,
    parser: options.parser ?? {} as ParseContext,
    peek,
    preprocess: options.preprocess ?? preprocess(options),
    previous: codes.eos,
    serializeChunks,
    sliceSerialize,
    sliceStream,
    token,
    write
  }, {
    debug: {
      configurable: false,
      enumerable: false,
      writable: false
    },
    effects: {
      configurable: false,
      enumerable: false,
      writable: false
    }
  })

  place._bufferIndex = lastBufferIndex
  place._index = 0

  finalizeContext(context, initialize, options)

  if ('tokenize' in initialize) {
    onsuccessfulconstruct(initialize)
    state = initialize.tokenize.call(context, effects)
  }

  return context

  /**
   * Factory to attempt/check/interrupt.
   *
   * @this {void}
   *
   * @param {ReturnHandle} onreturn
   *  The success callback
   * @param {Partial<TokenizeContext> | null | undefined} [fields]
   *  The fields to attach to the tokenize context
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
     * @param {State | undefined} [succ]
     *  The successful tokenization state
     * @param {State | undefined} [fail]
     *  The failed tokenization state
     * @return {State}
     *  The next state
     */
    function hook(
      this: void,
      construct: Constructs,
      succ: State | undefined = noop,
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

          code !== codes.eos && map[code] && list.push(...toList(map[code]))
          map.null && list.push(...toList(map.null))

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
          debug('start: %o', code)

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

          /**
           * The tokenize context to use.
           *
           * @var {TokenizeContext} self
           */
          let self: TokenizeContext = context

          // create an object w/ `context` as its prototype.
          // this allows a "live binding", which is needed for `interrupt`.
          if (fields) {
            self = Object.create(
              context,
              Object.getOwnPropertyDescriptors(context)
            )
          }

          return construct.tokenize.call(
            Object.assign(self, fields),
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
        assert(code === expected, 'expected `code` to equal expected code')
        debug('ok: `%o`', code)

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
        assert(code === expected, 'expected `code` to equal `expected`')
        debug('nok: `%o`', code)

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
    assert(code === expected, 'expected `code` to equal expected code')
    debug('consume: `%o`; previous: `%o`', code, context.previous)
    assert(consumed === null, 'expected unconsumed code')

    if ((options.eol ?? eol)(code)) {
      place.column = 1
      place.line++
      place.offset += code === codes.crlf ? 2 : 1
      skip(place, skips)
      debug('position after eol: %o', place)
    } else if (tab(code)) {
      place.column += options.tabSize ?? constants.tabSize
      if (code < 0) place.offset++
    } else if (
      code !== codes.empty &&
      code !== codes.eos &&
      code !== codes.vs
    ) {
      if (code !== codes.break || options.moveOnBreak) {
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
      const chunk: Chunk | undefined = chunks[place._index]

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
     *  The new tokenize context
     */
    function create(
      this: void,
      from?: Point | null | undefined
    ): TokenizeContext {
      assert(options && 'initialize' in options, 'expected options object')
      assert(contentType in initialize, 'expected initial construct record')

      return createTokenizer(initialize[contentType], {
        ...options,
        from: from ?? options.from,
        parser: context.parser
      })
    }
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
    skip(place, skips)
    fields ??= {}

    /**
     * Where the token starts.
     *
     * @const {Point} start
     */
    const start: Point = context.now()

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

    /**
     * The token to close.
     *
     * @const {Token | undefined} token
     */
    const token: Token | undefined = stack.pop()

    assert(token, 'cannot exit without open token')

    // close token.
    token.end = context.now()

    // empty token closed at end of string chunk.
    if (
      token.start._index === token.end._index &&
      token.start._bufferIndex === token.end._bufferIndex &&
      token.start._bufferIndex < 0 &&
      typeof chunks[token.start._index - 1] === 'string'
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
   * Finalize the tokenize context.
   *
   * @see {@linkcode TokenizeContext}
   *
   * @this {void}
   *
   * @param {TokenizeContext} context
   *  The base tokenize context
   * @param {InitialConstruct | InitialConstructs} initialize
   *  The initial construct, or the record of initial constructs
   * @param {Partial<Options>} options
   *  The tokenizer options
   * @return {null | undefined}
   *  Nothing
   */
  function finalizeContext(
    this: void,
    context: TokenizeContext,
    initialize: InitialConstruct | InitialConstructs,
    options: Partial<Options>
  ): null | undefined {
    /**
     * The base syntax extension.
     *
     * @const {NormalizedExtension} extension
     */
    const extension: NormalizedExtension = {
      disable: { null: options.disable && [...options.disable] }
    }

    // combine extensions.
    context.parser.constructs = combineExtensions(extension, options.extensions)

    // add content-level tokenizers.
    if (!Object.prototype.hasOwnProperty.call(initialize, 'tokenize')) {
      for (const ct in initialize) {
        Object.assign(context.parser, { [ct]: creator(ct as ContentType) })
        if (ct in context.parser.constructs) continue
        Object.assign(context.parser.constructs, { [ct]: {} })
      }
    }

    return options.finalizeContext?.(context)
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
   * Resolve events.
   *
   * @this {void}
   *
   * @param {Construct} construct
   *  The successful construct
   * @param {Pick<Info, 'from'> | null | undefined} [info]
   *  Info passed around
   * @return {undefined}
   */
  function onsuccessfulconstruct(
    this: void,
    construct: Construct,
    info?: Pick<Info, 'from'> | null | undefined
  ): undefined {
    if (construct.resolveAll && !resolveAlls.includes(construct)) {
      resolveAlls.push(construct)
    }

    if (info) {
      // resolve the events parsed by `construct.tokenize`.
      if (construct.resolve) {
        splice(
          context.events,
          info.from,
          context.events.length - info.from,
          construct.resolve(context.events.slice(info.from), context)
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
    }

    return void construct
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

    if (place._index < chunks.length) {
      /**
       * The current chunk.
       *
       * @const {Chunk | undefined} chunk
       */
      const chunk: Chunk | undefined = chunks[place._index]

      assert(chunk !== undefined, 'expected `chunk`')

      if (typeof chunk !== 'string') { // not in string chunk.
        assert(place._bufferIndex < 0, 'expected negative `_bufferIndex`')
        code = chunk
      } else { // in or at end of string chunk.
        code = chunk.codePointAt(place._bufferIndex)
      }
    }

    return isCode(code) ? code : eos(chunks.at(-1)) ? codes.eos : codes.break
  }

  /**
   * Get the text spanning `range`.
   *
   * @this {void}
   *
   * @param {Range} range
   *  The position in stream
   * @param {SerializeOptions | boolean | null | undefined} [options]
   *  Options for serializing or whether to expand tabs
   * @return {string}
   *  The serialized slice
   */
  function sliceSerialize(
    this: void,
    range: Range,
    options?: SerializeOptions | boolean | null | undefined
  ): string {
    return context.serializeChunks(context.sliceStream(range), options)
  }

  /**
   * Get the chunks spanning `range`.
   *
   * @this {void}
   *
   * @param {Range} range
   *  The position in stream
   * @return {Chunk[]}
   *  The chunks in stream spanning `range`
   */
  function sliceStream(this: void, range: Range): Chunk[] {
    return sliceChunks(chunks, range)
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
      stack = lastStack

      context.code = code
      context.currentConstruct = construct
      context.events.length = from
      context.previous = previous

      lastBufferIndex = place._bufferIndex

      return skip(place, skips), void debug('restore: %o', place)
    }
  }

  /**
   * Main loop to walk through {@linkcode chunks}.
   *
   * > 👉 **Note**: The {@linkcode consume} method modifies `bufferIndex` and
   * > `_index` in {@linkcode place} to advance the loop until end of stream.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function tokenize(this: void): undefined {
    while (place._index < chunks.length) {
      const { _index: chunkIndex } = context.now()

      /**
       * The current chunk.
       *
       * @const {Chunk | undefined} chunk
       */
      const chunk: Chunk | undefined = chunks[chunkIndex]

      // deal with character code chunk.
      if (isCode(chunk)) {
        go(chunk)
        continue
      }

      assert(chunk !== undefined, 'expected `chunk`')

      // normalize buffer index to loop through string chunk.
      /* v8 ignore else -- @preserve */ if (place._bufferIndex < 0) {
        place._bufferIndex = 0
      }

      // loop through string chunk to deal with character codes.
      while (place._index === chunkIndex && place._bufferIndex < chunk.length) {
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
    }

    return void state
  }

  /**
   * Write a slice of chunks.
   *
   * The eof code (`null`) can be used to signal end of stream.
   *
   * @this {void}
   *
   * @param {Chunk | FileLike | List<Chunk | FileLike | Value> | Value} slice
   *  The chunk or list of chunks to write
   * @return {Event[]}
   *  The current list of events
   */
  function write(
    this: void,
    slice: Chunk | FileLike | List<Chunk | FileLike | Value> | Value
  ): Event[] {
    chunks = push(chunks, toList(decode(slice, context.encoding)))

    // run constructs on new chunks.
    tokenize()

    // exit if not done, resolvers might change stuff.
    if (!eos(chunks.at(-1))) return []

    // resolve events.
    assert('tokenize' in initialize, 'expected initial construct')
    onsuccessfulconstruct(initialize, { from: 0 })
    context.events = resolveAll(resolveAlls, context.events, context)

    return context.events
  }
}
