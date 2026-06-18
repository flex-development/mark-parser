/**
 * @file E2E Tests - api
 * @module mark-parser/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-parser'

describe('e2e:mark-parser', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
