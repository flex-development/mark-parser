/**
 * @file Unit Tests - merge
 * @module mark-parser/internal/tests/unit/merge
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../merge.mts'

describe('unit:internal/merge', () => {
  it.each<Parameters<typeof testSubject>>([
    [{}, null, { null: [] }],
    [{ indented: true }, { indented: undefined }],
    [
      {
        settings: {
          jsdoc: {
            structuredTags: {
              next: {
                required: ['type']
              },
              rejects: {
                required: ['type']
              },
              see: {
                name: 'namepath-referencing',
                required: ['name']
              }
            }
          }
        }
      },
      {
        settings: {
          jsdoc: {
            structuredTags: {
              category: {
                name: 'namepath-referencing',
                required: ['name'],
                type: false
              },
              const: {
                name: 'namepath-defining',
                required: ['name']
              },
              enum: {
                name: 'namepath-defining',
                required: ['name', 'type']
              },
              experimental: {
                name: false,
                type: false
              },
              extends: {
                name: 'namepath-defining',
                required: ['type']
              },
              implements: {
                name: 'namepath-defining',
                required: ['type']
              },
              member: {
                name: 'namepath-defining',
                required: ['name', 'type']
              },
              next: {
                name: 'namepath-defining',
                required: ['type']
              },
              packageManager: {
                name: 'text',
                required: ['name']
              },
              param: {
                name: 'namepath-defining',
                required: ['name', 'type']
              },
              return: {
                name: 'namepath-defining',
                required: ['type']
              },
              throws: {
                name: 'namepath-defining',
                required: ['type']
              },
              type: {
                name: 'namepath-defining',
                required: ['type']
              },
              var: {
                name: 'namepath-defining',
                required: ['name']
              },
              yield: {
                name: 'namepath-defining',
                required: ['type']
              }
            }
          }
        }
      }
    ]
  ])('should return merged and mutated object (%#)', (target, ...sources) => {
    // Act
    const result = testSubject(target, ...sources)

    // Expect
    expect(result).to.eq(target)
    expect(result).toMatchSnapshot()
  })

  it.each<Parameters<typeof testSubject>>([
    [null, {}]
  ])('should return new merged object (%#)', (target, ...sources) => {
    // Act
    const result = testSubject(target, ...sources)

    // Expect
    expect(result).not.to.eq(target).and.not.to.eql(target)
    expect(result).toMatchSnapshot()
  })
})
