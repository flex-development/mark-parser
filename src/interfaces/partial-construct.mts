/**
 * @file Type Aliases - PartialConstruct
 * @module fsm-tokenizer/interfaces/PartialConstruct
 */

import type { Construct } from '@flex-development/fsm-tokenizer'

/**
 * A partial construct.
 *
 * @see {@linkcode Construct}
 *
 * @extends {Construct}
 */
interface PartialConstruct extends Construct {
  /**
   * Whether the construct represents a partial construct.
   *
   * @override
   */
  partial: true
}

export type { PartialConstruct as default }
