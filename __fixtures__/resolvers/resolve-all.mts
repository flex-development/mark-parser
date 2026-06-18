/**
 * @file Fixtures - resolveAll
 * @module fixtures/resolvers/resolveAll
 */

import type { Event, Resolver } from '@flex-development/mark/parse'
import type { Mock } from 'vitest'

/**
 * Resolve all events when the content is complete, from the start to the end.
 *
 * > 👉 **Note**: Only called if `tokenize` is successful
 * > at least once in the content.
 *
 * @const {Mock<Resolver>} resolveAll
 */
const resolveAll: Mock<Resolver> = vi
  .fn((events: Event[]): Event[] => events)
  .mockName('resolveAll')

export default resolveAll
