/**
 * @file Unit Tests - defineConstruct
 * @module mark-parser/utils/tests/unit/defineConstruct
 */

import testSubject from '#utils/define-construct'
import { codeFenced } from 'micromark-core-commonmark'

describe('unit:utils/defineConstruct', () => {
  it('should return `construct`', () => {
    expect(testSubject(codeFenced)).to.eq(codeFenced)
  })
})
