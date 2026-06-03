/**
 * @file Interfaces - Construct
 * @module fsm-tokenizer/interfaces/Construct
 */

import type {
  ConstructPosition,
  Guard,
  Resolver,
  Tokenizer
} from '@flex-development/fsm-tokenizer'

/**
 * Object describing how to tokenize a syntax construct.
 */
interface Construct {
  /**
   * Whether the construct, when in a `ConstructRecord`, precedes over existing
   * constructs for the same character code when merged.
   *
   * @see {@linkcode ConstructPosition}
   */
  add?: ConstructPosition | null | undefined

  /**
   * Whether the construct is concrete.
   *
   * Concrete constructs cannot be interrupted by other constructs.
   *
   * For example, when parsing a markdown document (containers, such as block
   * quotes and lists) and this construct is parsing fenced code:
   *
   * ````markdown
   * > ```js
   * > - list?
   * ````
   *
   * …then `- list?` cannot form if this fenced code construct is concrete.
   *
   * An example of a construct that is not concrete is a GFM table:
   *
   * ````markdown
   * | a |
   * | - |
   * > | b |
   * ````
   *
   * ...`b` is not part of the table.
   */
  concrete?: boolean | null | undefined

  /**
   * The name of the construct, used to toggle constructs off.
   */
  name?: string | null | undefined

  /**
   * Whether the construct represents a partial construct.
   */
  partial?: boolean | null | undefined

  /**
   * Check if the previous character code can precede this construct.
   *
   * @see {@linkcode Guard}
   */
  previous?: Guard | null | undefined

  /**
   * Resolve the events parsed by {@linkcode tokenize}.
   *
   * @see {@linkcode Resolver}
   */
  resolve?: Resolver | null | undefined

  /**
   * Resolve all events when the content is complete, from the start to the end.
   *
   * > 👉 **Note**: Only called if {@linkcode tokenize} is successful at least
   * > once in the content.
   *
   * @see {@linkcode Resolver}
   */
  resolveAll?: Resolver | null | undefined

  /**
   * Resolve the events parsed from the start of the content (which may include
   * other constructs) to the last one parsed by {@linkcode tokenize}.
   *
   * @see {@linkcode Resolver}
   */
  resolveTo?: Resolver | null | undefined

  /**
   * Set up a state machine to handle character codes streaming in.
   *
   * @see {@linkcode Tokenizer}
   */
  tokenize: Tokenizer
}

export type { Construct as default }
