/**
 * @file Unit Tests - createDebugger
 * @module fsm-tokenizer/internal/tests/unit/createDebugger
 */

import testSubject from '#internal/create-debugger'
import pathe from '@flex-development/pathe'

describe('unit:internal/createDebugger', () => {
  it('should return custom debugger', () => {
    // Arrange
    const debug: string = pathe.basename(import.meta.url)

    // Act
    const result = testSubject({ debug })

    // Expect
    expect(result).to.have.property('namespace', debug)
  })

  it('should return default debugger', () => {
    expect(testSubject({})).to.have.property('namespace', 'fsm-tokenizer')
  })
})
