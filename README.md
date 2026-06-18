# mark-parser

[![github release](https://img.shields.io/github/v/release/flex-development/mark-parser.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/mark-parser/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-parser.svg)](https://npmjs.com/package/@flex-development/mark-parser)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-parser.svg)](https://www.npmcharts.com/compare/@flex-development/mark-parser?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-parser)](https://packagephobia.now.sh/result?p=@flex-development/mark-parser)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-parser?cache)](https://bundlephobia.com/package/@flex-development/mark-parser)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-parser)](https://bundlephobia.com/package/@flex-development/mark-parser)
[![codecov](https://codecov.io/gh/flex-development/mark-parser/graph/badge.svg?token=iA1BvaucoZ)](https://codecov.io/gh/flex-development/mark-parser)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark-parser.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

finite state machine tokenizer

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package is a tokenization utility. The underlying tokenizer is implemented as a state machine that produces tokens
with positional information, as well as any other fields attached when the token was opened. Tokens are turned into
events, with the tokenizer calling any defined resolvers in the process.

## When should I use this?

This package can be used to tokenize a [file][vfile], `Uint8Array`, string, or a list containing these values,
like command-line arguments. Developers familiar with [micromark][] will find that tokenizers and constructs (objects
used to define how to parse text) in this package work similarly.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-parser
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { tokenize } from 'https://esm.sh/@flex-development/mark-parser'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { tokenize } from 'https://esm.sh/@flex-development/mark-parser'
</script>
```

## Use

**TODO**: use

## API

**TODO**: api

> Please refer to the [source code](./src/) for documentation.

## Types

This package is fully typed with [TypeScript][].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[micromark]: https://github.com/micromark/micromark

[typescript]: https://www.typescriptlang.org

[vfile]: https://github.com/vfile/vfile

[yarn]: https://yarnpkg.com
