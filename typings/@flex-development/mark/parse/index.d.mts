import type {
  ApplySkip,
  Chunk,
  Code,
  Column,
  Construct,
  ConstructRecord,
  ContentType,
  Effects,
  Line,
  Place,
  Token
} from '@flex-development/mark/parse'
import type { Debugger } from 'debug'
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
     * Move {@linkcode place} a bit forward.
     *
     * @see {@linkcode ApplySkip}
     *
     * @internal
     */
    applySkip: ApplySkip

    /**
     * The list of chunks.
     *
     * @see {@linkcode Chunk}
     *
     * @internal
     */
    chunks: Chunk[]

    /**
     * The debug logger.
     *
     * @see {@linkcode Debugger}
     *
     * @internal
     * @readonly
     */
    readonly debug: Debugger

    /**
     * The context object to transition the state machine.
     *
     * @see {@linkcode Effects}
     *
     * @internal
     * @readonly
     */
    readonly effects: Effects

    /**
     * The current place in the content.
     *
     * @see {@linkcode Place}
     *
     * @internal
     * @readonly
     */
    readonly place: Place

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
