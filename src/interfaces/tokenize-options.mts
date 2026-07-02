/**
 * @file Interfaces - TokenizeOptions
 * @module mark-parser/interfaces/TokenizeOptions
 */

import type {
  PreprocessOptions,
  Preprocessor
} from '@flex-development/mark-parser'
import type { Encoding } from '@flex-development/mark/parse'

/**
 * Options for tokenizing a value.
 *
 * @see {@linkcode PreprocessOptions}
 *
 * @extends {PreprocessOptions}
 */
interface TokenizeOptions extends PreprocessOptions {
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

  /**
   * The character encoding used when {@linkcode Uint8Array}s
   * are converted to chunks.
   *
   * @see {@linkcode Encoding}
   */
  encoding?: Encoding | null | undefined

  /**
   * Turn a code, file, or value into character code chunks.
   *
   * @see {@linkcode Preprocessor}
   */
  preprocess?: Preprocessor | null | undefined
}

export type { TokenizeOptions as default }
