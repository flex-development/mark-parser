/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'

/**
 * The eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: [
      '__fixtures__/constructs/**/*.mts',
      'src/constructs/initialize.mts'
    ],
    rules: {
      'unicorn/no-this-assignment': 0
    }
  },
  {
    files: ['__fixtures__/markdown/*.md'],
    rules: {
      'mdx/remark': 0
    }
  },
  {
    files: ['src/interfaces/preprocessor.mts'],
    rules: {
      'jsdoc/valid-types': 0
    }
  }
]

export default config
