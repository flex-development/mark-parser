/**
 * @file Interfaces - Options
 * @module fsm-tokenizer/interfaces/Options
 */

import type {
  CodeCheck,
  CreateInitialConstruct,
  Encoding,
  FinalizeContext,
  InitialConstruct,
  List,
  Preprocess,
  PreprocessOptions,
  TokenFactory
} from '@flex-development/fsm-tokenizer'
import type { u } from '@flex-development/unist-util-builder'
import type { Point } from '@flex-development/vfile-location'

/**
 * Configuration options.
 *
 * @see {@linkcode PreprocessOptions}
 *
 * @extends {PreprocessOptions}
 */
interface Options extends PreprocessOptions {
  /**
   * The name of the debug logger.
   *
   * @default 'fsm-tokenizer'
   */
  debug?: string | null | undefined

  /**
   * The list of disabled construct names.
   *
   * @see {@linkcode List}
   */
  disabled?: List<string> | null | undefined

  /**
   * Check if a character code represents a line ending.
   *
   * @see {@linkcode CodeCheck}
   */
  eol?: CodeCheck | null | undefined

  /**
   * The character encoding to use when converting a {@linkcode Uint8Array} to
   * character code chunks.
   *
   * @see {@linkcode Encoding}
   */
  encoding?: Encoding | null | undefined

  /**
   * Finalize the tokenization context.
   *
   * @see {@linkcode FinalizeContext}
   */
  finalizeContext?: FinalizeContext | null | undefined

  /**
   * The point before first character.
   *
   * @see {@linkcode Point}
   *
   * @default { column: 1, line: 1, offset: 0 }
   */
  from?: Point | null | undefined

  /**
   * The initial construct, or a function that returns an initial construct.
   *
   * @see {@linkcode CreateInitialConstruct}
   * @see {@linkcode InitialConstruct}
   */
  initialize: CreateInitialConstruct | InitialConstruct

  /**
   * Whether to move the position of the tokenizer forward at stream breaks.
   */
  moveOnBreak?: boolean | null | undefined

  /**
   * Turn a value into character code chunks.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Create a new token.
   *
   * @see {@linkcode TokenFactory}
   * @see {@linkcode u}
   *
   * @default u
   */
  token?: TokenFactory | null | undefined
}

export type { Options as default }
