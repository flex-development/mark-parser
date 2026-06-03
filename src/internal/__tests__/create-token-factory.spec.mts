/**
 * @file Unit Tests - createTokenFactory
 * @module fsm-tokenizer/internal/tests/unit/createTokenFactory
 */

import testSubject from '#internal/create-token-factory'
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
})
