/**
 * @file Interfaces - TokenizeOptions
 * @module fsm-tokenizer/interfaces/TokenizeOptions
 */

import type { Options } from '@flex-development/fsm-tokenizer'

/**
 * Options for tokenizing a value.
 *
 * @see {@linkcode Options}
 *
 * @extends {Options}
 */
interface TokenizeOptions extends Options {
  /**
   * Whether to write the stream break code in between chunks.
   *
   * > 👉 **Note**: Only applicable when tokenizing a list.
   */
  breaks?: boolean | null | undefined
}

export type { TokenizeOptions as default }
