/**
 * @file Fixtures - resolveTo
 * @module fixtures/resolvers/resolveTo
 */

import type { Event, Resolver } from '@flex-development/fsm/parse'
import type { Mock } from 'vitest'

/**
 * Resolve the events parsed from the start of the content (which may include
 * other constructs) to the last one parsed by `tokenize`.
 *
 * @const {Mock<Resolver>} resolveTo
 */
const resolveTo: Mock<Resolver> = vi
  .fn((events: Event[]): Event[] => events)
  .mockName('resolveTo')

export default resolveTo
