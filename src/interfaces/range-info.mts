/**
 * @file Interfaces - RangeInfo
 * @module fsm-tokenizer/interfaces/RangeInfo
 */

/**
 * Stream position metadata.
 */
interface RangeInfo {
  /**
   * The position in a string chunk (or `-1` when pointing to a numeric chunk).
   */
  _bufferIndex: number

  /**
   * The position in a list of chunks.
   */
  _index: number
}

export type { RangeInfo as default }
