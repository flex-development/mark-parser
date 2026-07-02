/**
 * @file Interfaces - PreprocessOptions
 * @module mark-parser/interfaces/PreprocessOptions
 */

/**
 * Options for configuring a preprocessor.
 */
interface PreprocessOptions {
  /**
   * Whether to preserve decoded empty string chunks.
   */
  allowEmptyChunk?: boolean | null | undefined

  /**
   * Whether to ignore byte order marks (BOMs).
   */
  ignoreBOM?: boolean | null | undefined

  /**
   * Whether the `nul` character should be kept
   * or substituted with the replacement character.
   *
   * If `true`, `nul` will not be replaced.\
   * If `false`, `null`, or `undefined`, `nul` will be replaced.
   */
  nul?: boolean | null | undefined

  /**
   * The number of columns represented by a horizontal tab.
   *
   * @default constants.tabSize
   */
  tabSize?: number | null | undefined
}

export type { PreprocessOptions as default }
