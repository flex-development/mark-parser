/**
 * @file Interfaces - Options
 * @module mark-parser/interfaces/Options
 */

import type {
  CodeCheck,
  CreateExtensions,
  FinalizeContext,
  Initialize,
  PreprocessOptions
} from '@flex-development/mark-parser'
import type { List } from '@flex-development/mark/core'
import type {
  CreateToken,
  Encoding,
  Extensions,
  ParseContext,
  Point,
  Preprocess
} from '@flex-development/mark/parse'
import type { u } from '@flex-development/unist-util-builder'

/**
 * Options for configuring a tokenizer.
 *
 * @see {@linkcode PreprocessOptions}
 *
 * @extends {PreprocessOptions}
 */
interface Options extends PreprocessOptions {
  /**
   * The name of the debug logger.
   *
   * @default 'mark-parser'
   */
  debug?: string | null | undefined

  /**
   * The list of disabled construct names.
   *
   * > 👉 **Note**: This is a shortcut for `Extension.disable.null` when using
   * > content types.
   *
   * @see {@linkcode List}
   */
  disable?: List<string> | null | undefined

  /**
   * Check if a character code represents a line ending.
   *
   * @see {@linkcode CodeCheck}
   */
  eol?: CodeCheck | null | undefined

  /**
   * The character encoding to use when decoding a {@linkcode Uint8Array}.
   *
   * @see {@linkcode Encoding}
   */
  encoding?: Encoding | null | undefined

  /**
   * A syntax extension, a list of syntax extensions, or a factory function.
   *
   * @see {@linkcode CreateExtensions}
   * @see {@linkcode Extensions}
   */
  extensions?: CreateExtensions | Extensions | null | undefined

  /**
   * Finalize the tokenization context.
   *
   * @see {@linkcode FinalizeContext}
   */
  finalizeContext?: FinalizeContext | null | undefined

  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   *
   * @default
   *  { column: 1, line: 1, offset: 0 }
   */
  from?: Point | null | undefined

  /**
   * The initial construct, a record of initial constructs,
   * or a function that returns the initial construct or record.
   *
   * @see {@linkcode Initialize}
   */
  initialize: Initialize

  /**
   * Whether to move the position of the tokenizer forward at stream breaks.
   */
  moveOnBreak?: boolean | null | undefined

  /**
   * The relevant parsing context.
   *
   * @see {@linkcode ParseContext}
   */
  parser?: ParseContext | null | undefined

  /**
   * Turn a code, file, or value into character code chunks.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Create a new token.
   *
   * @see {@linkcode CreateToken}
   * @see {@linkcode u}
   *
   * @default u
   */
  token?: CreateToken | null | undefined
}

export type { Options as default }
