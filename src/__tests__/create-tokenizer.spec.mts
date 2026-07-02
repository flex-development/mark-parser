/**
 * @file Unit Tests - createTokenizer
 * @module mark-parser/tests/unit/createTokenizer
 */

import testSubject from '#create-tokenizer'
import ct from '#fixtures/ct'
import initialConstructs from '#fixtures/initialize'
import tt from '#fixtures/tt'
import type {
  FinalizeContext,
  Initialize,
  Options
} from '@flex-development/mark-parser'
import { chars, codes, ev } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  Code,
  Effects,
  InitialConstruct,
  Place,
  Point,
  Position,
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
    [initialConstructs],
    [vi.fn(() => initialConstructs)]
  ])('should create tokenize context from ContentType (%#)', initialize => {
    // Arrange
    const finalizeContext: FinalizeContext = vi.fn().mockName('finalizeContext')
    const options: Options = { finalizeContext, initialize }
    const context: TokenizeContext = testSubject(options)

    // Act
    const result1 = context.parser.document(from)
    const result2 = context.parser.flow(from)
    const result3 = context.parser.content(from)
    const result4 = context.parser.string(from)
    const result5 = context.parser.text(from)

    // Expect
    expect(finalizeContext).toHaveBeenCalledTimes(6)
    expect(vi.mocked(finalizeContext).mock.calls[0]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[0]![0]).to.eq(context)
    expect(vi.mocked(finalizeContext).mock.calls[1]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[1]![0]).to.eq(result1)
    expect(vi.mocked(finalizeContext).mock.calls[2]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[2]![0]).to.eq(result2)
    expect(vi.mocked(finalizeContext).mock.calls[3]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[3]![0]).to.eq(result3)
    expect(vi.mocked(finalizeContext).mock.calls[4]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[4]![0]).to.eq(result4)
    expect(vi.mocked(finalizeContext).mock.calls[5]).to.have.length(3)
    expect(vi.mocked(finalizeContext).mock.calls[5]![0]).to.eq(result5)
    expect(result1).to.not.eq(context)
    expect(result2).to.not.eq(context)
    expect(result3).to.not.eq(context)
    expect(result4).to.not.eq(context)
    expect(result5).to.not.eq(context)
    expect(result1).to.not.eq(result2)
    expect(result1).to.not.eq(result3)
    expect(result1).to.not.eq(result4)
    expect(result1).to.not.eq(result5)
    expect(result2).to.not.eq(result3)
    expect(result2).to.not.eq(result4)
    expect(result2).to.not.eq(result5)
    expect(result3).to.not.eq(result4)
    expect(result3).to.not.eq(result5)
    expect(result4).to.not.eq(result5)
    expect(result1.now()).to.eql(place).but.not.eq(place)
    expect(result2.now()).to.eql(place).but.not.eq(place)
    expect(result3.now()).to.eql(place).but.not.eq(place)
    expect(result4.now()).to.eql(place).but.not.eq(place)
    expect(result5.now()).to.eql(place).but.not.eq(place)
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

  describe('#code', () => {
    let subject: TokenizeContext

    beforeEach(() => {
      subject = testSubject(initialize)
    })

    it('should equal `codes.bos` if at beginning of stream', () => {
      expect(subject.code).to.eq(codes.bos)
    })

    it('should equal `codes.break` if out of chunks but not done', () => {
      // Setup
      subject.write(codes.asterisk)

      // Act + Expect
      expect(subject.code).to.eq(codes.break)
    })

    it('should equal `codes.eos` if at end of stream', () => {
      // Setup
      subject.write([chars.digit1 + chars.digit3, codes.eos])

      // Act + Expect
      expect(subject.code).to.eq(codes.eos)
    })
  })

  describe('#effects.consume', () => {
    it.each<[keyof typeof codes]>([
      ['bos'],
      ['break'],
      ['empty'],
      ['eof'],
      ['eos'],
      ['sof'],
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

  describe('#sliceStream', () => {
    let chunks: Chunk[]

    beforeAll(() => {
      chunks = [
        '*a*',
        codes.lineFeed,
        '**b**',
        codes.lineFeed,
        '***c***',
        codes.lineFeed,
        '****d****',
        codes.lineFeed,
        codes.lineFeed,
        '**e*',
        codes.lineFeed,
        '*f**',
        codes.lineFeed,
        codes.lineFeed,
        '*g',
        codes.lineFeed,
        'h*',
        codes.lineFeed,
        codes.lineFeed,
        '**i',
        codes.lineFeed,
        'j**',
        codes.lineFeed,
        codes.lineFeed,
        '***k*',
        codes.lineFeed,
        codes.lineFeed,
        '****l*',
        codes.lineFeed,
        codes.lineFeed,
        '***m**',
        codes.lineFeed,
        codes.lineFeed,
        '****m**',
        codes.lineFeed,
        codes.eof
      ]
    })

    it('should return empty list without chunks', () => {
      // Arrange
      const subject: TokenizeContext = testSubject(initialize)
      const range: Position = { end: subject.now(), start: subject.now() }

      // Act + Expect
      expect(subject.sliceStream(range)).to.be.an('array').and.empty
    })

    it.each<[range: Position]>([
      [
        {
          end: { _bufferIndex: -1, _index: 0, column: 1, line: 1, offset: 0 },
          start: { _bufferIndex: -1, _index: 0, column: 1, line: 1, offset: 0 }
        }
      ],
      [
        {
          end: { _bufferIndex: 0, _index: 0, column: 1, line: 1, offset: 0 },
          start: { _bufferIndex: 0, _index: 0, column: 1, line: 1, offset: 0 }
        }
      ],
      [
        {
          end: { _bufferIndex: 3, _index: 2, column: 4, line: 2, offset: 7 },
          start: { _bufferIndex: 2, _index: 2, column: 3, line: 2, offset: 6 }
        }
      ],
      [
        {
          end: { _bufferIndex: -1, _index: 2, column: 1, line: 2, offset: 4 },
          start: { _bufferIndex: -1, _index: 1, column: 4, line: 1, offset: 3 }
        }
      ],
      [
        {
          end: { _bufferIndex: 9, _index: 6, column: 10, line: 4, offset: 27 },
          start: { _bufferIndex: 0, _index: 4, column: 1, line: 3, offset: 10 }
        }
      ],
      [
        {
          end: { _bufferIndex: -1, _index: 12, column: 5, line: 7, offset: 38 },
          start: { _bufferIndex: 0, _index: 9, column: 1, line: 6, offset: 29 }
        }
      ]
    ])('should return list of chunks spanning `range` (%#)', range => {
      // Arrange
      const subject: TokenizeContext = testSubject(initialize)

      // Setup
      subject.chunks = chunks

      // Act
      const result = subject.sliceStream(range)

      // Expect
      expect(result).to.be.an('array')
      expect(result).toMatchSnapshot()
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
