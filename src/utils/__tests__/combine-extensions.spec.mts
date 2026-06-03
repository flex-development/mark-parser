/**
 * @file Unit Tests - combineExtensions
 * @module fsm-tokenizer/utils/tests/unit/combineExtensions
 */

import codes from '#enums/codes'
import consumeThenFail from '#fixtures/constructs/consume-then-fail'
import consumeThenSucc from '#fixtures/constructs/consume-then-succ'
import eventsThenSucc from '#fixtures/constructs/events-then-succ'
import ct from '#fixtures/ct'
import tt from '#fixtures/tt'
import testSubject from '#utils/combine-extensions'
import type { Extension, List } from '@flex-development/fsm-tokenizer'

describe('unit:utils/combineExtensions', () => {
  type Combinable = Extension | List<Extension> | null | undefined

  it.each<[extension: Combinable, ...sources: Combinable[]]>([
    [null],
    [{}, undefined],
    [{ disable: { null: [] } }, { disable: null }],
    [{ disable: { null: [tt.eoc] } }, { disable: { null: [tt.fail] } }],
    [
      {
        [ct.document]: { [codes.lowercaseA]: consumeThenSucc }
      },
      {
        [ct.document]: { [codes.lowercaseA]: null }
      }
    ],
    [
      {
        [ct.document]: { [codes.lowercaseB]: eventsThenSucc }
      },
      {
        [ct.document]: { [codes.lowercaseB]: consumeThenSucc }
      }
    ],
    [
      {
        [ct.document]: { [codes.lowercaseC]: consumeThenSucc }
      },
      {
        [ct.document]: {
          [codes.lowercaseC]: [
            eventsThenSucc,
            Object.assign({}, consumeThenFail, { add: 'after' })
          ]
        }
      }
    ]
  ])('should return combined extension (%#)', (extension, ...sources) => {
    expect(testSubject(extension, ...sources)).toMatchSnapshot()
  })
})
