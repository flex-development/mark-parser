import type { Effects } from '@flex-development/fsm/parse'

declare module '@flex-development/fsm/parse' {
  interface TokenFields {
    value?: string | null | undefined
  }

  interface TokenizeContext {
    /**
     * The context object to transition the state machine.
     *
     * @internal
     *
     * @see {@linkcode Effects}
     */
    readonly effects: Effects
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
