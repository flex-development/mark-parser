/**
 * @file Interfaces - TokenizeContext
 * @module fsm-tokenizer/interfaces/TokenizeContext
 */

import type {
  Code,
  Construct,
  DefineSkip,
  Encoding,
  Event,
  Now,
  ParseContext,
  Peek,
  Preprocess,
  SerializeChunks,
  SliceSerialize,
  SliceStream,
  TokenFactory,
  Write
} from '@flex-development/fsm-tokenizer'

/**
 * Context object to assist with tokenization.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm-tokenizer' {
 *    interface TokenizeContext {
 *      globstar?: boolean | null | undefined
 *    }
 *  }
 */
interface TokenizeContext {
  /**
   * The current character code.
   *
   * @see {@linkcode Code}
   */
  code: Code

  /**
   * The current construct.
   *
   * Constructs that are not `partial` are set here.
   *
   * @see {@linkcode Construct}
   */
  currentConstruct?: Construct | null | undefined

  /**
   * Define a skip.
   *
   * @see {@linkcode DefineSkip}
   */
  defineSkip: DefineSkip

  /**
   * The character encoding used when {@linkcode Uint8Array}s
   * are converted to chunks.
   *
   * @see {@linkcode Encoding}
   */
  encoding?: Encoding | null | undefined

  /**
   * The current list of events.
   *
   * @see {@linkcode Event}
   */
  events: Event[]

  /**
   * Whether a construct is interrupting another construct.
   */
  interrupt?: boolean | null | undefined

  /**
   * Get the current point in the file.
   *
   * @see {@linkcode Now}
   */
  now: Now

  /**
   * The relevant parsing context.
   *
   * Tokenizers typically deal with one content type.
   * The parser is the object dealing with it all.
   *
   * @see {@linkcode ParseContext}
   */
  parser: ParseContext

  /**
   * Get the next character code without changing position without changing the
   * position of the tokenizer.
   *
   * @see {@linkcode Peek}
   */
  peek: Peek

  /**
   * Turn a code, file, or value into character code chunks.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess: Preprocess

  /**
   * The previous character code.
   *
   * @see {@linkcode Code}
   */
  previous: Code

  /**
   * Get the string value of a slice of chunks.
   *
   * @see {@linkcode SerializeChunks}
   */
  serializeChunks: SerializeChunks

  /**
   * Get the text spanning the specified range.
   *
   * @see {@linkcode SliceSerialize}
   */
  sliceSerialize: SliceSerialize

  /**
   * Get the chunks spanning the specified range.
   *
   * @see {@linkcode SliceStream}
   */
  sliceStream: SliceStream

  /**
   * The token factory.
   *
   * @see {@linkcode TokenFactory}
   */
  token: TokenFactory

  /**
   * Write a slice of chunks.
   *
   * The eof code (`null`) can be used to signal the end of the stream.
   *
   * @see {@linkcode Write}
   */
  write: Write
}

export type { TokenizeContext as default }
