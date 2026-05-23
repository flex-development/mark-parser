/**
 * @file Interfaces - PreprocessOptions
 * @module fsm-tokenizer/interfaces/PreprocessOptions
 */

/**
 * Options for configuring a preprocessor.
 */
interface PreprocessOptions {
  /**
   * The number of spaces a tab is equivalent to.
   *
   * @default constants.tabSize
   */
  tabSize?: number | null | undefined
}

export type { PreprocessOptions as default }
