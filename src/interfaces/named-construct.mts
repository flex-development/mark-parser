/**
 * @file Type Aliases - NamedConstruct
 * @module fsm-tokenizer/interfaces/NamedConstruct
 */

import type { Construct } from '@flex-development/fsm-tokenizer'

/**
 * A construct with a name.
 *
 * @see {@linkcode Construct}
 *
 * @extends {Construct}
 */
interface NamedConstruct extends Construct {
  /**
   * The name of the construct.
   *
   * @override
   */
  name: string
}

export type { NamedConstruct as default }
