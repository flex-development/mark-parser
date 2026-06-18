/**
 * @file rollup
 * @module config/rollup
 */

import { codecovRollupPlugin as codecov } from '@codecov/rollup-plugin'
import { EXPORT_AGGREGATE_REGEX } from '@flex-development/export-regex'
import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
import resolve from '@rollup/plugin-node-resolve'
import { ok } from 'devlop'
import ci from 'is-ci'
import type {
  NormalizedOutputOptions,
  OutputBundle,
  Plugin,
  PluginContext,
  RollupOptions
} from 'rollup'
import cleanup from 'rollup-plugin-cleanup'
import { dts as dtsBundle } from 'rollup-plugin-dts'
import pkg from './package.json' with { type: 'json' }

/**
 * The list of target files.
 *
 * @const {ReadonlyArray<string>} files
 */
const files: readonly string[] = ['./dist/index.d.mts', './dist/index.mjs']

/**
 * The rollup configuration.
 *
 * @see {@linkcode RollupOptions}
 *
 * @type {RollupOptions[]}
 */
export default files.map(input => {
  /**
   * The list of plugins.
   *
   * @const {(Plugin | Plugin[])[]} plugins
   */
  const plugins: (Plugin | Plugin[])[] = []

  if (input.endsWith('.mjs')) {
    plugins.push(
      resolve(),
      cleanup({ comments: 'none' }),
      codecov({
        bundleName: pkg.name,
        debug: true,
        enableBundleAnalysis: ci,
        uploadToken: process.env['CODECOV_TOKEN']!
      })
    )
  } else {
    plugins.push(resolve({ extensions: ['.d.mts', '.mts'] }), dts())
  }

  return {
    external: Object.keys(pkg.dependencies),
    input,
    output: [{ file: input, format: 'esm' }],
    plugins
  }
})

/**
 * Create a plugin pack to bundle declaration files and fix `type` modifiers.
 *
 * @this {void}
 *
 * @return {Plugin[]}
 *  The plugin pack
 */
function dts(this: void): Plugin[] {
  return [
    dtsBundle(),
    {
      /**
       * Re-add lost `type` modifiers.
       *
       * @see https://github.com/Swatinem/rollup-plugin-dts/issues/354
       *
       * @this {PluginContext}
       *
       * @param {NormalizedOutputOptions} options
       *  The normalized output options
       * @param {OutputBundle} bundle
       *  The output bundle object
       * @return {undefined}
       */
      generateBundle(
        this: PluginContext,
        options: NormalizedOutputOptions,
        bundle: OutputBundle
      ): undefined {
        for (const output of Object.values(bundle)) {
          if (output.type === 'chunk') {
            output.code = output.code.replace(EXPORT_AGGREGATE_REGEX, (
              match: string,
              type: string | undefined,
              exports: string,
              specifier: string | undefined
            ) => {
              ok(specifier, 'expected `specifier`')
              return type ? match : match.replace('export {', 'export type {')
            })

            output.code = output.code.replace(STATIC_IMPORT_REGEX, (
              match: string,
              type: string | undefined
            ) => {
              return type ? match : match.replace('import', 'import type')
            })
          }
        }

        return void this
      },

      /**
       * The plugin name.
       */
      name: 'dts:fix-type-modifiers'
    }
  ]
}
