/**
 * @file Interfaces - TokenizeOptions
 * @module fsm-tokenizer/interfaces/TokenizeOptions
 */

/**
 * Options for tokenizing a value.
 */
interface TokenizeOptions {
  /**
   * Whether to write the stream break code in between chunks.
   *
   * > 👉 **Note**: Only applicable when tokenizing a list.
   */
  breaks?: boolean | null | undefined

  /**
   * A regular expression used to create chunks.
   */
  chunker?: RegExp | null | undefined
}

export type { TokenizeOptions as default }
