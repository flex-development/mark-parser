/**
 * @file Fixtures - document
 * @module fixtures/initialize/document
 * @see https://github.com/micromark/micromark/blob/4.0.2/packages/micromark/dev/lib/initialize/document.js
 */

import factorySpace from '#tests/utils/factory-space'
import splice from '#utils/splice'
import { codes, ev } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  Code,
  Construct,
  ContainerState,
  Effects,
  Event,
  InitialConstruct,
  Place,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import { postprocess } from 'micromark'
import { markdownLineEnding } from 'micromark-util-character'
import { constants, types as tt } from 'micromark-util-symbol'

/**
 * The markdown document construct.
 *
 * @const {InitialConstruct} document
 */
const document: InitialConstruct = {
  resolveAll: resolveAllDocument,
  tokenize: tokenizeDocument
}

/**
 * The container construct.
 *
 * @const {Construct} container
 */
const container: Construct = { tokenize: tokenizeContainer }

export default document

/**
 * Resolve all events when the content is complete, from the start to the end.
 *
 * > 👉 **Note**: Only called if {@linkcode tokenizeDocument} is successful at
 * > least once in the content.
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @return {Event[]}
 *  The list of changed events
 */
function resolveAllDocument(this: void, events: Event[]): Event[] {
  // @ts-expect-error micromark-shaped events (2345).
  return postprocess(events)
}

/**
 * Tokenize a markdown document.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizeDocument(this: TokenizeContext, effects: Effects): State {
  /**
   * List, where the first value is a continuable construct,
   * and the second value is the current container state.
   */
  type StackItem = [construct: Construct, state: ContainerState]

  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The container stack.
   *
   * @const {StackItem[]} stack
   */
  const stack: StackItem[] = []

  /**
   * The flow tokenization context.
   *
   * @var {TokenizeContext | undefined} childFlow
   */
  let childFlow: TokenizeContext | undefined

  /**
   * The current child token.
   *
   * @var {Token | undefined} childToken
   */
  let childToken: Token | undefined

  /**
   * The index of the current stack item.
   *
   * @var {number} continued
   */
  let continued: number = 0

  /**
   * The position of where the current line starts.
   *
   * @var {number} lineStartOffset
   */
  let lineStartOffset: number

  return start

  /**
   * At the beginning of a container.
   *
   * Here we iterate through open blocks, starting with the root document, and
   * descending through last children down to the last open block.
   *
   * Each block imposes a condition that the line must satisfy if the block is
   * to remain open (e.g. a block quote requires a `>` character, a paragraph
   * requires a non-blank line).
   *
   * In this phase, all, or just some, open blocks are matched. Unmatched blocks
   * cannot be closed yet because there may be a lazy continuation line.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function start(this: void, code: Code): State | undefined {
    if (continued < stack.length) {
      const [construct, containerState] = stack[continued]!

      assert(
        construct.continuation,
        'expected `continuation` on container construct'
      )

      self.containerState = containerState

      return effects.attempt(
        construct.continuation,
        documentContinue,
        checkNewContainers
      )(code)
    }

    return checkNewContainers(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function documentContinue(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` after continuation')

    continued++

    // close container or current flow.
    // note: the algorithm for moving events is similar to the algorithm for
    // dealing with lazy lines in `writeToChild`.

    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined
      childFlow && closeFlow()

      /**
       * Where to slice the event list after mutations.
       *
       * @const {number} indexBeforeExits
       */
      const indexBeforeExits: number = self.events.length

      /**
       * The index of the flow chunk exit event.
       *
       * @var {number} flowExitIndex
       */
      let flowExitIndex: number = indexBeforeExits

      /**
       * The place of the previous flow chunk.
       *
       * @var {Place | undefined} point
       */
      let point: Place | undefined = undefined

      // find previous flow chunk.
      while (flowExitIndex--) {
        assert(self.events[flowExitIndex], 'expected `events[flowExitIndex]`')
        const [event, token] = self.events[flowExitIndex]!

        if (event === ev.exit && token.type === tt.chunkFlow) {
          point = token.end
          break
        }
      }

      assert(point, 'could not find previous flow chunk')
      exitContainers(continued)

      /**
       * The index of the current event.
       *
       * @var {number} index
       */
      let index: number = indexBeforeExits

      // fix end positions.
      while (index < self.events.length) {
        self.events[index]![1].end = { ...point }
        index++
      }

      // inject exits earlier (they’re still also at the end).
      splice(
        self.events,
        flowExitIndex + 1,
        0,
        self.events.slice(indexBeforeExits)
      )

      // discard duplicate exits.
      self.events.length = index

      return checkNewContainers(code)
    }

    return start(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function checkNewContainers(this: void, code: Code): State | undefined {
    /*
     * Next, after consuming the continuation markers for existing blocks, we
     * look for new block starts (e.g. `>` for a block quote).
     *
     * If a new block start is encountered, we close any blocks unmatched in
     * step 1 before creating the new block as a child of the last matched
     * block.
     */
    if (continued === stack.length) {
      if (!childFlow) return documentContinued(code)

      /*
       * If we have concrete content, such as block HTML or fenced code, we
       * can't have containers "pierce" into them, so we can immediately start.
       */
      if (childFlow.currentConstruct?.concrete) return flowStart(code)

      /*
       * If we do have flow, it could still be a blank line, but we'd still be
       * interrupting with a new container if there’s a current construct.
       */
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      )
    }

    // check if there is a new container.
    self.containerState = {}

    return effects.check(
      container,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function thereIsANewContainer(this: void, code: Code): State | undefined {
    if (childFlow) closeFlow()
    exitContainers(continued)
    return documentContinued(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function thereIsNoNewContainer(this: void, code: Code): State | undefined {
    self.parser.lazy[self.now().line] = continued !== stack.length
    lineStartOffset = self.now().offset
    return flowStart(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function documentContinued(this: void, code: Code): State | undefined {
    self.containerState = {}
    return effects.attempt(container, containerContinue, flowStart)(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function containerContinue(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState`')
    assert(self.currentConstruct, 'expected `currentConstruct`')
    assert(self.currentConstruct.continuation, 'expected container construct')

    continued++
    stack.push([self.currentConstruct, self.containerState] as StackItem)

    return documentContinued(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function flowStart(this: void, code: Code): State | undefined {
    if (code === codes.eos) {
      childFlow && closeFlow()
      exitContainers(0)
      return void effects.consume(code)
    }

    // initialize flow tokenizer.
    childFlow ??= self.parser.flow(self.now())

    // enter new flow chunk.
    effects.enter(tt.chunkFlow, {
      _tokenizer: childFlow,
      contentType: constants.contentTypeFlow,
      previous: childToken
    })

    return flowContinue(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function flowContinue(this: void, code: Code): State | undefined {
    if (code === codes.eos) {
      writeToChild(effects.exit(tt.chunkFlow), true)
      exitContainers(0)
      return void effects.consume(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      writeToChild(effects.exit(tt.chunkFlow))

      // get ready for the next line.
      continued = 0
      self.interrupt = undefined

      return start
    }

    effects.consume(code)
    return flowContinue
  }

  /**
   * Exit open containers.
   *
   * @this {void}
   *
   * @param {number} size
   *  The number of containers to exit
   * @return {undefined}
   */
  function exitContainers(this: void, size: number): undefined {
    /**
     * The index of the current stack item.
     *
     * @var {number} index
     */
    let index: number = stack.length

    // call exit hook on all containers.
    while (index-- > size) {
      assert(stack[index], 'expected `stack[index]`')
      const [construct, containerState] = stack[index]!
      self.containerState = containerState
      assert(construct.exit, 'expected `exit` on container construct')
      construct.exit.call(self, effects)
    }

    stack.length = size
    return void size
  }

  /**
   * Close the current flow.
   *
   * @this {void}
   *
   * @param {Token} token
   *  The next flow chunk token
   * @param {boolean | undefined} [end]
   *  Whether end of stream has been reached
   * @return {undefined}
   */
  function writeToChild(
    this: void,
    token: Token,
    end?: boolean | undefined
  ): undefined {
    assert(childFlow, 'expected `childFlow` to be defined when continuing')

    /**
     * The chunks spanning {@linkcode token}.
     *
     * @const {Chunk[]} stream
     */
    const stream: Chunk[] = self.sliceStream(token)

    // signal end of child stream.
    if (end) stream.push(codes.eos)

    // update current token.
    token.previous = childToken
    if (childToken) childToken.next = token
    childToken = token

    // tell the child tokenizer where to start the line.
    childFlow.defineSkip(token.start)

    // write chunks to child stream.
    childFlow.write(stream)

    // so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // or:
    //
    // > ~~~c
    // d
    //
    // or:
    //
    // > | e |
    // f
    // ```
    //
    // the construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t "unmake" it.
    //
    // the construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // it *could* be a table, from the first line, if the following line
    // matches a condition.
    // in this case, that second line is lazy, which "unmakes" the first line
    // and turns the whole into one content block.
    //
    // the non-lazy and the lazy line are now parsed, and can figure out
    // whether the lazy line started a new flow block.
    // if it did, exit the current containers between the two flow blocks.
    if (self.parser.lazy[token.start.line]) {
      /**
       * The index of the current event.
       *
       * @var {number} index
       */
      let index: number = childFlow.events.length

      while (index--) {
        const [, eventToken] = childFlow.events[index]!

        if (
          // token starts before the line ending...
          eventToken.start.offset < lineStartOffset && (
            // and has either not ended yet...
            !(eventToken.end as Place | undefined) ||
            eventToken.end.offset > lineStartOffset // ...or ends after it
          )
        ) {
          // exit: there's still something open,
          // which means the lazy line is part of something
          return void eventToken
        }
      }

      // note: the algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.

      /**
       * Where to slice the event list after mutations.
       *
       * @const {number} indexBeforeExits
       */
      const indexBeforeExits: number = self.events.length

      /**
       * The index of the flow chunk exit event.
       *
       * @var {number} flowExitIndex
       */
      let flowExitIndex: number = indexBeforeExits

      /**
       * The place of the chunk before the lazy line.
       *
       * @var {Place | undefined} point
       */
      let point: Place | undefined = undefined

      /**
       * Whether the chunk before lazy line was seen.
       *
       * @var {boolean | undefined} seen
       */
      let seen: boolean | undefined = undefined

      // find previous flow chunk.
      while (flowExitIndex--) {
        assert(self.events[flowExitIndex], 'expected `events[flowExitIndex]`')
        const [event, token] = self.events[flowExitIndex]!

        if (event === ev.exit && token.type === tt.chunkFlow) {
          if (seen) {
            point = token.end
            break
          }

          seen = true
        }
      }

      assert(point, 'could not find previous flow chunk')
      exitContainers(continued)

      // fix token end points.
      index = indexBeforeExits
      while (index < self.events.length) {
        self.events[index]![1].end = { ...point }
        index++
      }

      // inject exits earlier (they’re still also at the end).
      splice(
        self.events,
        flowExitIndex + 1,
        0,
        self.events.slice(indexBeforeExits)
      )

      // discard duplicate exits.
      self.events.length = index
    }

    return void token
  }

  /**
   * Close the current flow.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function closeFlow(this: void): undefined {
    assert(self.containerState, 'expected `containerState` when closing flow')
    assert(childFlow, 'expected `childFlow` to be defined when closing it')

    childFlow.write([codes.eos])
    childFlow = undefined
    childToken = undefined
    self.containerState._closeFlow = undefined

    return void childFlow
  }
}

/**
 * Tokenize a container.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeContainer(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  assert(this.parser.constructs.disable.null, 'expected `disable.null`')

  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    tt.linePrefix,
    this.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : constants.tabSize
  )
}
