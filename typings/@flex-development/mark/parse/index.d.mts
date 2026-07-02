import type {
  Chunk,
  Code,
  Column,
  Construct,
  ConstructRecord,
  ContentType,
  Effects,
  Line,
  Token
} from '@flex-development/mark/parse'
import type * as micromark from 'micromark-util-types'

declare module '@flex-development/mark/parse' {
  type AttentionMarkers = {
    null?: Code[] | null | undefined
  }

  interface ContainerState extends micromark.ContainerState {}

  interface ContentTypeMap {
    content: 'content'
    document: 'document'
    flow: 'flow'
    string: 'string'
    text: 'text'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface Extension {
    attentionMarkers?: AttentionMarkers | null | undefined
    contentInitial?: ConstructRecord | null | undefined
    flowInitial?: ConstructRecord | null | undefined
    insideSpan?: InsideSpan | null | undefined
  }

  type InsideSpan = {
    null?: Pick<Construct, 'resolveAll'>[] | null | undefined
  }

  interface ParseContext {
    defined: string[]
    lazy: Record<Line, boolean>
  }

  interface TokenFields {
    _balanced?: boolean | undefined
    _close?: boolean | undefined
    _container?: boolean | undefined
    _contentTypeTextTrailing?: boolean | undefined
    _inactive?: boolean | undefined
    _isInFirstContentOfListItem?: boolean | undefined
    _loose?: boolean | undefined
    _open?: boolean | undefined
    _tokenizer?: TokenizeContext | undefined
    contentType?: ContentType | undefined
    next?: Token | undefined
    previous?: Token | undefined
    value?: string | null | undefined
  }

  interface TokenizeContext {
    _gfmTableDynamicInterruptHack?: boolean

    /**
     * The list of chunks.
     *
     * @see {@linkcode Chunk}
     *
     * @internal
     */
    chunks: Chunk[]

    /**
     * The context object to transition the state machine.
     *
     * @see {@linkcode Effects}
     *
     * @internal
     */
    readonly effects: Effects

    /**
     * Record, where each key is a line number and each value a column to be
     * skipped to when the tokenizer has reached that line.
     *
     * @see {@linkcode Column}
     * @see {@linkcode Line}
     *
     * @internal
     */
    readonly skips: Record<Line, Column>

    /**
     * Get the string value of a slice of chunks.
     *
     * @see {@linkcode SerializeChunks}
     *
     * @internal
     */
    readonly serializeChunks: SerializeChunks
  }

  interface TokenTypeMap extends micromark.TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
