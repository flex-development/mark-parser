/**
 * @file Fixtures - markdown
 * @module fixtures/extensions/markdown
 */

import { string } from '#fixtures/constructs/initialize/text'
import {
  attention,
  autolink,
  blockQuote,
  characterEscape,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
  definition,
  hardBreakEscape,
  headingAtx,
  htmlFlow,
  htmlText,
  labelEnd,
  labelStartImage,
  labelStartLink,
  lineEnding,
  list,
  setextUnderline,
  thematicBreak
} from 'micromark-core-commonmark'
import { codes, constants } from 'micromark-util-symbol'
import type { NormalizedExtension, Resolver } from 'micromark-util-types'

/**
 * The markdown syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} markdown
 */
const markdown: NormalizedExtension = {
  [constants.contentTypeDocument]: {
    [codes.asterisk]: list,
    [codes.plusSign]: list,
    [codes.dash]: list,
    [codes.digit0]: list,
    [codes.digit1]: list,
    [codes.digit2]: list,
    [codes.digit3]: list,
    [codes.digit4]: list,
    [codes.digit5]: list,
    [codes.digit6]: list,
    [codes.digit7]: list,
    [codes.digit8]: list,
    [codes.digit9]: list,
    [codes.greaterThan]: blockQuote
  },
  [constants.contentTypeFlow]: {
    [codes.numberSign]: headingAtx,
    [codes.asterisk]: thematicBreak,
    [codes.dash]: [setextUnderline, thematicBreak],
    [codes.lessThan]: htmlFlow,
    [codes.equalsTo]: setextUnderline,
    [codes.underscore]: thematicBreak,
    [codes.graveAccent]: codeFenced,
    [codes.tilde]: codeFenced
  },
  [constants.contentTypeString]: {
    [codes.ampersand]: characterReference,
    [codes.backslash]: characterEscape
  },
  [constants.contentTypeText]: {
    [codes.carriageReturn]: lineEnding,
    [codes.lineFeed]: lineEnding,
    [codes.carriageReturnLineFeed]: lineEnding,
    [codes.exclamationMark]: labelStartImage,
    [codes.ampersand]: characterReference,
    [codes.asterisk]: attention,
    [codes.lessThan]: [autolink, htmlText],
    [codes.leftSquareBracket]: labelStartLink,
    [codes.backslash]: [hardBreakEscape, characterEscape],
    [codes.rightSquareBracket]: labelEnd,
    [codes.underscore]: attention,
    [codes.graveAccent]: codeText
  },
  attentionMarkers: {
    null: [codes.asterisk, codes.underscore]
  },
  contentInitial: {
    [codes.leftSquareBracket]: definition
  },
  flowInitial: {
    [codes.horizontalTab]: codeIndented,
    [codes.virtualSpace]: codeIndented,
    [codes.space]: codeIndented
  },
  insideSpan: {
    null: [
      attention,
      { resolveAll: string.resolveAll as unknown as Resolver }
    ]
  }
}

export default markdown
