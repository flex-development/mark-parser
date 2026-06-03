/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import pathe from '@flex-development/pathe'
import { ok } from 'devlop'
import ci from 'is-ci'
import type { LabelColor } from 'vitest'
import {
  defineConfig,
  type ConfigEnv,
  type ViteUserConfig
} from 'vitest/config'
import type { ResolveSnapshotPathHandlerContext } from 'vitest/node'
import pkg from './package.json' with { type: 'json' }
import tsconfig from './tsconfig.json' with { type: 'json' }

export default defineConfig(config)

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  The configuration environment
 * @return {ViteUserConfig}
 *  The vitest configuration object
 */
function config(this: void, env: ConfigEnv): ViteUserConfig {
  return {
    test: {
      allowOnly: !ci,
      chaiConfig: {
        includeStack: true,
        showDiff: true,
        truncateThreshold: 0
      },
      clearMocks: true,
      coverage: {
        clean: true,
        cleanOnRerun: true,
        exclude: [
          '**/*.d.mts',
          '**/__fixtures__/',
          '**/__mocks__/',
          '**/__tests__/',
          '**/interfaces/',
          '**/types/'
        ],
        ignoreClassMethods: [],
        include: ['src/**/**/*.mts'],
        provider: 'v8',
        reportOnFailure: !ci,
        reporter: env.mode === 'reports'
          ? ['text']
          : [ci ? 'lcovonly' : 'html', 'json-summary', 'text'],
        reportsDirectory: './coverage',
        skipFull: false,
        thresholds: { 100: true, perFile: true }
      },
      globalSetup: [],
      globals: true,
      include: ['src/**/__tests__/*.spec.mts'],
      mockReset: true,
      outputFile: {
        blob: pathe.join('.vitest-reports', env.mode + '.blob.json'),
        json: pathe.join('__tests__', 'reports', env.mode + '.json'),
        junit: pathe.join('__tests__', 'reports', env.mode + '.junit.xml')
      },
      passWithNoTests: true,
      projects: [
        'node' as const,
        'edge-runtime' as const,
        'happy-dom' as const
      ].map((environment, groupOrder) => {
        const { customConditions } = tsconfig.compilerOptions

        /**
         * The list of conditions to apply.
         *
         * @const {string[]} conditions
         */
        const conditions: string[] = Object.assign([], customConditions)

        /**
         * The project name label color.
         *
         * @var {LabelColor} color
         */
        let color: LabelColor

        switch (environment) {
          case 'edge-runtime':
            color = 'magenta'
            break
          case 'happy-dom':
            color = 'blue'
            conditions.unshift('browser')
            break
          default:
            color = 'blackBright' as LabelColor
            break
        }

        return {
          extends: true as const,
          resolve: { conditions, preserveSymlinks: true },
          ssr: { resolve: { conditions } },
          test: {
            env: { VITEST_ENVIRONMENT: environment },
            environment,
            environmentOptions: {},
            name: { color, label: environment },
            sequence: { groupOrder },
            setupFiles: [],
            typecheck: {
              allowJs: false,
              checker: 'tsc',
              enabled: env.mode === 'typecheck',
              ignoreSourceErrors: false,
              include: ['**/__tests__/*.spec-d.mts'],
              only: true,
              tsconfig: 'tsconfig.typecheck.json'
            }
          }
        }
      }),
      reporters: JSON.parse(process.env['VITEST_UI'] ?? '0')
        ? [new Notifier(), ['tree']]
        : env.mode === 'reports'
        ? [['tree']]
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          ['junit', { suiteName: pkg.name }],
          ['tree']
        ],
      /**
       * Store snapshots next to the directory of `file`.
       *
       * @this {void}
       *
       * @param {string} file
       *  Path to test file
       * @param {string} extension
       *  Snapshot extension
       * @param {ResolveSnapshotPathHandlerContext} context
       *  Snapshot path handler context
       * @return {string}
       *  Custom snapshot path
       */
      resolveSnapshotPath(
        this: void,
        file: string,
        extension: string,
        context: ResolveSnapshotPathHandlerContext
      ): string {
        const { VITEST_ENVIRONMENT: environment } = context.config.env

        ok(typeof environment === 'string', 'expected `VITEST_ENVIRONMENT`')
        ok(environment, 'expected `VITEST_ENVIRONMENT`')

        return pathe.resolve(
          pathe.dirname(pathe.dirname(file)),
          pathe.join('__snapshots__', environment),
          pathe.basename(file).replace(/\.spec.mts/, '') + extension
        )
      },
      restoreMocks: true,
      server: {
        deps: { // required to apply custom conditions to external deps.
          inline: ['@flex-development/pathe', 'devlop']
        }
      },
      setupFiles: [pathe.resolve('__tests__/setup/chai.mts')],
      snapshotFormat: {
        callToJSON: true,
        min: false,
        printBasicPrototype: false,
        printFunctionName: true
      },
      snapshotSerializers: [],
      unstubEnvs: true,
      unstubGlobals: true
    }
  }
}
