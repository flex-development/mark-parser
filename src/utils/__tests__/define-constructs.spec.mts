/**
 * @file Unit Tests - defineConstructs
 * @module mark-parser/utils/tests/unit/defineConstructs
 */

import codes from '#enums/codes'
import testSubject from '#utils/define-constructs'
import { codeFenced, codeIndented, codeText } from 'micromark-core-commonmark'

describe('unit:utils/defineConstructs', () => {
  it('should return `constructs`', () => {
    // Arrange
    const constructs: Record<string, any> = {
      [codes.vht]: codeIndented,
      [codes.vs]: codeIndented,
      [codes.space]: codeIndented,
      [codes.graveAccent]: [codeFenced, codeText],
      [codes.tilde]: codeFenced
    }

    // Act + Expect
    expect(testSubject(constructs)).to.eq(constructs)
  })
})
