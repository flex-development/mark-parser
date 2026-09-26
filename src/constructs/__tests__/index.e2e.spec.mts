/**
 * @file E2E Tests - constructs
 * @module mark-parser/constructs/tests/e2e/api
 */

import * as testSubject from '#constructs/index'
import { describe, expect, it } from 'vitest'

describe('e2e:constructs', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
