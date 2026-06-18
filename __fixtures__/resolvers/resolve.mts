/**
 * @file Fixtures - resolve
 * @module fixtures/resolvers/resolve
 */

import type { Event, Resolver } from '@flex-development/mark/parse'
import type { Mock } from 'vitest'

/**
 * Resolve the events parsed by `tokenize`.
 *
 * @const {Mock<Resolver>} resolve
 */
const resolve: Mock<Resolver> = vi
  .fn((events: Event[]): Event[] => events)
  .mockName('resolve')

export default resolve
