/**
 * @file Utilities - decode
 * @module fsm-tokenizer/utils/decode
 */

import chars from '#enums/chars'
import codes from '#enums/codes'
import isList from '#internal/is-list'
import isMutableArray from '#internal/is-mutable-array'
import type { List } from '@flex-development/fsm/core'
import type {
  Chunk,
  Code,
  Encoding,
  FileLike,
  Value
} from '@flex-development/fsm/parse'
import isCode from './is-code.mts'
import splice from './splice.mts'

export default decode

/**
 * Decode an empty chunk.
 *
 * @see {@linkcode codes.empty}
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {'' | typeof codes.empty} chunk
 *  The empty chunk
 * @return {typeof codes.empty}
 *  The decoded chunk
 */
function decode(this: void, chunk: '' | typeof codes.empty): typeof codes.empty

/**
 * Decode a code chunk.
 *
 * @see {@linkcode Code}
 *
 * @category
 *  utils
 *
 * @template {Code} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {T} chunk
 *  The chunk to decode
 * @return {T}
 *  The decoded chunk
 */
function decode<T extends Code>(this: void, chunk: T): T

/**
 * Decode a file or value.
 *
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode Value}
 *
 * @category
 *  utils
 *
 * @template {string | typeof codes.empty} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {FileLike | Value} chunk
 *  The file or value to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {T}
 *  The decoded chunk
 */
function decode<T extends string | typeof codes.empty>(
  this: void,
  chunk: FileLike | Value,
  encoding?: Encoding | null | undefined
): T

/**
 * Decode a chunk, file, or value.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode Value}
 *
 * @category
 *  utils
 *
 * @template {Chunk} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {Chunk | FileLike | Value} chunk
 *  The chunk, file, or value to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {T}
 *  The decoded chunk
 */
function decode<T extends Chunk>(
  this: void,
  chunk: Chunk | FileLike | Value,
  encoding?: Encoding | null | undefined
): T

/**
 * Decode a list of codes.
 *
 * @see {@linkcode Code}
 * @see {@linkcode List}
 *
 * @category
 *  utils
 *
 * @template {Code} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {List<T>} chunks
 *  The list to decode
 * @return {T[]}
 *  The list of decoded chunks
 */
function decode<T extends Code>(this: void, chunks: List<T>): T[]

/**
 * Decode a list of files or values.
 *
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 *
 * @category
 *  utils
 *
 * @template {string | typeof codes.empty} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {List<FileLike | Value>} chunks
 *  The list to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {T[]}
 *  The list of decoded chunks
 */
function decode<T extends string | typeof codes.empty>(
  this: void,
  chunks: List<FileLike | Value>,
  encoding?: Encoding | null | undefined
): T[]

/**
 * Decode a list of chunks, files, or values.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 *
 * @category
 *  utils
 *
 * @template {Chunk} T
 *  The decoded chunk
 *
 * @this {void}
 *
 * @param {List<Chunk | FileLike | Value>} chunks
 *  The list to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {T[]}
 *  The list of decoded chunks
 */
function decode<T extends Chunk>(
  this: void,
  chunks: List<Chunk | FileLike | Value>,
  encoding?: Encoding | null | undefined
): T[]

/**
 * Decode a chunk, file, value, or list.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {Chunk | FileLike | List<Chunk | FileLike | Value> | Value} value
 *  The chunk, file, value, or list to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {Chunk | Chunk[]}
 *  The chunk or list of chunks
 */
function decode(
  this: void,
  value: Chunk | FileLike | List<Chunk | FileLike | Value> | Value,
  encoding?: Encoding | null | undefined
): Chunk | Chunk[]

/**
 * @this {void}
 *
 * @param {Chunk | FileLike | List<Chunk | FileLike | Value> | Value} value
 *  The chunk, file, buffer, or list to decode
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when decoding a {@linkcode Uint8Array}
 * @return {Chunk | Chunk[]}
 *  The chunk or list of chunks
 */
function decode(
  this: void,
  value: Chunk | FileLike | List<Chunk | FileLike | Value> | Value,
  encoding?: Encoding | null | undefined
): Chunk | Chunk[] {
  if (isMutableArray<Chunk | FileLike | Value>(value)) {
    for (const [i, item] of value.entries()) splice(value, i, 1, [decode(item)])
    return value as Chunk[]
  }

  if (isCode(value)) return value
  if (isList<Chunk | FileLike | Value>(value)) return decode([...value])

  encoding ??= undefined

  if (typeof value === 'object' && 'value' in value) value = value.value
  if (typeof value !== 'string') value = new TextDecoder(encoding).decode(value)
  if (value === chars.empty) value = codes.empty

  return value
}
