/**
 * @file Unit Tests - createTokenFactory
 * @module mark-parser/internal/tests/unit/createTokenFactory
 */

import tt from '#fixtures/tt'
import testSubject from '#internal/create-token-factory'
import type { TokenInfo } from '@flex-development/mark/parse'
import { u } from '@flex-development/unist-util-builder'

describe('unit:internal/createTokenFactory', () => {
  it('should return custom token factory', () => {
    // Act
    const result = testSubject({ token: u })

    // Expect
    expect(result).to.be.a('function').with.property('name', u.name)
  })

  it('should return default token factory', () => {
    expect(testSubject({})).to.be.a('function').with.property('name', 'token')
  })

  describe('token', () => {
    let info: TokenInfo

    beforeAll(() => {
      info = {
        end: { _bufferIndex: -1, _index: 6, column: 10, line: 1, offset: 9 },
        start: { _bufferIndex: -1, _index: 5, column: 10, line: 1, offset: 9 }
      }
    })

    it('should return new token', () => {
      expect(testSubject({})(tt.eoc, info)).toMatchSnapshot()
    })
  })
})
