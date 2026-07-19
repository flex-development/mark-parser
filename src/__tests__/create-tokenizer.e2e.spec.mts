/**
 * @file E2E Tests - createTokenizer
 * @module mark-parser/tests/e2e/createTokenizer
 */

import testSubject from '#create-tokenizer'
import content from '#fixtures/constructs/initialize/content'
import document from '#fixtures/constructs/initialize/document'
import flow from '#fixtures/constructs/initialize/flow'
import { string, text } from '#fixtures/constructs/initialize/text'
import ct from '#fixtures/ct'
import md from '#fixtures/extensions/markdown'
import markdown from '#tests/utils/markdown'
import type { FinalizeContext, Options } from '@flex-development/mark-parser'
import type {
  Chunk,
  Extension,
  FileLike,
  InitialConstruct,
  InitialConstructs,
  NormalizedExtension,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok } from 'devlop'
import { preprocess } from 'micromark'
import { markdownLineEnding } from 'micromark-util-character'
import { readSync as read } from 'to-vfile'
import { decode } from '../utils/index.mts'

describe('e2e:createTokenizer', () => {
  describe('markdown', () => {
    let extensions: Extension[]
    let finalizeContext: FinalizeContext
    let initialize: InitialConstructs

    beforeAll(() => {
      extensions = [md as NormalizedExtension]

      initialize = {
        [ct.document]: document,
        [ct.flow]: flow,
        [ct.content]: content,
        [ct.string]: string,
        [ct.text]: text
      }

      /**
       * @this {void}
       *
       * @param {TokenizeContext} self
       *  The base tokenization context
       * @param {InitialConstruct | Partial<InitialConstructs>} initialize
       *  The initial construct, or the record of initial constructs
       * @param {Partial<Options>} options
       *  The options used to create the tokenizer
       * @return {undefined}
       */
      finalizeContext = function finalizeContext(
        this: void,
        self: TokenizeContext,
        initialize: InitialConstruct | Partial<InitialConstructs>,
        options: Partial<Options>
      ): undefined {
        if (typeof self.parser.defined === 'undefined') self.parser.defined = []
        if (typeof self.parser.lazy === 'undefined') self.parser.lazy = {}

        if (self.contentType) {
          expect(initialize).to.have.property('tokenize').be.a('function')
          expect(options).to.have.property('initialize').not.eq(initialize)

          if (self.contentType === ct.string || self.contentType === ct.text) {
            self.noEmptyTokens = true
            self.noPrevious = true
          }
        } else {
          expect(options).to.have.property('initialize', initialize)
        }

        return void void self
      }
    })

    it.each<[path: string, options?: Partial<Options>]>([
      ['attention.md'],
      ['autolink.md'],
      ['blockquote.md'],
      ['character-escape.md'],
      ['character-reference.md'],
      ['character-references-everywhere.md'],
      ['code-fenced.md'],
      ['code-indented.md'],
      ['code-text.md'],
      ['definition.md'],
      ['hard-break-escape.md'],
      ['hard-break-prefix.md'],
      ['heading-atx.md'],
      ['heading-setext.md'],
      ['html-flow.md'],
      ['html-text.md'],
      ['image-reference.md'],
      ['image-resource-eol.md'],
      ['image-resource.md'],
      ['link-reference-with-phrasing.md'],
      ['link-reference.md'],
      ['link-resource-eol.md'],
      ['link-resource.md'],
      ['list.md'],
      ['paragraph.md'],
      ['thematic-break.md']
    ])('should parse markdown (%j)', (path, options = {}) => {
      options.eol = markdownLineEnding
      options.extensions = extensions
      options.finalizeContext = finalizeContext

      // Arrange
      const file: FileLike = read('__fixtures__/markdown/' + path, 'utf8')
      const value: string = decode(file)
      const slice: Chunk[] = preprocess()(value, null, true)
      const subject: TokenizeContext = testSubject(initialize, options)
      let index: number = -1

      // Setup
      const baseline = markdown(value)

      // Act
      const result = subject.parser.document().write(slice)

      // Expect
      expect(result).to.have.property('length', baseline.length)

      // Expect (conditional)
      if (result.length) {
        expect(result).to.each.have.nested.property('1.start')
        expect(result).to.each.have.nested.property('1.end')
      }

      // Expect (event v. event)
      while (++index < result.length) {
        ok(result[index], 'expected `result[index]`')
        ok(baseline[index], 'expected `baseline[index]`')

        const [bEvent, bToken, bSelf] = baseline[index]!
        const [event, token, self] = result[index]!

        expect(event).to.eq(bEvent)
        expect(token.type).to.eq(bToken.type)
        expect(token.start).to.eql(bToken.start)
        expect(token.end).to.eql(bToken.end)

        if (!bToken._container) {
          expect(self.sliceSerialize(token)).to.eq(bSelf.sliceSerialize(bToken))
        }
      }
    })
  })
})
