/**
 * @file Utilities - resolveAll
 * @module mark-parser/utils/resolveAll
 */

import type {
  Construct,
  Context,
  Event,
  Resolver
} from '@flex-development/mark/parse'

/**
 * Call all `resolveAll` handlers.
 *
 * @see {@linkcode Construct.resolveAll}
 * @see {@linkcode Context}
 * @see {@linkcode Event}
 *
 * @category
 *  utils
 *
 * @this {void}
 *
 * @param {Partial<Construct>[]} constructs
 *  The list of constructs
 * @param {Event[]} events
 *  The list of events
 * @param {Context} context
 *  The tokenization context
 * @return {Event[]}
 *  The list of changed events
 */
function resolveAll(
  this: void,
  constructs: Partial<Construct>[],
  events: Event[],
  context: Context
): Event[] {
  /**
   * The list of called resolvers.
   *
   * @const {Resolver[]} called
   */
  const called: Resolver[] = []

  /**
   * The index of the current construct.
   *
   * @var {number} i
   */
  let i: number = -1

  while (++i < constructs.length) {
    /**
     * The resolver.
     *
     * @const {Resolver | null | undefined} resolver
     */
    const resolver: Resolver | null | undefined = constructs[i]!.resolveAll

    if (resolver && !called.includes(resolver)) {
      events = resolver(events, context)
      called.push(resolver)
    }
  }

  return events
}

export default resolveAll
