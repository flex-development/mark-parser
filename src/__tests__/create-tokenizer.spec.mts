/**
 * @file Unit Tests - createTokenizer
 * @module mark-parser/tests/unit/createTokenizer
 */

import testSubject from '#create-tokenizer'
import chars from '#enums/chars'
import codes from '#enums/codes'
import constants from '#enums/constants'
import ev from '#enums/ev'
import ct from '#fixtures/ct'
import tt from '#fixtures/tt'
import type {
  FinalizeContext,
  Initialize,
  Options
} from '@flex-development/mark-parser'
import type {
  Chunk,
  Code,
  Effects,
  InitialConstruct,
  Place,
  Point,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { isObjectCurly } from '@flex-development/tutils'

describe('unit:createTokenizer', () => {
  let from: Point
  let initialize: InitialConstruct
  let place: Place

  beforeAll(() => {
    from = { column: 1, line: 3, offset: 3 }
    place = { ...from, _bufferIndex: -1, _index: 0 }

    initialize = {
      /**
       * @this {TokenizeContext}
       *
       * @param {Effects} effects
       *  The context object to transition the state machine
       * @return {State}
       *  The initial state
       */
      tokenize(this: TokenizeContext, effects: Effects): State {
        /**
         * @this {void}
         *
         * @param {Code} code
         *  The current character code
         * @return {State | undefined}
         *  The next state
         */
        return function eat(this: void, code: Code): State | undefined {
          return effects.consume(code), eat
        }
      }
    }
  })

  it.each<[Initialize]>([
    [{ tokenize: vi.fn() }],
    [vi.fn(() => ({ tokenize: vi.fn() }))]
  ])('should create tokenize context (%#)', initialize => {
    // Arrange
    const finalizeContext: FinalizeContext = vi.fn().mockName('finalizeContext')
    const options: Options = { finalizeContext, initialize }
    let initializer: Initialize = initialize

    // Act
    const result = testSubject(options)

    // get expected initializer.
    if (typeof initialize === 'function') {
      initializer = vi.mocked(initialize).mock.results[0]?.value
    }

    // Expect
    expect(finalizeContext).toHaveBeenCalledOnce()
    expect(finalizeContext).toHaveBeenCalledWith(result, initializer, options)
    expect(result).to.have.property('effects').satisfy(isObjectCurly)
    expect(result).to.have.property('debug').be.a('function')
    expect(result).toMatchSnapshot()
  })

  it.each<[Initialize]>([
    [{ [ct.document]: { tokenize: vi.fn() } }],
    [vi.fn(() => ({ [ct.document]: { tokenize: vi.fn() } }))]
  ])('should create tokenize context from ContentType (%#)', initialize => {
    // Arrange
    const finalizeContext: FinalizeContext = vi.fn().mockName('finalizeContext')
    const options: Options = { finalizeContext, initialize }
    const context: TokenizeContext = testSubject(options)

    // Act
    const result = context.parser.document(from)

    // Expect
    expect(finalizeContext).toHaveBeenCalledTimes(2)
    expect(vi.mocked(finalizeContext).mock.calls[0]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[0]![0]).to.eq(context)
    expect(vi.mocked(finalizeContext).mock.calls[1]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[1]![0]).to.eq(result)
    expect(result).to.not.eq(context)
    expect(result.now()).to.eql(place)
    expect(result).toMatchSnapshot()
  })

  it.each<[Initialize]>([
    [{ tokenize: vi.fn() }],
    [{ [ct.document]: { tokenize: vi.fn() } }]
  ])('should create tokenize context with custom start point (%#)', init => {
    // Act
    const subject: TokenizeContext = testSubject(init, from)

    // Expect
    if (ct.document in init) {
      expect(subject.parser.document().now()).to.eql(place)
    } else {
      expect(subject.now()).to.eql(place)
    }
  })

  describe('#effects.consume', () => {
    it.each<[keyof typeof codes]>([
      ['break'],
      ['empty'],
      ['eof'],
      ['eos'],
      ['vs']
    ])('should only move chunk position (`codes.%s`)', key => {
      // Arrange
      const code: Code = codes[key]
      const subject: TokenizeContext = testSubject(initialize)
      const now: Place = subject.now()

      // Act
      subject.write(code)

      // Expect
      expect(subject.now()).to.eql({ ...now, _index: now._index + 1 })
    })

    it.each<[key: keyof typeof codes, options?: Partial<Options>]>([
      ['ht'],
      ['vht', { tabSize: 0 }]
    ])('should move based on tab size (`codes.%s`)', (key, options) => {
      // Arrange
      const code: Code = codes[key]
      const subject: TokenizeContext = testSubject({ ...options, initialize })
      const now: Place = subject.now()

      // Act
      subject.write(code)

      // Expect
      expect(subject.now()).to.eql({
        ...now,
        _index: now._index + 1,
        column: now.column + (options?.tabSize ?? constants.tabSize),
        offset: now.offset + (code && code < 0 ? 1 : 0)
      })
    })

    it.each<[key: keyof typeof codes, options?: Partial<Options>]>([
      ['break', { eol: code => code === codes.break }],
      ['cr'],
      ['crlf'],
      ['lf'],
      ['ls'],
      ['ps'],
      ['vcr'],
      ['vlf']
    ])('should move line on line ending (%#)', (key, options) => {
      // Arrange
      const code: Code = codes[key]
      const subject: TokenizeContext = testSubject({ ...options, initialize })
      const now: Place = subject.now()

      // Act
      subject.write(code)

      // Expect
      expect(subject.now()).to.eql({
        ...now,
        _index: now._index + 1,
        column: 1,
        line: now.line + 1,
        offset: code === codes.crlf ? 2 : 1
      })
    })

    it('should move on `codes.break` if enabled', () => {
      // Arrange
      const moveOnBreak: true = true
      const subject: TokenizeContext = testSubject(initialize, { moveOnBreak })
      const now: Place = subject.now()

      // Act
      subject.write(codes.break)

      // Expect
      expect(subject.now()).to.eql({
        ...now,
        _index: now._index + 1,
        column: now.column + 1,
        offset: now.offset + 1
      })
    })

    it.each<[chunk: Chunk]>([
      [chars.digit0],
      [chars.digit1 + chars.digit3],
      [codes.digit3]
    ])('should move tokenizer forward (%#)', chunk => {
      // Arrange
      const subject: TokenizeContext = testSubject(initialize)
      const now: Place = subject.now()

      // Act
      const result = (subject.write(chunk), subject.now())

      // Expect
      expect(result._bufferIndex).to.eq(now._bufferIndex)
      expect(result._index).to.not.eq(now._index)
      expect(result.column).to.not.eq(now.column)
      expect(result.line).to.eq(now.line)
      expect(result.offset).to.not.eq(now.offset)
    })
  })

  describe('#effects.enter', () => {
    let result: Token
    let subject: TokenizeContext

    beforeAll(() => {
      subject = testSubject(initialize)
      result = subject.effects.enter(tt.succ, { value: 'ok' })
    })

    it('should create `enter` event for new token', () => {
      expect(subject.events).to.be.an('array').of.length(1)
      expect(subject.events[0]).to.be.an('array').of.length(3)
      expect(subject.events[0]).to.have.property('0', ev.enter)
      expect(subject.events[0]).to.have.property('1', result)
      expect(subject.events[0]).to.have.property('2', subject)
    })

    it('should return open token', () => {
      expect(result).to.have.property('start').but.not.have.property('end')
      expect(result).toMatchSnapshot()
    })
  })

  describe('#effects.exit', () => {
    let subject: TokenizeContext

    beforeEach(() => {
      subject = testSubject(initialize)
    })

    it('should create `exit` event for existing token', () => {
      // Setup
      subject.effects.enter(tt.succ)

      // Act
      const result = subject.effects.exit(tt.succ)

      // Expect
      expect(subject.events).to.be.an('array').of.length(2)
      expect(subject.events[1]).to.be.an('array').of.length(3)
      expect(subject.events[1]).to.have.property('0', ev.exit)
      expect(subject.events[1]).to.have.property('1', result)
      expect(subject.events[1]).to.have.property('2', subject)
    })

    it('should handle empty token closed at end of string chunk', () => {
      // Arrange
      const chunk: string = import.meta.url

      // Setup
      subject.write(chunk)
      subject.effects.enter(tt.succ)

      // Act
      const result = subject.effects.exit(tt.succ)

      // Expect
      expect(result.start._bufferIndex).to.eq(chunk.length)
      expect(result.start._index).to.eq(result.end._index - 1)
    })

    it('should return closed token', () => {
      // Arrange
      const entered: Token = subject.effects.enter(tt.eoc)

      // Act
      const result = subject.effects.exit(tt.eoc)

      // Expect
      expect(result).to.eq(entered)
      expect(result).to.have.property('start')
      expect(result).to.have.property('end')
      expect(result).toMatchSnapshot()
    })
  })

  describe('#peek', () => {
    let subject: TokenizeContext

    beforeEach(() => {
      subject = testSubject(initialize)
    })

    it('should return `codes.break` if at beginning of stream', () => {
      expect(subject.peek()).to.eq(codes.break)
    })

    it('should return `codes.break` if out of chunks but not done', () => {
      // Setup
      subject.write(codes.asterisk)

      // Act + Expect
      expect(subject.peek()).to.eq(codes.break)
    })

    it('should return `codes.eos` if at end of stream', () => {
      // Setup
      subject.write(codes.eos)

      // Act + Expect
      expect(subject.peek()).to.eq(codes.eos)
    })
  })

  describe('#write', () => {
    let subject: TokenizeContext

    beforeEach(() => {
      subject = testSubject(initialize)
    })

    it('should return empty event list if not done consuming', () => {
      // Act
      const result = subject.write(codes.ampersand)

      // Expect
      expect(result).to.eql([]).and.not.eq(subject.events)
    })

    it('should return `events` if done consuming', () => {
      expect(subject.write(codes.eos)).to.eq(subject.events)
    })
  })
})
