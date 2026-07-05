## [1.0.0-alpha.11](https://github.com/flex-development/mark-parser/compare/1.0.0-alpha.10...1.0.0-alpha.11) (2026-07-05)

### :sparkles: Features

- [[`3c6ec99`](https://github.com/flex-development/mark-parser/commit/3c6ec99462a5c32834da3ef5ba67fed9d1c9c952)] configure calls to `Construct#previous`

## [1.0.0-alpha.10](https://github.com/flex-development/mark-parser/compare/1.0.0-alpha.9...1.0.0-alpha.10) (2026-07-04)

### ⚠ BREAKING CHANGES

- **deps:** bump @flex-development/mark-util-character to 1.0.0
- **deps:** add @flex-development/mark-util-character
- **deps:** add @flex-development/mark-util-chunked
- api improvements
- support `codes.bos`
- `ContextMap` support
- **deps:** `@flex-development/mark-util-symbol` integration
- project rename
- `@flex-development/fsm` integration

### :package: Build

- [[`ea332a8`](https://github.com/flex-development/mark-parser/commit/ea332a88aeb4b7839f355932af4fd703fc29d0f1)] codecov bundle analysis
- [[`7d966c7`](https://github.com/flex-development/mark-parser/commit/7d966c755920de3009c1583ceda624dd56ddfab3)] **deps-dev:** bump @arethetypeswrong/cli from 0.18.3 to 0.18.4 ([#375](https://github.com/flex-development/mark-parser/issues/375))
- [[`a4abde2`](https://github.com/flex-development/mark-parser/commit/a4abde2f947ddbda76aeb0f80a20a67be4f33c72)] **deps-dev:** bump dprint from 0.54.0 to 0.55.1
- [[`005531c`](https://github.com/flex-development/mark-parser/commit/005531c83452b90fcbdf0534c74c1b0173adeb2a)] **deps-dev:** bump happy-dom from 20.10.1 to 20.10.2 ([#364](https://github.com/flex-development/mark-parser/issues/364))
- [[`2cbde17`](https://github.com/flex-development/mark-parser/commit/2cbde17a4a3a6af0e367ff8b99fd44d2d0b0745e)] **deps-dev:** bump happy-dom from 20.10.2 to 20.10.3 ([#368](https://github.com/flex-development/mark-parser/issues/368))
- [[`b8cca05`](https://github.com/flex-development/mark-parser/commit/b8cca0528aef600283947915eae7518765e9296b)] **deps-dev:** bump happy-dom from 20.10.3 to 20.10.4 ([#370](https://github.com/flex-development/mark-parser/issues/370))
- [[`2dd802b`](https://github.com/flex-development/mark-parser/commit/2dd802bb97204583b002b75a420f858912e61966)] **deps-dev:** bump happy-dom from 20.10.4 to 20.10.5 ([#371](https://github.com/flex-development/mark-parser/issues/371))
- [[`8f5808e`](https://github.com/flex-development/mark-parser/commit/8f5808e0f360c83b840b926ae23fbc7345c41394)] **deps-dev:** bump happy-dom from 20.10.5 to 20.10.6 ([#372](https://github.com/flex-development/mark-parser/issues/372))
- [[`a090bea`](https://github.com/flex-development/mark-parser/commit/a090beae841bac0de9c436f7cd8e12b6ab1c7bc5)] **deps-dev:** bump rollup from 4.61.1 to 4.62.0 ([#367](https://github.com/flex-development/mark-parser/issues/367))
- [[`a8dbf5c`](https://github.com/flex-development/mark-parser/commit/a8dbf5c9e704f25463b09f957bd28a7e969653f4)] **deps-dev:** bump rollup from 4.62.0 to 4.62.2 ([#374](https://github.com/flex-development/mark-parser/issues/374))
- [[`abc40cd`](https://github.com/flex-development/mark-parser/commit/abc40cdfcbd6305f1a629305c255a3296a0cabdb)] **deps-dev:** bump the commitlint group across 1 directory with 2 updates ([#377](https://github.com/flex-development/mark-parser/issues/377))
- [[`50cafdf`](https://github.com/flex-development/mark-parser/commit/50cafdfbfac0bc9ffe4c589d47737399972e3314)] **deps-dev:** bump the commitlint group with 2 updates ([#381](https://github.com/flex-development/mark-parser/issues/381))
- [[`9b9d00b`](https://github.com/flex-development/mark-parser/commit/9b9d00b7cae76044398b388d6f842fb381ee91a1)] **deps-dev:** bump the vitest group with 3 updates ([#366](https://github.com/flex-development/mark-parser/issues/366))
- [[`a86e8f9`](https://github.com/flex-development/mark-parser/commit/a86e8f90832a3845a17d7074059f9d810cb5f090)] **deps-dev:** bump ts-dedent from 2.2.0 to 2.3.0 ([#365](https://github.com/flex-development/mark-parser/issues/365))
- [[`5a44495`](https://github.com/flex-development/mark-parser/commit/5a4449514fe144d3e08b3e6d7ee67c5822d7de03)] **deps-dev:** bump tsx from 4.22.4 to 4.22.5 ([#382](https://github.com/flex-development/mark-parser/issues/382))
- [[`52273e2`](https://github.com/flex-development/mark-parser/commit/52273e2abbbd2aac081c646ca18760676e95daa9)] **deps:** bump @flex-development/fsm from 566fbcd to 4f44837
- [[`33048e1`](https://github.com/flex-development/mark-parser/commit/33048e1199bb4125eee48d1a25c4aa7674b3f03f)] **deps:** bump @flex-development/mark to 1.0.0-alpha.1
- [[`82cbf71`](https://github.com/flex-development/mark-parser/commit/82cbf7148600dd743273a0088ecca083649e8e7a)] **deps:** bump @flex-development/mark-util-chunked to 1.0.0
- [[`343b28e`](https://github.com/flex-development/mark-parser/commit/343b28ea251569eb3cfa6b1f3e9d8899746d59ea)] **deps:** bump @flex-development/mark-util-symbol from 3.0.0 to 3.1.0
- [[`4361b3e`](https://github.com/flex-development/mark-parser/commit/4361b3eaabda1ca6e76095d19bca255900a9beb5)] **deps:** `@flex-development/mark-util-symbol` integration
- [[`59ddc91`](https://github.com/flex-development/mark-parser/commit/59ddc914bb76fb1fa63cd860d2526ce9783a70fe)] **deps:** add @flex-development/mark-util-character
- [[`98f00b1`](https://github.com/flex-development/mark-parser/commit/98f00b1a60ae5372f90999838664d18b36b37d09)] **deps:** add @flex-development/mark-util-chunked
- [[`9bf9ed4`](https://github.com/flex-development/mark-parser/commit/9bf9ed4cfcda7550b4333fb0dfde94416cca7a47)] **deps:** bump @flex-development/mark-util-character to 1.0.0
- [[`3cf47ad`](https://github.com/flex-development/mark-parser/commit/3cf47ad965f8d1e96e4cffa0cd1561d5977b0310)] **yarn:** bump yarn from 4.14.1 to 4.17.0

### :robot: Continuous Integration

- [[`0d11fbe`](https://github.com/flex-development/mark-parser/commit/0d11fbeea31b4a8779f48a54e8051e60841767a7)] **deps:** bump actions/cache from 5.0.5 to 6.0.0 ([#376](https://github.com/flex-development/mark-parser/issues/376))
- [[`0a8b651`](https://github.com/flex-development/mark-parser/commit/0a8b651fed2993a85e2e9a4ed5720bc9c404d1dc)] **deps:** bump actions/cache from 6.0.0 to 6.1.0 ([#378](https://github.com/flex-development/mark-parser/issues/378))
- [[`dad2184`](https://github.com/flex-development/mark-parser/commit/dad2184e189c30401b814a5a56d460429bfc7ac0)] **deps:** bump actions/checkout from 6.0.3 to 7.0.0 ([#373](https://github.com/flex-development/mark-parser/issues/373))
- [[`9d927ec`](https://github.com/flex-development/mark-parser/commit/9d927ecf0680e04c9b514a6d59751b4c50874407)] **deps:** bump codecov/codecov-action from 6.0.1 to 7.0.0 ([#363](https://github.com/flex-development/mark-parser/issues/363))

### :sparkles: Features

- [[`7d1ecf9`](https://github.com/flex-development/mark-parser/commit/7d1ecf9c5583b830e62d75fc463d9c8663e2061c)] `Options#noEmptyTokens`
- [[`8c66ac3`](https://github.com/flex-development/mark-parser/commit/8c66ac342e53f1b7a23308597be4a38bd23de4d4)] support `codes.bos`

### :house_with_garden: Housekeeping

- [[`4887710`](https://github.com/flex-development/mark-parser/commit/4887710471e74424727cb08be89ee385410771cc)] **pkg:** `funding`

### :mechanical_arm: Refactors

- [[`0d7f2cb`](https://github.com/flex-development/mark-parser/commit/0d7f2cb62fd2d9d770fca78ca6ed5d3a01684cb5)] `@flex-development/fsm` integration
- [[`605c3c5`](https://github.com/flex-development/mark-parser/commit/605c3c5965e826a2ded09557bbba0eaf0cf4775c)] `ContextMap` support
- [[`df8ceea`](https://github.com/flex-development/mark-parser/commit/df8ceeab7c8f5a65007332a2fe1dfe9e3eb5846c)] api improvements
- [[`e80a4bd`](https://github.com/flex-development/mark-parser/commit/e80a4bd3a5431b02b1f9ee3d75b16db3f5676ee8)] project rename

## [1.0.0-alpha.9](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.8...1.0.0-alpha.9) (2026-06-05)

### :sparkles: Features

- [[`29cabdc`](https://github.com/flex-development/mark-tokenizer/commit/29cabdc1f712d8b8d542e8a9f9fc49350d7a2324)] set debug namespace for content type tokenizer

## [1.0.0-alpha.8](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.7...1.0.0-alpha.8) (2026-06-04)

### :package: Build

- [[`32133e7`](https://github.com/flex-development/mark-tokenizer/commit/32133e7859ea4e7652fc6176d00ec0b8e2732403)] **deps-dev:** bump happy-dom from 20.9.0 to 20.10.1 ([#357](https://github.com/flex-development/mark-tokenizer/issues/357))
- [[`e6ef6ff`](https://github.com/flex-development/mark-tokenizer/commit/e6ef6ff2b55168f80178edc63d80fbe2e1fffbd2)] **deps-dev:** bump rollup from 4.61.0 to 4.61.1 ([#358](https://github.com/flex-development/mark-tokenizer/issues/358))
- [[`25d21f2`](https://github.com/flex-development/mark-tokenizer/commit/25d21f28ea57ac8307a873ee40740f9a7da9370c)] **deps-dev:** bump tsx from 4.22.3 to 4.22.4 ([#356](https://github.com/flex-development/mark-tokenizer/issues/356))

### :robot: Continuous Integration

- [[`069cd19`](https://github.com/flex-development/mark-tokenizer/commit/069cd19d75f35f3496f303d827c7563b742cd8e6)] **deps:** bump actions/checkout from 6.0.2 to 6.0.3 ([#355](https://github.com/flex-development/mark-tokenizer/issues/355))

### :sparkles: Features

- [[`52e9000`](https://github.com/flex-development/mark-tokenizer/commit/52e9000276e22651dfdb3cce13169fba05ad2b2e)] syntax extensions factory

### :bug: Fixes

- [[`cf67bf5`](https://github.com/flex-development/mark-tokenizer/commit/cf67bf558769e9709614672ecf890328269b6b98)] **ts:** `Cannot access ambient const enums when "verbatimModuleSyntax" is enabled`

## [1.0.0-alpha.7](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.6...1.0.0-alpha.7) (2026-06-03)

### ⚠ BREAKING CHANGES

- api improvements

### :package: Build

- [[`7b945cc`](https://github.com/flex-development/mark-tokenizer/commit/7b945ccc58d28715828487120f299aa33469f383)] **deps-dev:** bump @arethetypeswrong/cli from 0.18.2 to 0.18.3 ([#350](https://github.com/flex-development/mark-tokenizer/issues/350))
- [[`6be1e93`](https://github.com/flex-development/mark-tokenizer/commit/6be1e9306977b158a1de441e3026c7706e3277fc)] **deps-dev:** bump @commitlint/cli from 21.0.1 to 21.0.2 in the commitlint group ([#347](https://github.com/flex-development/mark-tokenizer/issues/347))
- [[`356f95e`](https://github.com/flex-development/mark-tokenizer/commit/356f95e307f9cef98446df01b7e4041dabc83d9d)] **deps-dev:** bump cspell from 10.0.0 to 10.0.1 ([#349](https://github.com/flex-development/mark-tokenizer/issues/349))
- [[`7d24745`](https://github.com/flex-development/mark-tokenizer/commit/7d24745326b882e72e6c039c73a3b9c898b40611)] **deps-dev:** bump rollup from 4.60.4 to 4.61.0 ([#351](https://github.com/flex-development/mark-tokenizer/issues/351))
- [[`42a429d`](https://github.com/flex-development/mark-tokenizer/commit/42a429dfaf475025fccf157305aa232074f02fd3)] **deps-dev:** bump the vitest group with 3 updates ([#348](https://github.com/flex-development/mark-tokenizer/issues/348))

### :mechanical_arm: Refactors

- [[`d430997`](https://github.com/flex-development/mark-tokenizer/commit/d430997025c9812f805eec602ed89acaa727bb74)] api improvements

## [1.0.0-alpha.6](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.5...1.0.0-alpha.6) (2026-05-22)

### ⚠ BREAKING CHANGES

- **ts:** `Options#initial` -> `Options#initialize`

### :package: Build

- [[`b1a080e`](https://github.com/flex-development/mark-tokenizer/commit/b1a080e59561016c0e749e362b5f66fa616e0df1)] **deps-dev:** bump rollup from 4.60.3 to 4.60.4 ([#341](https://github.com/flex-development/mark-tokenizer/issues/341))
- [[`bceba21`](https://github.com/flex-development/mark-tokenizer/commit/bceba2191fda94857cf79ca9bb4750541a0667ac)] **deps-dev:** bump the vitest group with 3 updates ([#344](https://github.com/flex-development/mark-tokenizer/issues/344))
- [[`534d992`](https://github.com/flex-development/mark-tokenizer/commit/534d9923e7923669276e25341ad566ae50e386b9)] **ts:** `rewriteRelativeImportExtensions`

### :robot: Continuous Integration

- [[`ea2df98`](https://github.com/flex-development/mark-tokenizer/commit/ea2df9857f2c96349e644f67348c7faaf1026394)] **deps:** bump codecov/codecov-action from 6.0.0 to 6.0.1 ([#342](https://github.com/flex-development/mark-tokenizer/issues/342))

### :pencil: Documentation

- [[`29430db`](https://github.com/flex-development/mark-tokenizer/commit/29430dbe6e8e0bf864187ab4a1466b58e4e13206)] add bundlephobia badges

### :sparkles: Features

- [[`36e3b82`](https://github.com/flex-development/mark-tokenizer/commit/36e3b82c2586bdf8670d8ab74c904d4476046266)] **enums:** `chars.questionMark`, `codes.questionMark`

### :mechanical_arm: Refactors

- [[`43605bc`](https://github.com/flex-development/mark-tokenizer/commit/43605bc5372e208e0b23895a29bd3cf83085565d)] **ts:** `Options#initial` -> `Options#initialize`

## [1.0.0-alpha.5](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.4...1.0.0-alpha.5) (2026-05-14)

### :pencil: Documentation

- [[`004d377`](https://github.com/flex-development/mark-tokenizer/commit/004d377dca15b6d1b34f88437c498b9490cb78a4)] add badges for monthly downloads and install size

### :house_with_garden: Housekeeping

- [[`ccf8145`](https://github.com/flex-development/mark-tokenizer/commit/ccf81457b6b37324af6bd218df40d7b333ad5f6f)] `yarn pack` -> `npm pack`

## [1.0.0-alpha.4](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.3...1.0.0-alpha.4) (2026-05-14)

### :package: Build

- [[`bd3915f`](https://github.com/flex-development/mark-tokenizer/commit/bd3915f0ef315f42951cf7c9b309e67b617e46cc)] remove comments from bundle
- [[`2d349a1`](https://github.com/flex-development/mark-tokenizer/commit/2d349a120726ec91bafd3de4b05c8f5db586f112)] **deps:** bump @flex-development/vfile-location from 1.1.0 to 1.1.1 in the flex-development group ([#334](https://github.com/flex-development/mark-tokenizer/issues/334))
- [[`47ee3ec`](https://github.com/flex-development/mark-tokenizer/commit/47ee3ecb29451f4e846ecc402eb4ac064c6bad6f)] **deps:** bump debug and @types/debug ([#335](https://github.com/flex-development/mark-tokenizer/issues/335))

## [1.0.0-alpha.3](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.1...1.0.0-alpha.3) (2026-05-14)

### :package: Build

- [[`adc0540`](https://github.com/flex-development/mark-tokenizer/commit/adc0540bb94b65e6b23bd843551d71878199e737)] bundle
- [[`6357cb1`](https://github.com/flex-development/mark-tokenizer/commit/6357cb15a3bbcbfaac737a6076900ab32a068cf0)] **deps-dev:** Bump @arethetypeswrong/cli from 0.17.4 to 0.18.0 ([#199](https://github.com/flex-development/mark-tokenizer/issues/199))
- [[`e6c7338`](https://github.com/flex-development/mark-tokenizer/commit/e6c733827977c1037ed7d4fa32ea6613cd1de0bc)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.0 to 0.18.1 ([#201](https://github.com/flex-development/mark-tokenizer/issues/201))
- [[`e3f97bb`](https://github.com/flex-development/mark-tokenizer/commit/e3f97bb270ad159c2bd07642bdaf4fcdc9d3f414)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.1 to 0.18.2 ([#231](https://github.com/flex-development/mark-tokenizer/issues/231))
- [[`be1b223`](https://github.com/flex-development/mark-tokenizer/commit/be1b2232b431f0b2028d3c91222efa5cd56cd9fb)] **deps-dev:** Bump @flex-development/colors from 1.0.1 to 1.0.2 in the flex-development group ([#221](https://github.com/flex-development/mark-tokenizer/issues/221))
- [[`9d57038`](https://github.com/flex-development/mark-tokenizer/commit/9d570384f3a0183d42ae547ad3158299b36ecde9)] **deps-dev:** Bump @flex-development/pathe from 4.0.1 to 4.0.2 in the flex-development group ([#222](https://github.com/flex-development/mark-tokenizer/issues/222))
- [[`542d4ed`](https://github.com/flex-development/mark-tokenizer/commit/542d4edfc8427ae4eeea8bdc77369ac1580bda99)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.2.0 to 4.4.0 ([#218](https://github.com/flex-development/mark-tokenizer/issues/218))
- [[`3d50b0a`](https://github.com/flex-development/mark-tokenizer/commit/3d50b0a1fa1ee117ed84a42ac1f878e9b83bfaec)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.0 to 4.4.1 ([#228](https://github.com/flex-development/mark-tokenizer/issues/228))
- [[`68b77d5`](https://github.com/flex-development/mark-tokenizer/commit/68b77d5266b731df828a8ae727695989ca4246f5)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.1 to 5.2.3 ([#259](https://github.com/flex-development/mark-tokenizer/issues/259))
- [[`c549a3c`](https://github.com/flex-development/mark-tokenizer/commit/c549a3cf27d6723b30b99c4745d10bd034883e60)] **deps-dev:** Bump chai from 5.2.0 to 5.2.1 ([#258](https://github.com/flex-development/mark-tokenizer/issues/258))
- [[`442ba86`](https://github.com/flex-development/mark-tokenizer/commit/442ba86efc0e6b0dd15962d53ea42f9497210e23)] **deps-dev:** Bump cspell from 8.17.5 to 8.18.0 ([#144](https://github.com/flex-development/mark-tokenizer/issues/144))
- [[`48e6ba0`](https://github.com/flex-development/mark-tokenizer/commit/48e6ba0ed6e1b8ecd36062abfb86690c53e0c352)] **deps-dev:** Bump cspell from 8.18.0 to 8.18.1 ([#151](https://github.com/flex-development/mark-tokenizer/issues/151))
- [[`c17c2b2`](https://github.com/flex-development/mark-tokenizer/commit/c17c2b219ff1539fad293863bc5848671ee7fea4)] **deps-dev:** Bump cspell from 8.18.1 to 8.19.0 ([#172](https://github.com/flex-development/mark-tokenizer/issues/172))
- [[`beec3ee`](https://github.com/flex-development/mark-tokenizer/commit/beec3eee20866f1087cf68378197544814fbc005)] **deps-dev:** Bump cspell from 8.19.0 to 8.19.2 ([#174](https://github.com/flex-development/mark-tokenizer/issues/174))
- [[`dde7712`](https://github.com/flex-development/mark-tokenizer/commit/dde7712a753e71517ccc5b6fe33d1a608cc4ed54)] **deps-dev:** Bump cspell from 8.19.2 to 8.19.3 ([#187](https://github.com/flex-development/mark-tokenizer/issues/187))
- [[`576c843`](https://github.com/flex-development/mark-tokenizer/commit/576c843fcf3db6d012e84fd788e9fe4b19da4ab9)] **deps-dev:** Bump cspell from 8.19.3 to 9.0.0 ([#193](https://github.com/flex-development/mark-tokenizer/issues/193))
- [[`b9c3cc9`](https://github.com/flex-development/mark-tokenizer/commit/b9c3cc939878321682e7bee474f5878fbe57c5f8)] **deps-dev:** Bump cspell from 9.0.0 to 9.0.1 ([#198](https://github.com/flex-development/mark-tokenizer/issues/198))
- [[`f39dbe8`](https://github.com/flex-development/mark-tokenizer/commit/f39dbe8ce973ca7257beb42a438b139ff9d7fc63)] **deps-dev:** Bump cspell from 9.0.1 to 9.0.2 ([#214](https://github.com/flex-development/mark-tokenizer/issues/214))
- [[`df20df4`](https://github.com/flex-development/mark-tokenizer/commit/df20df477f5d1319d4d8d87f07c6b4c5ddd9052f)] **deps-dev:** Bump cspell from 9.0.2 to 9.2.0 ([#246](https://github.com/flex-development/mark-tokenizer/issues/246))
- [[`40d0b02`](https://github.com/flex-development/mark-tokenizer/commit/40d0b026a3b706f780037c71df25a77b1a66a5b7)] **deps-dev:** Bump dprint from 0.49.1 to 0.50.0 ([#211](https://github.com/flex-development/mark-tokenizer/issues/211))
- [[`5204846`](https://github.com/flex-development/mark-tokenizer/commit/52048463a5a7485125672c68af056048272f6966)] **deps-dev:** Bump dprint from 0.50.0 to 0.50.1 ([#257](https://github.com/flex-development/mark-tokenizer/issues/257))
- [[`41f1380`](https://github.com/flex-development/mark-tokenizer/commit/41f1380d03775fe7462f3b52b0f1dfbb7658e94d)] **deps-dev:** Bump editorconfig from 2.0.1 to 3.0.0 ([#233](https://github.com/flex-development/mark-tokenizer/issues/233))
- [[`e731127`](https://github.com/flex-development/mark-tokenizer/commit/e73112735cc405e578220e30d4a580efb07d4a89)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.3 to 4.2.4 ([#143](https://github.com/flex-development/mark-tokenizer/issues/143))
- [[`a55cb76`](https://github.com/flex-development/mark-tokenizer/commit/a55cb76e7b5e60cc7c1d75c9998a9642b0f97c31)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.4 to 4.2.5 ([#145](https://github.com/flex-development/mark-tokenizer/issues/145))
- [[`0495e94`](https://github.com/flex-development/mark-tokenizer/commit/0495e949b2ca30c8f3428b6caaa3e96d4dc92f9a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.5 to 4.3.1 ([#150](https://github.com/flex-development/mark-tokenizer/issues/150))
- [[`fe38ab4`](https://github.com/flex-development/mark-tokenizer/commit/fe38ab46a23ebd7325e5b2716e72338b18b9abd0)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.1 to 4.3.2 ([#165](https://github.com/flex-development/mark-tokenizer/issues/165))
- [[`580ed64`](https://github.com/flex-development/mark-tokenizer/commit/580ed64baa8620d78932b73df9ab9b7bff65e795)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.2 to 4.3.3 ([#176](https://github.com/flex-development/mark-tokenizer/issues/176))
- [[`5bc896d`](https://github.com/flex-development/mark-tokenizer/commit/5bc896dd245a8026b46d483c383b769c298b5a7a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.3 to 4.3.4 ([#179](https://github.com/flex-development/mark-tokenizer/issues/179))
- [[`f516a42`](https://github.com/flex-development/mark-tokenizer/commit/f516a428480a14c417d66d29528986879a4bd297)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.4 to 4.3.5 ([#212](https://github.com/flex-development/mark-tokenizer/issues/212))
- [[`0061c4c`](https://github.com/flex-development/mark-tokenizer/commit/0061c4c42e81f3cd61e63e47b84b8cd6f4e84267)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.5 to 4.4.1 ([#217](https://github.com/flex-development/mark-tokenizer/issues/217))
- [[`78de4dd`](https://github.com/flex-development/mark-tokenizer/commit/78de4dd1060b1f918b20ea65aaefeaa075ed8246)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.1 to 4.4.2 ([#226](https://github.com/flex-development/mark-tokenizer/issues/226))
- [[`8674751`](https://github.com/flex-development/mark-tokenizer/commit/8674751c146c85889d16a7bb6a509c0b44b682aa)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.2 to 4.4.3 ([#229](https://github.com/flex-development/mark-tokenizer/issues/229))
- [[`15c8712`](https://github.com/flex-development/mark-tokenizer/commit/15c87128e3098fa3133892bfb41562455e36efa5)] **deps-dev:** Bump eslint-mdx from 3.3.1 to 3.3.2 ([#155](https://github.com/flex-development/mark-tokenizer/issues/155))
- [[`c9ba783`](https://github.com/flex-development/mark-tokenizer/commit/c9ba783677de5c1b5e4ab19ecc0d03bdeff53478)] **deps-dev:** Bump eslint-mdx from 3.3.2 to 3.4.0 ([#161](https://github.com/flex-development/mark-tokenizer/issues/161))
- [[`84cd45a`](https://github.com/flex-development/mark-tokenizer/commit/84cd45ac0b51fadd8360ba610d938dc8e4f98d26)] **deps-dev:** Bump eslint-mdx from 3.4.0 to 3.4.1 ([#181](https://github.com/flex-development/mark-tokenizer/issues/181))
- [[`548197c`](https://github.com/flex-development/mark-tokenizer/commit/548197c860c1807daf632e05e22efc039a6d38fd)] **deps-dev:** Bump eslint-mdx from 3.4.1 to 3.4.2 ([#208](https://github.com/flex-development/mark-tokenizer/issues/208))
- [[`af49ba2`](https://github.com/flex-development/mark-tokenizer/commit/af49ba22d301efa81156d6f21c68ffa067536909)] **deps-dev:** Bump eslint-mdx from 3.4.2 to 3.6.0 ([#241](https://github.com/flex-development/mark-tokenizer/issues/241))
- [[`290f868`](https://github.com/flex-development/mark-tokenizer/commit/290f868ec5d7707f672b6cef9bf9b1e441c6b6b9)] **deps-dev:** Bump eslint-mdx from 3.6.0 to 3.6.2 ([#261](https://github.com/flex-development/mark-tokenizer/issues/261))
- [[`138d2bb`](https://github.com/flex-development/mark-tokenizer/commit/138d2bb6038da87a5bda8def41e35e6dcb4247bf)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.10 to 50.6.11 ([#184](https://github.com/flex-development/mark-tokenizer/issues/184))
- [[`0c4ff79`](https://github.com/flex-development/mark-tokenizer/commit/0c4ff7933c1f49f3020f3e2c4382a127be55691e)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.11 to 50.6.14 ([#202](https://github.com/flex-development/mark-tokenizer/issues/202))
- [[`db71656`](https://github.com/flex-development/mark-tokenizer/commit/db716566ca20e5628fca5ca18fa89caeaeaf7b5d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.14 to 50.6.16 ([#205](https://github.com/flex-development/mark-tokenizer/issues/205))
- [[`d7324d9`](https://github.com/flex-development/mark-tokenizer/commit/d7324d9a578f423c0ae86f18c641804c3582d83d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.16 to 50.6.17 ([#206](https://github.com/flex-development/mark-tokenizer/issues/206))
- [[`1761760`](https://github.com/flex-development/mark-tokenizer/commit/1761760b16e2d8a551fe2427afd43650abe4b9fc)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.17 to 50.7.1 ([#223](https://github.com/flex-development/mark-tokenizer/issues/223))
- [[`3a55802`](https://github.com/flex-development/mark-tokenizer/commit/3a55802a7be752bba4efb2488a1676b7d699fffe)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.9 to 50.6.10 ([#183](https://github.com/flex-development/mark-tokenizer/issues/183))
- [[`7a9ac91`](https://github.com/flex-development/mark-tokenizer/commit/7a9ac91fbad962342fe15674f282cd7db4227c2b)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.7.1 to 50.8.0 ([#232](https://github.com/flex-development/mark-tokenizer/issues/232))
- [[`ed953a7`](https://github.com/flex-development/mark-tokenizer/commit/ed953a7c703a35b81a3a47c037c91f4c06530b22)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.8.0 to 51.0.1 ([#234](https://github.com/flex-development/mark-tokenizer/issues/234))
- [[`f0d1ce0`](https://github.com/flex-development/mark-tokenizer/commit/f0d1ce093359a375fa50feb1b9de918e2df607cb)] **deps-dev:** Bump eslint-plugin-jsdoc from 51.0.1 to 54.1.0 ([#260](https://github.com/flex-development/mark-tokenizer/issues/260))
- [[`cd62b99`](https://github.com/flex-development/mark-tokenizer/commit/cd62b992f4d36e97c5740cccf453ad46366098de)] **deps-dev:** Bump eslint-plugin-jsonc from 2.20.0 to 2.20.1 ([#215](https://github.com/flex-development/mark-tokenizer/issues/215))
- [[`d34646c`](https://github.com/flex-development/mark-tokenizer/commit/d34646c94af479f23e2ba0fcfd4ec22f77ebf951)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.1 to 3.3.2 ([#156](https://github.com/flex-development/mark-tokenizer/issues/156))
- [[`9ffea73`](https://github.com/flex-development/mark-tokenizer/commit/9ffea730861beb956b851330c8d2660a6ea791f1)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.2 to 3.4.0 ([#162](https://github.com/flex-development/mark-tokenizer/issues/162))
- [[`fceed53`](https://github.com/flex-development/mark-tokenizer/commit/fceed5301430d54a057ab4ef0e9a13fe4375515d)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.0 to 3.4.1 ([#182](https://github.com/flex-development/mark-tokenizer/issues/182))
- [[`e23376e`](https://github.com/flex-development/mark-tokenizer/commit/e23376ed47bd7f141314c35401365085b6df65c9)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.1 to 3.4.2 ([#207](https://github.com/flex-development/mark-tokenizer/issues/207))
- [[`ad5e31b`](https://github.com/flex-development/mark-tokenizer/commit/ad5e31bea55c0d129dc143e6bf4d5282206036f5)] **deps-dev:** Bump eslint-plugin-unicorn from 58.0.0 to 59.0.0 ([#186](https://github.com/flex-development/mark-tokenizer/issues/186))
- [[`b6f0087`](https://github.com/flex-development/mark-tokenizer/commit/b6f0087a23a085f312bfa49dc5ad6f2c6be4ac3d)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.0 to 59.0.1 ([#195](https://github.com/flex-development/mark-tokenizer/issues/195))
- [[`d5d033d`](https://github.com/flex-development/mark-tokenizer/commit/d5d033d7cdfae08220a33f51f397b5b31ada1b7b)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.1 to 60.0.0 ([#255](https://github.com/flex-development/mark-tokenizer/issues/255))
- [[`e94fa1b`](https://github.com/flex-development/mark-tokenizer/commit/e94fa1be62ef04b13c127a3132fe45e99ccbe57d)] **deps-dev:** Bump eslint-plugin-yml from 1.17.0 to 1.18.0 ([#180](https://github.com/flex-development/mark-tokenizer/issues/180))
- [[`9a86d12`](https://github.com/flex-development/mark-tokenizer/commit/9a86d1216b80e27c986946b2d18d2d19db1006c2)] **deps-dev:** Bump globals from 16.0.0 to 16.1.0 ([#196](https://github.com/flex-development/mark-tokenizer/issues/196))
- [[`1ca9923`](https://github.com/flex-development/mark-tokenizer/commit/1ca99234dbab61d5e15a8e7d7d0ddffdc4200e85)] **deps-dev:** Bump globals from 16.1.0 to 16.2.0 ([#216](https://github.com/flex-development/mark-tokenizer/issues/216))
- [[`96e807e`](https://github.com/flex-development/mark-tokenizer/commit/96e807e1b278a321cd1a39e3ba8e431af109f0a4)] **deps-dev:** Bump globals from 16.2.0 to 16.3.0 ([#247](https://github.com/flex-development/mark-tokenizer/issues/247))
- [[`0c13957`](https://github.com/flex-development/mark-tokenizer/commit/0c1395735a194a0493f808957909bbc218d0ae1d)] **deps-dev:** Bump remark-lint-no-unused-definitions from 4.0.1 to 4.0.2 in the remark group ([#167](https://github.com/flex-development/mark-tokenizer/issues/167))
- [[`8010d52`](https://github.com/flex-development/mark-tokenizer/commit/8010d5260281ff5c96e8de27633daa8e8c2427ea)] **deps-dev:** Bump sh-syntax from 0.4.2 to 0.5.1 ([#158](https://github.com/flex-development/mark-tokenizer/issues/158))
- [[`2307a35`](https://github.com/flex-development/mark-tokenizer/commit/2307a352ecb5a17f1db8d331ab63945a594add4b)] **deps-dev:** Bump sh-syntax from 0.5.1 to 0.5.6 ([#166](https://github.com/flex-development/mark-tokenizer/issues/166))
- [[`009e757`](https://github.com/flex-development/mark-tokenizer/commit/009e75775839bda794ccc2322be2859c46ca88f4)] **deps-dev:** Bump sh-syntax from 0.5.6 to 0.5.7 ([#175](https://github.com/flex-development/mark-tokenizer/issues/175))
- [[`c5f421e`](https://github.com/flex-development/mark-tokenizer/commit/c5f421ea17e6a8dd7f373432c27ba68248d914bd)] **deps-dev:** Bump sh-syntax from 0.5.7 to 0.5.8 ([#213](https://github.com/flex-development/mark-tokenizer/issues/213))
- [[`720b319`](https://github.com/flex-development/mark-tokenizer/commit/720b31943b62365296e91fe937aa03b6b9f9cb66)] **deps-dev:** Bump the commitlint group with 2 updates ([#197](https://github.com/flex-development/mark-tokenizer/issues/197))
- [[`cb8a6de`](https://github.com/flex-development/mark-tokenizer/commit/cb8a6de9ae1ff12f8e6a1943692afb02964f13af)] **deps-dev:** Bump the eslint group with 2 updates ([#160](https://github.com/flex-development/mark-tokenizer/issues/160))
- [[`71ed8ae`](https://github.com/flex-development/mark-tokenizer/commit/71ed8aefc99b1c7a17864cb8b50d1d6ce287f3a7)] **deps-dev:** Bump the eslint group with 2 updates ([#173](https://github.com/flex-development/mark-tokenizer/issues/173))
- [[`ceec22c`](https://github.com/flex-development/mark-tokenizer/commit/ceec22c6efebafd1653c7ffc2f9ec92ec35d7c55)] **deps-dev:** Bump the eslint group with 2 updates ([#177](https://github.com/flex-development/mark-tokenizer/issues/177))
- [[`883e221`](https://github.com/flex-development/mark-tokenizer/commit/883e221f4e2b8417dd61dbe5356df2b9c9e3e208)] **deps-dev:** Bump the eslint group with 2 updates ([#191](https://github.com/flex-development/mark-tokenizer/issues/191))
- [[`1f4aa6c`](https://github.com/flex-development/mark-tokenizer/commit/1f4aa6c2d6742182252addc48ce9ba73ace385cd)] **deps-dev:** Bump the eslint group with 2 updates ([#210](https://github.com/flex-development/mark-tokenizer/issues/210))
- [[`26648b7`](https://github.com/flex-development/mark-tokenizer/commit/26648b715d92c46f6295809b165ce10e64bffaa5)] **deps-dev:** Bump the eslint group with 2 updates ([#224](https://github.com/flex-development/mark-tokenizer/issues/224))
- [[`00c6935`](https://github.com/flex-development/mark-tokenizer/commit/00c69359cff08d28769527b845b8b01a06acaedd)] **deps-dev:** Bump the eslint group with 2 updates ([#236](https://github.com/flex-development/mark-tokenizer/issues/236))
- [[`c6cf3ef`](https://github.com/flex-development/mark-tokenizer/commit/c6cf3ef4b762dae74e9edc85640550b048957da9)] **deps-dev:** Bump the eslint group with 2 updates ([#243](https://github.com/flex-development/mark-tokenizer/issues/243))
- [[`e03bd16`](https://github.com/flex-development/mark-tokenizer/commit/e03bd16ab6e9c5a770f76e746752937527c2f347)] **deps-dev:** Bump the remark group with 2 updates ([#164](https://github.com/flex-development/mark-tokenizer/issues/164))
- [[`9e164f5`](https://github.com/flex-development/mark-tokenizer/commit/9e164f5b4f3c7f9bb7d9ae86193e04fbc7425a88)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#153](https://github.com/flex-development/mark-tokenizer/issues/153))
- [[`c9853b5`](https://github.com/flex-development/mark-tokenizer/commit/c9853b5515f5b982c1cd2ce4bb028a4872dad646)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#163](https://github.com/flex-development/mark-tokenizer/issues/163))
- [[`553f03b`](https://github.com/flex-development/mark-tokenizer/commit/553f03bf53642af5c73ae7c69dcb765a606b3aca)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#171](https://github.com/flex-development/mark-tokenizer/issues/171))
- [[`09cdd67`](https://github.com/flex-development/mark-tokenizer/commit/09cdd671db2c1ebd6b6960a892bf7763e5f8a25c)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#178](https://github.com/flex-development/mark-tokenizer/issues/178))
- [[`8aaafff`](https://github.com/flex-development/mark-tokenizer/commit/8aaafffaab6d69019df5b313edb365224237120f)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#185](https://github.com/flex-development/mark-tokenizer/issues/185))
- [[`cafac87`](https://github.com/flex-development/mark-tokenizer/commit/cafac87c039ac14394d874526e4b439a0f9e707b)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#194](https://github.com/flex-development/mark-tokenizer/issues/194))
- [[`a33e327`](https://github.com/flex-development/mark-tokenizer/commit/a33e3271972b8b85d706579239ee5948032577e1)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#203](https://github.com/flex-development/mark-tokenizer/issues/203))
- [[`2ab54e9`](https://github.com/flex-development/mark-tokenizer/commit/2ab54e97f528583454e7b9ecb744776fecafac17)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#220](https://github.com/flex-development/mark-tokenizer/issues/220))
- [[`c59d771`](https://github.com/flex-development/mark-tokenizer/commit/c59d771df03edb7f5bc9d8b94d52df00eddfb3a2)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#227](https://github.com/flex-development/mark-tokenizer/issues/227))
- [[`a34ce83`](https://github.com/flex-development/mark-tokenizer/commit/a34ce83665d1cfde0cb031eddf689577affd2477)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#230](https://github.com/flex-development/mark-tokenizer/issues/230))
- [[`5c51113`](https://github.com/flex-development/mark-tokenizer/commit/5c51113da911a6620ecdd1b2319b6ce6cd347931)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#256](https://github.com/flex-development/mark-tokenizer/issues/256))
- [[`d2172ba`](https://github.com/flex-development/mark-tokenizer/commit/d2172ba8c60936b5b8969d47c5c79c553105f2b4)] **deps-dev:** Bump typescript from 5.8.2 to 5.8.3 ([#159](https://github.com/flex-development/mark-tokenizer/issues/159))
- [[`1da9863`](https://github.com/flex-development/mark-tokenizer/commit/1da98633ceac4df88dc6ca3108dc6862dc65305b)] **deps:** Bump debug from 4.4.0 to 4.4.1 ([#204](https://github.com/flex-development/mark-tokenizer/issues/204))
- [[`4b919d4`](https://github.com/flex-development/mark-tokenizer/commit/4b919d430b3d7a0f226e815e4c132a644480e3b7)] **deps:** bump js-yaml from 4.1.0 to 4.1.1 ([#281](https://github.com/flex-development/mark-tokenizer/issues/281))
- [[`25d4b1a`](https://github.com/flex-development/mark-tokenizer/commit/25d4b1a3ca10efb2c1cfab39e47bb198672bd415)] **deps:** bump lodash from 4.17.21 to 4.17.23 ([#300](https://github.com/flex-development/mark-tokenizer/issues/300))
- [[`3e518e5`](https://github.com/flex-development/mark-tokenizer/commit/3e518e5ae43e24b27a9c216ae54721263a2593d0)] **deps:** bump mdast-util-to-hast from 13.2.0 to 13.2.1 ([#286](https://github.com/flex-development/mark-tokenizer/issues/286))
- [[`096f93a`](https://github.com/flex-development/mark-tokenizer/commit/096f93a6f6986f2b8febcbb95f3a1d3715f1bcd0)] **deps:** bump rollup from 4.35.0 to 4.59.0 ([#305](https://github.com/flex-development/mark-tokenizer/issues/305))
- [[`1b6a2b8`](https://github.com/flex-development/mark-tokenizer/commit/1b6a2b8617cbeb50913d002c55e1edb2cf8ce803)] **deps:** bump validator from 13.11.0 to 13.15.20 ([#278](https://github.com/flex-development/mark-tokenizer/issues/278))
- [[`5e7a832`](https://github.com/flex-development/mark-tokenizer/commit/5e7a8327af456322041d38ac66545048f3b2759f)] **deps:** bump validator from 13.15.20 to 13.15.23 ([#287](https://github.com/flex-development/mark-tokenizer/issues/287))
- [[`afeb905`](https://github.com/flex-development/mark-tokenizer/commit/afeb90584ed9bf7b7699da5b89ecef5c37d6745d)] **deps:** Bump vite from 6.2.3 to 6.2.4 ([#152](https://github.com/flex-development/mark-tokenizer/issues/152))
- [[`e67e6dc`](https://github.com/flex-development/mark-tokenizer/commit/e67e6dc5d15afb3fc1b12fd76f7beff5f517017f)] **deps:** Bump vite from 6.2.4 to 6.2.5 ([#157](https://github.com/flex-development/mark-tokenizer/issues/157))
- [[`71bf1ab`](https://github.com/flex-development/mark-tokenizer/commit/71bf1ab8e6ffbe3e9c425b82d3a2781fb6ef85d6)] **deps:** Bump vite from 6.2.5 to 6.2.6 ([#168](https://github.com/flex-development/mark-tokenizer/issues/168))

### :robot: Continuous Integration

- [[`ce240cb`](https://github.com/flex-development/mark-tokenizer/commit/ce240cbc0d2014b37087ed7efb79a7a5e2cb0d4a)] **deps:** bump actions/add-to-project from 1.0.2 to 2.0.0 ([#327](https://github.com/flex-development/mark-tokenizer/issues/327))
- [[`4a5ee0e`](https://github.com/flex-development/mark-tokenizer/commit/4a5ee0e52b917d06bf2d5fefb960c15fb806b71c)] **deps:** Bump actions/cache from 4.2.3 to 4.2.4 ([#250](https://github.com/flex-development/mark-tokenizer/issues/250))
- [[`abda7de`](https://github.com/flex-development/mark-tokenizer/commit/abda7de82bc12a0dc4cc84f76e73e355ab8e229e)] **deps:** bump actions/cache from 4.2.4 to 4.3.0 ([#274](https://github.com/flex-development/mark-tokenizer/issues/274))
- [[`8fff496`](https://github.com/flex-development/mark-tokenizer/commit/8fff496bd5a365217616e3ef31524aaa38e0bf71)] **deps:** bump actions/cache from 4.3.0 to 5.0.0 ([#294](https://github.com/flex-development/mark-tokenizer/issues/294))
- [[`d63f790`](https://github.com/flex-development/mark-tokenizer/commit/d63f7901549db3938a033d2c47a5dde147675248)] **deps:** bump actions/cache from 5.0.0 to 5.0.1 ([#296](https://github.com/flex-development/mark-tokenizer/issues/296))
- [[`a5cb73b`](https://github.com/flex-development/mark-tokenizer/commit/a5cb73b5a211a01f6ed5916dca74ffe5d0b8d883)] **deps:** bump actions/cache from 5.0.1 to 5.0.2 ([#299](https://github.com/flex-development/mark-tokenizer/issues/299))
- [[`70db59e`](https://github.com/flex-development/mark-tokenizer/commit/70db59e9f7e8ce0dfc893a4be5a529bd8d775da3)] **deps:** bump actions/cache from 5.0.2 to 5.0.3 ([#303](https://github.com/flex-development/mark-tokenizer/issues/303))
- [[`d10e99f`](https://github.com/flex-development/mark-tokenizer/commit/d10e99f4b457253e367c5e17940a3b15aead3586)] **deps:** bump actions/cache from 5.0.3 to 5.0.4 ([#310](https://github.com/flex-development/mark-tokenizer/issues/310))
- [[`193eb61`](https://github.com/flex-development/mark-tokenizer/commit/193eb615f88d0b3f7daf335e3ae555804b39d67d)] **deps:** bump actions/cache from 5.0.4 to 5.0.5 ([#322](https://github.com/flex-development/mark-tokenizer/issues/322))
- [[`959f5b1`](https://github.com/flex-development/mark-tokenizer/commit/959f5b1ce67c8c8b3cf07015e84445fb5aef4b32)] **deps:** Bump actions/checkout from 4.2.2 to 5.0.0 ([#253](https://github.com/flex-development/mark-tokenizer/issues/253))
- [[`a56503b`](https://github.com/flex-development/mark-tokenizer/commit/a56503bd54ea806c9710613c8e9f314790bc6a74)] **deps:** bump actions/checkout from 5.0.0 to 5.0.1 ([#282](https://github.com/flex-development/mark-tokenizer/issues/282))
- [[`0639cb5`](https://github.com/flex-development/mark-tokenizer/commit/0639cb5a8ba7032c9bd0dd053b4d5bf8793244ae)] **deps:** bump actions/checkout from 5.0.1 to 6.0.0 ([#284](https://github.com/flex-development/mark-tokenizer/issues/284))
- [[`6679a2a`](https://github.com/flex-development/mark-tokenizer/commit/6679a2a2a91b1e3d93aca2324545fd62f2302e48)] **deps:** bump actions/checkout from 6.0.0 to 6.0.1 ([#289](https://github.com/flex-development/mark-tokenizer/issues/289))
- [[`c33b2d4`](https://github.com/flex-development/mark-tokenizer/commit/c33b2d4b29c32ecffb2faae63fefd739404048e7)] **deps:** bump actions/checkout from 6.0.1 to 6.0.2 ([#301](https://github.com/flex-development/mark-tokenizer/issues/301))
- [[`7415a13`](https://github.com/flex-development/mark-tokenizer/commit/7415a13ba1d202f775ec291fae782921afaae115)] **deps:** Bump actions/create-github-app-token from 1.11.7 to 1.12.0 ([#146](https://github.com/flex-development/mark-tokenizer/issues/146))
- [[`1ac4292`](https://github.com/flex-development/mark-tokenizer/commit/1ac429297220b1bb1c1c15abacc86ec71c1fa2fd)] **deps:** Bump actions/create-github-app-token from 1.12.0 to 2.0.2 ([#154](https://github.com/flex-development/mark-tokenizer/issues/154))
- [[`e7c1fe8`](https://github.com/flex-development/mark-tokenizer/commit/e7c1fe856abeb6bfe67dcebb0c8f70798e763627)] **deps:** Bump actions/create-github-app-token from 2.0.2 to 2.0.3 ([#190](https://github.com/flex-development/mark-tokenizer/issues/190))
- [[`02d8522`](https://github.com/flex-development/mark-tokenizer/commit/02d8522beb8b9683fc7af996fb6380145fa82e70)] **deps:** Bump actions/create-github-app-token from 2.0.3 to 2.0.6 ([#192](https://github.com/flex-development/mark-tokenizer/issues/192))
- [[`4427d16`](https://github.com/flex-development/mark-tokenizer/commit/4427d162468d0834f5a1828ca31b065bcbfb1c4d)] **deps:** Bump actions/create-github-app-token from 2.0.6 to 2.1.1 ([#254](https://github.com/flex-development/mark-tokenizer/issues/254))
- [[`2f974dc`](https://github.com/flex-development/mark-tokenizer/commit/2f974dc3f471fff1dda1c17f25d14a0a12b4b84a)] **deps:** bump actions/create-github-app-token from 2.1.1 to 2.1.4 ([#271](https://github.com/flex-development/mark-tokenizer/issues/271))
- [[`533f2bb`](https://github.com/flex-development/mark-tokenizer/commit/533f2bbd9fd2a1301e3af9a07fbb1d70a63f0d99)] **deps:** bump actions/create-github-app-token from 2.1.4 to 2.2.0 ([#285](https://github.com/flex-development/mark-tokenizer/issues/285))
- [[`a5a5f51`](https://github.com/flex-development/mark-tokenizer/commit/a5a5f5178175f3f58fac94371d118dc99d933a11)] **deps:** bump actions/create-github-app-token from 2.2.0 to 2.2.1 ([#291](https://github.com/flex-development/mark-tokenizer/issues/291))
- [[`18383ac`](https://github.com/flex-development/mark-tokenizer/commit/18383ac6e0e34dda9372d10a428040fc3943a422)] **deps:** bump actions/create-github-app-token from 2.2.1 to 3.0.0 ([#309](https://github.com/flex-development/mark-tokenizer/issues/309))
- [[`25678d5`](https://github.com/flex-development/mark-tokenizer/commit/25678d5d9be262b6175462bae6cc71dc3b5502fa)] **deps:** bump actions/create-github-app-token from 3.0.0 to 3.1.1 ([#320](https://github.com/flex-development/mark-tokenizer/issues/320))
- [[`70e4f9b`](https://github.com/flex-development/mark-tokenizer/commit/70e4f9bf13116273ba59a8ea82ebd943139ccb89)] **deps:** bump actions/create-github-app-token from 3.1.1 to 3.2.0 ([#328](https://github.com/flex-development/mark-tokenizer/issues/328))
- [[`7fae9c7`](https://github.com/flex-development/mark-tokenizer/commit/7fae9c72932864b2e697c9b1edc3bfdc7ef3e85e)] **deps:** bump actions/github-script from 7.0.1 to 8.0.0 ([#267](https://github.com/flex-development/mark-tokenizer/issues/267))
- [[`2d37fff`](https://github.com/flex-development/mark-tokenizer/commit/2d37fff617e55373b500c6c1f5fc35e0c9b44090)] **deps:** bump actions/github-script from 8.0.0 to 9.0.0 ([#319](https://github.com/flex-development/mark-tokenizer/issues/319))
- [[`2091fbe`](https://github.com/flex-development/mark-tokenizer/commit/2091fbe462cbdd95c14b31f84d90875b9e098e1b)] **deps:** Bump actions/setup-node from 4.3.0 to 4.4.0 ([#169](https://github.com/flex-development/mark-tokenizer/issues/169))
- [[`36b2dfc`](https://github.com/flex-development/mark-tokenizer/commit/36b2dfcae1bfd844b68d8e88449b40482ba18c6d)] **deps:** bump actions/setup-node from 4.4.0 to 6.0.0 ([#275](https://github.com/flex-development/mark-tokenizer/issues/275))
- [[`8bb0c06`](https://github.com/flex-development/mark-tokenizer/commit/8bb0c06bb4fc18bde36ba46d86832853e640c047)] **deps:** bump actions/setup-node from 6.0.0 to 6.1.0 ([#288](https://github.com/flex-development/mark-tokenizer/issues/288))
- [[`3e7091f`](https://github.com/flex-development/mark-tokenizer/commit/3e7091fcad07ee5be58279341ea4fe8dd6b65b1b)] **deps:** bump actions/setup-node from 6.1.0 to 6.2.0 ([#298](https://github.com/flex-development/mark-tokenizer/issues/298))
- [[`e095724`](https://github.com/flex-development/mark-tokenizer/commit/e095724f20da04caa27db29a01ea0cb8cc58ae00)] **deps:** bump actions/setup-node from 6.2.0 to 6.3.0 ([#308](https://github.com/flex-development/mark-tokenizer/issues/308))
- [[`2811ac7`](https://github.com/flex-development/mark-tokenizer/commit/2811ac797f053625d7b92f4dafb94a289560bd8a)] **deps:** bump actions/setup-node from 6.3.0 to 6.4.0 ([#323](https://github.com/flex-development/mark-tokenizer/issues/323))
- [[`abd1225`](https://github.com/flex-development/mark-tokenizer/commit/abd12258613740569f805105e19f8ac2b0f9aa3d)] **deps:** bump actions/upload-artifact from 4.6.2 to 5.0.0 ([#277](https://github.com/flex-development/mark-tokenizer/issues/277))
- [[`707f8ea`](https://github.com/flex-development/mark-tokenizer/commit/707f8ea261528dde89bf465805fc61edd69db15f)] **deps:** bump actions/upload-artifact from 5.0.0 to 6.0.0 ([#295](https://github.com/flex-development/mark-tokenizer/issues/295))
- [[`7b18066`](https://github.com/flex-development/mark-tokenizer/commit/7b180664c035844a52a85187df0100a25aa686b4)] **deps:** bump actions/upload-artifact from 6.0.0 to 7.0.0 ([#306](https://github.com/flex-development/mark-tokenizer/issues/306))
- [[`0f6ce53`](https://github.com/flex-development/mark-tokenizer/commit/0f6ce5331f885c6cd8925a15b231eb8cb8cb8fd1)] **deps:** bump actions/upload-artifact from 7.0.0 to 7.0.1 ([#321](https://github.com/flex-development/mark-tokenizer/issues/321))
- [[`6bee6fd`](https://github.com/flex-development/mark-tokenizer/commit/6bee6fd0b7428821cbfd70a6504e0e89d3b102d6)] **deps:** bump andstor/file-existence-action from 3.0.0 to 3.1.0 ([#316](https://github.com/flex-development/mark-tokenizer/issues/316))
- [[`a7b6e4d`](https://github.com/flex-development/mark-tokenizer/commit/a7b6e4d73b095b69f42704d99efb3d82e9a1f0ce)] **deps:** Bump codecov/codecov-action from 5.4.0 to 5.4.2 ([#170](https://github.com/flex-development/mark-tokenizer/issues/170))
- [[`65351f0`](https://github.com/flex-development/mark-tokenizer/commit/65351f0226b1c4db896ec4cbf69d2d6ee3346f8a)] **deps:** Bump codecov/codecov-action from 5.4.2 to 5.4.3 ([#209](https://github.com/flex-development/mark-tokenizer/issues/209))
- [[`e25f9d1`](https://github.com/flex-development/mark-tokenizer/commit/e25f9d1308f7b9f5ccf907d3f790b52f270771cb)] **deps:** Bump codecov/codecov-action from 5.4.3 to 5.5.0 ([#264](https://github.com/flex-development/mark-tokenizer/issues/264))
- [[`a7496fd`](https://github.com/flex-development/mark-tokenizer/commit/a7496fd4b669351b176508f56922fd0bbd3947d2)] **deps:** bump codecov/codecov-action from 5.5.0 to 5.5.1 ([#268](https://github.com/flex-development/mark-tokenizer/issues/268))
- [[`512a4c1`](https://github.com/flex-development/mark-tokenizer/commit/512a4c1c59c4fffa096c2a9c2936b344b121c3c4)] **deps:** bump codecov/codecov-action from 5.5.1 to 5.5.2 ([#292](https://github.com/flex-development/mark-tokenizer/issues/292))
- [[`920c467`](https://github.com/flex-development/mark-tokenizer/commit/920c4676881fc6067d928baa935ba34a04e9bd5b)] **deps:** bump codecov/codecov-action from 5.5.2 to 5.5.3 ([#311](https://github.com/flex-development/mark-tokenizer/issues/311))
- [[`f68c7ea`](https://github.com/flex-development/mark-tokenizer/commit/f68c7ea0be1e73a3db14b557e1528eb006e56b0b)] **deps:** bump codecov/codecov-action from 5.5.3 to 6.0.0 ([#314](https://github.com/flex-development/mark-tokenizer/issues/314))
- [[`eda9f14`](https://github.com/flex-development/mark-tokenizer/commit/eda9f1400dbd58f4873e39676d8241ab88dfd973)] **deps:** Bump crazy-max/ghaction-import-gpg from 6.2.0 to 6.3.0 ([#148](https://github.com/flex-development/mark-tokenizer/issues/148))
- [[`626c06e`](https://github.com/flex-development/mark-tokenizer/commit/626c06e3146ae244329e48ee1b86aac46b8dc127)] **deps:** bump crazy-max/ghaction-import-gpg from 6.3.0 to 7.0.0 ([#307](https://github.com/flex-development/mark-tokenizer/issues/307))
- [[`a13a202`](https://github.com/flex-development/mark-tokenizer/commit/a13a202b63b850acd5d3aeaec282a4d95d0af22a)] **deps:** Bump GitGuardian/ggshield-action from 1.37.0 to 1.38.0 ([#147](https://github.com/flex-development/mark-tokenizer/issues/147))
- [[`41280ad`](https://github.com/flex-development/mark-tokenizer/commit/41280adb82602d0943fa313a28bbafc988239c38)] **deps:** Bump GitGuardian/ggshield-action from 1.38.0 to 1.39.0 ([#188](https://github.com/flex-development/mark-tokenizer/issues/188))
- [[`950d496`](https://github.com/flex-development/mark-tokenizer/commit/950d496fd29e8489c6e6559b16cbd7e7879bee99)] **deps:** Bump GitGuardian/ggshield-action from 1.39.0 to 1.41.0 ([#240](https://github.com/flex-development/mark-tokenizer/issues/240))
- [[`62e264a`](https://github.com/flex-development/mark-tokenizer/commit/62e264a2e924d954bd681aa91a3b2accdbe56227)] **deps:** Bump GitGuardian/ggshield-action from 1.41.0 to 1.42.0 ([#249](https://github.com/flex-development/mark-tokenizer/issues/249))
- [[`f4bf9f8`](https://github.com/flex-development/mark-tokenizer/commit/f4bf9f8b0f69e5db51d17a7d94c8fa9d9e6b0c68)] **deps:** bump GitGuardian/ggshield-action from 1.42.0 to 1.43.0 ([#265](https://github.com/flex-development/mark-tokenizer/issues/265))
- [[`3889d58`](https://github.com/flex-development/mark-tokenizer/commit/3889d5860811675692d9ba1e807ab8dda6a9cc61)] **deps:** bump GitGuardian/ggshield-action from 1.43.0 to 1.44.0 ([#279](https://github.com/flex-development/mark-tokenizer/issues/279))
- [[`db76cd0`](https://github.com/flex-development/mark-tokenizer/commit/db76cd03c4621ab7f576b1d0fec18fba69f34d3a)] **deps:** bump GitGuardian/ggshield-action from 1.44.0 to 1.45.0 ([#283](https://github.com/flex-development/mark-tokenizer/issues/283))
- [[`68cff29`](https://github.com/flex-development/mark-tokenizer/commit/68cff295bc65ba9042ef5ef8f6aafba0f892427b)] **deps:** bump GitGuardian/ggshield-action from 1.45.0 to 1.46.0 ([#297](https://github.com/flex-development/mark-tokenizer/issues/297))
- [[`8bae128`](https://github.com/flex-development/mark-tokenizer/commit/8bae128582d8f165a64364500628e7e29e2f6e2f)] **deps:** bump GitGuardian/ggshield-action from 1.46.0 to 1.47.0 ([#302](https://github.com/flex-development/mark-tokenizer/issues/302))
- [[`308dba3`](https://github.com/flex-development/mark-tokenizer/commit/308dba3e4f36a389c365e81d1c35c1f4814fbc7e)] **deps:** bump GitGuardian/ggshield-action from 1.47.0 to 1.48.0 ([#304](https://github.com/flex-development/mark-tokenizer/issues/304))
- [[`664c6ef`](https://github.com/flex-development/mark-tokenizer/commit/664c6ef9658a150ce7e94341fcfedb555c4948ce)] **deps:** bump GitGuardian/ggshield-action from 1.48.0 to 1.49.0 ([#315](https://github.com/flex-development/mark-tokenizer/issues/315))
- [[`85063ce`](https://github.com/flex-development/mark-tokenizer/commit/85063cef550420b3f46d0d698d1020c9d6eb5afd)] **deps:** bump GitGuardian/ggshield-action from 1.49.0 to 1.50.0 ([#324](https://github.com/flex-development/mark-tokenizer/issues/324))
- [[`9b5411b`](https://github.com/flex-development/mark-tokenizer/commit/9b5411b691f92a50e06bbf78bc5fbff4910baa89)] **deps:** bump GitGuardian/ggshield-action from 1.50.0 to 1.50.3 ([#326](https://github.com/flex-development/mark-tokenizer/issues/326))
- [[`90b960f`](https://github.com/flex-development/mark-tokenizer/commit/90b960f5cb1e361ed29f9220b51e19d7e077da8e)] **deps:** bump kaisugi/action-regex-match from 1.0.1 to 1.0.2 ([#290](https://github.com/flex-development/mark-tokenizer/issues/290))
- [[`86dae7e`](https://github.com/flex-development/mark-tokenizer/commit/86dae7e7af478af05885a86688c4d82861ec8c52)] **deps:** bump octokit/graphql-action from 2.3.2 to 3.0.0 ([#280](https://github.com/flex-development/mark-tokenizer/issues/280))
- [[`ef29917`](https://github.com/flex-development/mark-tokenizer/commit/ef299172e33da8dc0c794e488b30163349edd527)] **deps:** bump octokit/graphql-action from 3.0.0 to 3.0.2 ([#293](https://github.com/flex-development/mark-tokenizer/issues/293))

### :house_with_garden: Housekeeping

- [[`af7d16c`](https://github.com/flex-development/mark-tokenizer/commit/af7d16c4f99e58fda055bb29916f8746df581df3)] remove `.npmrc`

## [1.0.0-alpha.2](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2026-05-14)

### :package: Build

- [[`adc0540`](https://github.com/flex-development/mark-tokenizer/commit/adc0540bb94b65e6b23bd843551d71878199e737)] bundle
- [[`6357cb1`](https://github.com/flex-development/mark-tokenizer/commit/6357cb15a3bbcbfaac737a6076900ab32a068cf0)] **deps-dev:** Bump @arethetypeswrong/cli from 0.17.4 to 0.18.0 ([#199](https://github.com/flex-development/mark-tokenizer/issues/199))
- [[`e6c7338`](https://github.com/flex-development/mark-tokenizer/commit/e6c733827977c1037ed7d4fa32ea6613cd1de0bc)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.0 to 0.18.1 ([#201](https://github.com/flex-development/mark-tokenizer/issues/201))
- [[`e3f97bb`](https://github.com/flex-development/mark-tokenizer/commit/e3f97bb270ad159c2bd07642bdaf4fcdc9d3f414)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.1 to 0.18.2 ([#231](https://github.com/flex-development/mark-tokenizer/issues/231))
- [[`be1b223`](https://github.com/flex-development/mark-tokenizer/commit/be1b2232b431f0b2028d3c91222efa5cd56cd9fb)] **deps-dev:** Bump @flex-development/colors from 1.0.1 to 1.0.2 in the flex-development group ([#221](https://github.com/flex-development/mark-tokenizer/issues/221))
- [[`9d57038`](https://github.com/flex-development/mark-tokenizer/commit/9d570384f3a0183d42ae547ad3158299b36ecde9)] **deps-dev:** Bump @flex-development/pathe from 4.0.1 to 4.0.2 in the flex-development group ([#222](https://github.com/flex-development/mark-tokenizer/issues/222))
- [[`542d4ed`](https://github.com/flex-development/mark-tokenizer/commit/542d4edfc8427ae4eeea8bdc77369ac1580bda99)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.2.0 to 4.4.0 ([#218](https://github.com/flex-development/mark-tokenizer/issues/218))
- [[`3d50b0a`](https://github.com/flex-development/mark-tokenizer/commit/3d50b0a1fa1ee117ed84a42ac1f878e9b83bfaec)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.0 to 4.4.1 ([#228](https://github.com/flex-development/mark-tokenizer/issues/228))
- [[`68b77d5`](https://github.com/flex-development/mark-tokenizer/commit/68b77d5266b731df828a8ae727695989ca4246f5)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.1 to 5.2.3 ([#259](https://github.com/flex-development/mark-tokenizer/issues/259))
- [[`c549a3c`](https://github.com/flex-development/mark-tokenizer/commit/c549a3cf27d6723b30b99c4745d10bd034883e60)] **deps-dev:** Bump chai from 5.2.0 to 5.2.1 ([#258](https://github.com/flex-development/mark-tokenizer/issues/258))
- [[`442ba86`](https://github.com/flex-development/mark-tokenizer/commit/442ba86efc0e6b0dd15962d53ea42f9497210e23)] **deps-dev:** Bump cspell from 8.17.5 to 8.18.0 ([#144](https://github.com/flex-development/mark-tokenizer/issues/144))
- [[`48e6ba0`](https://github.com/flex-development/mark-tokenizer/commit/48e6ba0ed6e1b8ecd36062abfb86690c53e0c352)] **deps-dev:** Bump cspell from 8.18.0 to 8.18.1 ([#151](https://github.com/flex-development/mark-tokenizer/issues/151))
- [[`c17c2b2`](https://github.com/flex-development/mark-tokenizer/commit/c17c2b219ff1539fad293863bc5848671ee7fea4)] **deps-dev:** Bump cspell from 8.18.1 to 8.19.0 ([#172](https://github.com/flex-development/mark-tokenizer/issues/172))
- [[`beec3ee`](https://github.com/flex-development/mark-tokenizer/commit/beec3eee20866f1087cf68378197544814fbc005)] **deps-dev:** Bump cspell from 8.19.0 to 8.19.2 ([#174](https://github.com/flex-development/mark-tokenizer/issues/174))
- [[`dde7712`](https://github.com/flex-development/mark-tokenizer/commit/dde7712a753e71517ccc5b6fe33d1a608cc4ed54)] **deps-dev:** Bump cspell from 8.19.2 to 8.19.3 ([#187](https://github.com/flex-development/mark-tokenizer/issues/187))
- [[`576c843`](https://github.com/flex-development/mark-tokenizer/commit/576c843fcf3db6d012e84fd788e9fe4b19da4ab9)] **deps-dev:** Bump cspell from 8.19.3 to 9.0.0 ([#193](https://github.com/flex-development/mark-tokenizer/issues/193))
- [[`b9c3cc9`](https://github.com/flex-development/mark-tokenizer/commit/b9c3cc939878321682e7bee474f5878fbe57c5f8)] **deps-dev:** Bump cspell from 9.0.0 to 9.0.1 ([#198](https://github.com/flex-development/mark-tokenizer/issues/198))
- [[`f39dbe8`](https://github.com/flex-development/mark-tokenizer/commit/f39dbe8ce973ca7257beb42a438b139ff9d7fc63)] **deps-dev:** Bump cspell from 9.0.1 to 9.0.2 ([#214](https://github.com/flex-development/mark-tokenizer/issues/214))
- [[`df20df4`](https://github.com/flex-development/mark-tokenizer/commit/df20df477f5d1319d4d8d87f07c6b4c5ddd9052f)] **deps-dev:** Bump cspell from 9.0.2 to 9.2.0 ([#246](https://github.com/flex-development/mark-tokenizer/issues/246))
- [[`40d0b02`](https://github.com/flex-development/mark-tokenizer/commit/40d0b026a3b706f780037c71df25a77b1a66a5b7)] **deps-dev:** Bump dprint from 0.49.1 to 0.50.0 ([#211](https://github.com/flex-development/mark-tokenizer/issues/211))
- [[`5204846`](https://github.com/flex-development/mark-tokenizer/commit/52048463a5a7485125672c68af056048272f6966)] **deps-dev:** Bump dprint from 0.50.0 to 0.50.1 ([#257](https://github.com/flex-development/mark-tokenizer/issues/257))
- [[`41f1380`](https://github.com/flex-development/mark-tokenizer/commit/41f1380d03775fe7462f3b52b0f1dfbb7658e94d)] **deps-dev:** Bump editorconfig from 2.0.1 to 3.0.0 ([#233](https://github.com/flex-development/mark-tokenizer/issues/233))
- [[`e731127`](https://github.com/flex-development/mark-tokenizer/commit/e73112735cc405e578220e30d4a580efb07d4a89)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.3 to 4.2.4 ([#143](https://github.com/flex-development/mark-tokenizer/issues/143))
- [[`a55cb76`](https://github.com/flex-development/mark-tokenizer/commit/a55cb76e7b5e60cc7c1d75c9998a9642b0f97c31)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.4 to 4.2.5 ([#145](https://github.com/flex-development/mark-tokenizer/issues/145))
- [[`0495e94`](https://github.com/flex-development/mark-tokenizer/commit/0495e949b2ca30c8f3428b6caaa3e96d4dc92f9a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.5 to 4.3.1 ([#150](https://github.com/flex-development/mark-tokenizer/issues/150))
- [[`fe38ab4`](https://github.com/flex-development/mark-tokenizer/commit/fe38ab46a23ebd7325e5b2716e72338b18b9abd0)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.1 to 4.3.2 ([#165](https://github.com/flex-development/mark-tokenizer/issues/165))
- [[`580ed64`](https://github.com/flex-development/mark-tokenizer/commit/580ed64baa8620d78932b73df9ab9b7bff65e795)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.2 to 4.3.3 ([#176](https://github.com/flex-development/mark-tokenizer/issues/176))
- [[`5bc896d`](https://github.com/flex-development/mark-tokenizer/commit/5bc896dd245a8026b46d483c383b769c298b5a7a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.3 to 4.3.4 ([#179](https://github.com/flex-development/mark-tokenizer/issues/179))
- [[`f516a42`](https://github.com/flex-development/mark-tokenizer/commit/f516a428480a14c417d66d29528986879a4bd297)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.4 to 4.3.5 ([#212](https://github.com/flex-development/mark-tokenizer/issues/212))
- [[`0061c4c`](https://github.com/flex-development/mark-tokenizer/commit/0061c4c42e81f3cd61e63e47b84b8cd6f4e84267)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.5 to 4.4.1 ([#217](https://github.com/flex-development/mark-tokenizer/issues/217))
- [[`78de4dd`](https://github.com/flex-development/mark-tokenizer/commit/78de4dd1060b1f918b20ea65aaefeaa075ed8246)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.1 to 4.4.2 ([#226](https://github.com/flex-development/mark-tokenizer/issues/226))
- [[`8674751`](https://github.com/flex-development/mark-tokenizer/commit/8674751c146c85889d16a7bb6a509c0b44b682aa)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.2 to 4.4.3 ([#229](https://github.com/flex-development/mark-tokenizer/issues/229))
- [[`15c8712`](https://github.com/flex-development/mark-tokenizer/commit/15c87128e3098fa3133892bfb41562455e36efa5)] **deps-dev:** Bump eslint-mdx from 3.3.1 to 3.3.2 ([#155](https://github.com/flex-development/mark-tokenizer/issues/155))
- [[`c9ba783`](https://github.com/flex-development/mark-tokenizer/commit/c9ba783677de5c1b5e4ab19ecc0d03bdeff53478)] **deps-dev:** Bump eslint-mdx from 3.3.2 to 3.4.0 ([#161](https://github.com/flex-development/mark-tokenizer/issues/161))
- [[`84cd45a`](https://github.com/flex-development/mark-tokenizer/commit/84cd45ac0b51fadd8360ba610d938dc8e4f98d26)] **deps-dev:** Bump eslint-mdx from 3.4.0 to 3.4.1 ([#181](https://github.com/flex-development/mark-tokenizer/issues/181))
- [[`548197c`](https://github.com/flex-development/mark-tokenizer/commit/548197c860c1807daf632e05e22efc039a6d38fd)] **deps-dev:** Bump eslint-mdx from 3.4.1 to 3.4.2 ([#208](https://github.com/flex-development/mark-tokenizer/issues/208))
- [[`af49ba2`](https://github.com/flex-development/mark-tokenizer/commit/af49ba22d301efa81156d6f21c68ffa067536909)] **deps-dev:** Bump eslint-mdx from 3.4.2 to 3.6.0 ([#241](https://github.com/flex-development/mark-tokenizer/issues/241))
- [[`290f868`](https://github.com/flex-development/mark-tokenizer/commit/290f868ec5d7707f672b6cef9bf9b1e441c6b6b9)] **deps-dev:** Bump eslint-mdx from 3.6.0 to 3.6.2 ([#261](https://github.com/flex-development/mark-tokenizer/issues/261))
- [[`138d2bb`](https://github.com/flex-development/mark-tokenizer/commit/138d2bb6038da87a5bda8def41e35e6dcb4247bf)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.10 to 50.6.11 ([#184](https://github.com/flex-development/mark-tokenizer/issues/184))
- [[`0c4ff79`](https://github.com/flex-development/mark-tokenizer/commit/0c4ff7933c1f49f3020f3e2c4382a127be55691e)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.11 to 50.6.14 ([#202](https://github.com/flex-development/mark-tokenizer/issues/202))
- [[`db71656`](https://github.com/flex-development/mark-tokenizer/commit/db716566ca20e5628fca5ca18fa89caeaeaf7b5d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.14 to 50.6.16 ([#205](https://github.com/flex-development/mark-tokenizer/issues/205))
- [[`d7324d9`](https://github.com/flex-development/mark-tokenizer/commit/d7324d9a578f423c0ae86f18c641804c3582d83d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.16 to 50.6.17 ([#206](https://github.com/flex-development/mark-tokenizer/issues/206))
- [[`1761760`](https://github.com/flex-development/mark-tokenizer/commit/1761760b16e2d8a551fe2427afd43650abe4b9fc)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.17 to 50.7.1 ([#223](https://github.com/flex-development/mark-tokenizer/issues/223))
- [[`3a55802`](https://github.com/flex-development/mark-tokenizer/commit/3a55802a7be752bba4efb2488a1676b7d699fffe)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.9 to 50.6.10 ([#183](https://github.com/flex-development/mark-tokenizer/issues/183))
- [[`7a9ac91`](https://github.com/flex-development/mark-tokenizer/commit/7a9ac91fbad962342fe15674f282cd7db4227c2b)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.7.1 to 50.8.0 ([#232](https://github.com/flex-development/mark-tokenizer/issues/232))
- [[`ed953a7`](https://github.com/flex-development/mark-tokenizer/commit/ed953a7c703a35b81a3a47c037c91f4c06530b22)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.8.0 to 51.0.1 ([#234](https://github.com/flex-development/mark-tokenizer/issues/234))
- [[`f0d1ce0`](https://github.com/flex-development/mark-tokenizer/commit/f0d1ce093359a375fa50feb1b9de918e2df607cb)] **deps-dev:** Bump eslint-plugin-jsdoc from 51.0.1 to 54.1.0 ([#260](https://github.com/flex-development/mark-tokenizer/issues/260))
- [[`cd62b99`](https://github.com/flex-development/mark-tokenizer/commit/cd62b992f4d36e97c5740cccf453ad46366098de)] **deps-dev:** Bump eslint-plugin-jsonc from 2.20.0 to 2.20.1 ([#215](https://github.com/flex-development/mark-tokenizer/issues/215))
- [[`d34646c`](https://github.com/flex-development/mark-tokenizer/commit/d34646c94af479f23e2ba0fcfd4ec22f77ebf951)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.1 to 3.3.2 ([#156](https://github.com/flex-development/mark-tokenizer/issues/156))
- [[`9ffea73`](https://github.com/flex-development/mark-tokenizer/commit/9ffea730861beb956b851330c8d2660a6ea791f1)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.2 to 3.4.0 ([#162](https://github.com/flex-development/mark-tokenizer/issues/162))
- [[`fceed53`](https://github.com/flex-development/mark-tokenizer/commit/fceed5301430d54a057ab4ef0e9a13fe4375515d)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.0 to 3.4.1 ([#182](https://github.com/flex-development/mark-tokenizer/issues/182))
- [[`e23376e`](https://github.com/flex-development/mark-tokenizer/commit/e23376ed47bd7f141314c35401365085b6df65c9)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.1 to 3.4.2 ([#207](https://github.com/flex-development/mark-tokenizer/issues/207))
- [[`ad5e31b`](https://github.com/flex-development/mark-tokenizer/commit/ad5e31bea55c0d129dc143e6bf4d5282206036f5)] **deps-dev:** Bump eslint-plugin-unicorn from 58.0.0 to 59.0.0 ([#186](https://github.com/flex-development/mark-tokenizer/issues/186))
- [[`b6f0087`](https://github.com/flex-development/mark-tokenizer/commit/b6f0087a23a085f312bfa49dc5ad6f2c6be4ac3d)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.0 to 59.0.1 ([#195](https://github.com/flex-development/mark-tokenizer/issues/195))
- [[`d5d033d`](https://github.com/flex-development/mark-tokenizer/commit/d5d033d7cdfae08220a33f51f397b5b31ada1b7b)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.1 to 60.0.0 ([#255](https://github.com/flex-development/mark-tokenizer/issues/255))
- [[`e94fa1b`](https://github.com/flex-development/mark-tokenizer/commit/e94fa1be62ef04b13c127a3132fe45e99ccbe57d)] **deps-dev:** Bump eslint-plugin-yml from 1.17.0 to 1.18.0 ([#180](https://github.com/flex-development/mark-tokenizer/issues/180))
- [[`9a86d12`](https://github.com/flex-development/mark-tokenizer/commit/9a86d1216b80e27c986946b2d18d2d19db1006c2)] **deps-dev:** Bump globals from 16.0.0 to 16.1.0 ([#196](https://github.com/flex-development/mark-tokenizer/issues/196))
- [[`1ca9923`](https://github.com/flex-development/mark-tokenizer/commit/1ca99234dbab61d5e15a8e7d7d0ddffdc4200e85)] **deps-dev:** Bump globals from 16.1.0 to 16.2.0 ([#216](https://github.com/flex-development/mark-tokenizer/issues/216))
- [[`96e807e`](https://github.com/flex-development/mark-tokenizer/commit/96e807e1b278a321cd1a39e3ba8e431af109f0a4)] **deps-dev:** Bump globals from 16.2.0 to 16.3.0 ([#247](https://github.com/flex-development/mark-tokenizer/issues/247))
- [[`0c13957`](https://github.com/flex-development/mark-tokenizer/commit/0c1395735a194a0493f808957909bbc218d0ae1d)] **deps-dev:** Bump remark-lint-no-unused-definitions from 4.0.1 to 4.0.2 in the remark group ([#167](https://github.com/flex-development/mark-tokenizer/issues/167))
- [[`8010d52`](https://github.com/flex-development/mark-tokenizer/commit/8010d5260281ff5c96e8de27633daa8e8c2427ea)] **deps-dev:** Bump sh-syntax from 0.4.2 to 0.5.1 ([#158](https://github.com/flex-development/mark-tokenizer/issues/158))
- [[`2307a35`](https://github.com/flex-development/mark-tokenizer/commit/2307a352ecb5a17f1db8d331ab63945a594add4b)] **deps-dev:** Bump sh-syntax from 0.5.1 to 0.5.6 ([#166](https://github.com/flex-development/mark-tokenizer/issues/166))
- [[`009e757`](https://github.com/flex-development/mark-tokenizer/commit/009e75775839bda794ccc2322be2859c46ca88f4)] **deps-dev:** Bump sh-syntax from 0.5.6 to 0.5.7 ([#175](https://github.com/flex-development/mark-tokenizer/issues/175))
- [[`c5f421e`](https://github.com/flex-development/mark-tokenizer/commit/c5f421ea17e6a8dd7f373432c27ba68248d914bd)] **deps-dev:** Bump sh-syntax from 0.5.7 to 0.5.8 ([#213](https://github.com/flex-development/mark-tokenizer/issues/213))
- [[`720b319`](https://github.com/flex-development/mark-tokenizer/commit/720b31943b62365296e91fe937aa03b6b9f9cb66)] **deps-dev:** Bump the commitlint group with 2 updates ([#197](https://github.com/flex-development/mark-tokenizer/issues/197))
- [[`cb8a6de`](https://github.com/flex-development/mark-tokenizer/commit/cb8a6de9ae1ff12f8e6a1943692afb02964f13af)] **deps-dev:** Bump the eslint group with 2 updates ([#160](https://github.com/flex-development/mark-tokenizer/issues/160))
- [[`71ed8ae`](https://github.com/flex-development/mark-tokenizer/commit/71ed8aefc99b1c7a17864cb8b50d1d6ce287f3a7)] **deps-dev:** Bump the eslint group with 2 updates ([#173](https://github.com/flex-development/mark-tokenizer/issues/173))
- [[`ceec22c`](https://github.com/flex-development/mark-tokenizer/commit/ceec22c6efebafd1653c7ffc2f9ec92ec35d7c55)] **deps-dev:** Bump the eslint group with 2 updates ([#177](https://github.com/flex-development/mark-tokenizer/issues/177))
- [[`883e221`](https://github.com/flex-development/mark-tokenizer/commit/883e221f4e2b8417dd61dbe5356df2b9c9e3e208)] **deps-dev:** Bump the eslint group with 2 updates ([#191](https://github.com/flex-development/mark-tokenizer/issues/191))
- [[`1f4aa6c`](https://github.com/flex-development/mark-tokenizer/commit/1f4aa6c2d6742182252addc48ce9ba73ace385cd)] **deps-dev:** Bump the eslint group with 2 updates ([#210](https://github.com/flex-development/mark-tokenizer/issues/210))
- [[`26648b7`](https://github.com/flex-development/mark-tokenizer/commit/26648b715d92c46f6295809b165ce10e64bffaa5)] **deps-dev:** Bump the eslint group with 2 updates ([#224](https://github.com/flex-development/mark-tokenizer/issues/224))
- [[`00c6935`](https://github.com/flex-development/mark-tokenizer/commit/00c69359cff08d28769527b845b8b01a06acaedd)] **deps-dev:** Bump the eslint group with 2 updates ([#236](https://github.com/flex-development/mark-tokenizer/issues/236))
- [[`c6cf3ef`](https://github.com/flex-development/mark-tokenizer/commit/c6cf3ef4b762dae74e9edc85640550b048957da9)] **deps-dev:** Bump the eslint group with 2 updates ([#243](https://github.com/flex-development/mark-tokenizer/issues/243))
- [[`e03bd16`](https://github.com/flex-development/mark-tokenizer/commit/e03bd16ab6e9c5a770f76e746752937527c2f347)] **deps-dev:** Bump the remark group with 2 updates ([#164](https://github.com/flex-development/mark-tokenizer/issues/164))
- [[`9e164f5`](https://github.com/flex-development/mark-tokenizer/commit/9e164f5b4f3c7f9bb7d9ae86193e04fbc7425a88)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#153](https://github.com/flex-development/mark-tokenizer/issues/153))
- [[`c9853b5`](https://github.com/flex-development/mark-tokenizer/commit/c9853b5515f5b982c1cd2ce4bb028a4872dad646)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#163](https://github.com/flex-development/mark-tokenizer/issues/163))
- [[`553f03b`](https://github.com/flex-development/mark-tokenizer/commit/553f03bf53642af5c73ae7c69dcb765a606b3aca)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#171](https://github.com/flex-development/mark-tokenizer/issues/171))
- [[`09cdd67`](https://github.com/flex-development/mark-tokenizer/commit/09cdd671db2c1ebd6b6960a892bf7763e5f8a25c)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#178](https://github.com/flex-development/mark-tokenizer/issues/178))
- [[`8aaafff`](https://github.com/flex-development/mark-tokenizer/commit/8aaafffaab6d69019df5b313edb365224237120f)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#185](https://github.com/flex-development/mark-tokenizer/issues/185))
- [[`cafac87`](https://github.com/flex-development/mark-tokenizer/commit/cafac87c039ac14394d874526e4b439a0f9e707b)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#194](https://github.com/flex-development/mark-tokenizer/issues/194))
- [[`a33e327`](https://github.com/flex-development/mark-tokenizer/commit/a33e3271972b8b85d706579239ee5948032577e1)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#203](https://github.com/flex-development/mark-tokenizer/issues/203))
- [[`2ab54e9`](https://github.com/flex-development/mark-tokenizer/commit/2ab54e97f528583454e7b9ecb744776fecafac17)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#220](https://github.com/flex-development/mark-tokenizer/issues/220))
- [[`c59d771`](https://github.com/flex-development/mark-tokenizer/commit/c59d771df03edb7f5bc9d8b94d52df00eddfb3a2)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#227](https://github.com/flex-development/mark-tokenizer/issues/227))
- [[`a34ce83`](https://github.com/flex-development/mark-tokenizer/commit/a34ce83665d1cfde0cb031eddf689577affd2477)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#230](https://github.com/flex-development/mark-tokenizer/issues/230))
- [[`5c51113`](https://github.com/flex-development/mark-tokenizer/commit/5c51113da911a6620ecdd1b2319b6ce6cd347931)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#256](https://github.com/flex-development/mark-tokenizer/issues/256))
- [[`d2172ba`](https://github.com/flex-development/mark-tokenizer/commit/d2172ba8c60936b5b8969d47c5c79c553105f2b4)] **deps-dev:** Bump typescript from 5.8.2 to 5.8.3 ([#159](https://github.com/flex-development/mark-tokenizer/issues/159))
- [[`1da9863`](https://github.com/flex-development/mark-tokenizer/commit/1da98633ceac4df88dc6ca3108dc6862dc65305b)] **deps:** Bump debug from 4.4.0 to 4.4.1 ([#204](https://github.com/flex-development/mark-tokenizer/issues/204))
- [[`4b919d4`](https://github.com/flex-development/mark-tokenizer/commit/4b919d430b3d7a0f226e815e4c132a644480e3b7)] **deps:** bump js-yaml from 4.1.0 to 4.1.1 ([#281](https://github.com/flex-development/mark-tokenizer/issues/281))
- [[`25d4b1a`](https://github.com/flex-development/mark-tokenizer/commit/25d4b1a3ca10efb2c1cfab39e47bb198672bd415)] **deps:** bump lodash from 4.17.21 to 4.17.23 ([#300](https://github.com/flex-development/mark-tokenizer/issues/300))
- [[`3e518e5`](https://github.com/flex-development/mark-tokenizer/commit/3e518e5ae43e24b27a9c216ae54721263a2593d0)] **deps:** bump mdast-util-to-hast from 13.2.0 to 13.2.1 ([#286](https://github.com/flex-development/mark-tokenizer/issues/286))
- [[`096f93a`](https://github.com/flex-development/mark-tokenizer/commit/096f93a6f6986f2b8febcbb95f3a1d3715f1bcd0)] **deps:** bump rollup from 4.35.0 to 4.59.0 ([#305](https://github.com/flex-development/mark-tokenizer/issues/305))
- [[`1b6a2b8`](https://github.com/flex-development/mark-tokenizer/commit/1b6a2b8617cbeb50913d002c55e1edb2cf8ce803)] **deps:** bump validator from 13.11.0 to 13.15.20 ([#278](https://github.com/flex-development/mark-tokenizer/issues/278))
- [[`5e7a832`](https://github.com/flex-development/mark-tokenizer/commit/5e7a8327af456322041d38ac66545048f3b2759f)] **deps:** bump validator from 13.15.20 to 13.15.23 ([#287](https://github.com/flex-development/mark-tokenizer/issues/287))
- [[`afeb905`](https://github.com/flex-development/mark-tokenizer/commit/afeb90584ed9bf7b7699da5b89ecef5c37d6745d)] **deps:** Bump vite from 6.2.3 to 6.2.4 ([#152](https://github.com/flex-development/mark-tokenizer/issues/152))
- [[`e67e6dc`](https://github.com/flex-development/mark-tokenizer/commit/e67e6dc5d15afb3fc1b12fd76f7beff5f517017f)] **deps:** Bump vite from 6.2.4 to 6.2.5 ([#157](https://github.com/flex-development/mark-tokenizer/issues/157))
- [[`71bf1ab`](https://github.com/flex-development/mark-tokenizer/commit/71bf1ab8e6ffbe3e9c425b82d3a2781fb6ef85d6)] **deps:** Bump vite from 6.2.5 to 6.2.6 ([#168](https://github.com/flex-development/mark-tokenizer/issues/168))

### :robot: Continuous Integration

- [[`ce240cb`](https://github.com/flex-development/mark-tokenizer/commit/ce240cbc0d2014b37087ed7efb79a7a5e2cb0d4a)] **deps:** bump actions/add-to-project from 1.0.2 to 2.0.0 ([#327](https://github.com/flex-development/mark-tokenizer/issues/327))
- [[`4a5ee0e`](https://github.com/flex-development/mark-tokenizer/commit/4a5ee0e52b917d06bf2d5fefb960c15fb806b71c)] **deps:** Bump actions/cache from 4.2.3 to 4.2.4 ([#250](https://github.com/flex-development/mark-tokenizer/issues/250))
- [[`abda7de`](https://github.com/flex-development/mark-tokenizer/commit/abda7de82bc12a0dc4cc84f76e73e355ab8e229e)] **deps:** bump actions/cache from 4.2.4 to 4.3.0 ([#274](https://github.com/flex-development/mark-tokenizer/issues/274))
- [[`8fff496`](https://github.com/flex-development/mark-tokenizer/commit/8fff496bd5a365217616e3ef31524aaa38e0bf71)] **deps:** bump actions/cache from 4.3.0 to 5.0.0 ([#294](https://github.com/flex-development/mark-tokenizer/issues/294))
- [[`d63f790`](https://github.com/flex-development/mark-tokenizer/commit/d63f7901549db3938a033d2c47a5dde147675248)] **deps:** bump actions/cache from 5.0.0 to 5.0.1 ([#296](https://github.com/flex-development/mark-tokenizer/issues/296))
- [[`a5cb73b`](https://github.com/flex-development/mark-tokenizer/commit/a5cb73b5a211a01f6ed5916dca74ffe5d0b8d883)] **deps:** bump actions/cache from 5.0.1 to 5.0.2 ([#299](https://github.com/flex-development/mark-tokenizer/issues/299))
- [[`70db59e`](https://github.com/flex-development/mark-tokenizer/commit/70db59e9f7e8ce0dfc893a4be5a529bd8d775da3)] **deps:** bump actions/cache from 5.0.2 to 5.0.3 ([#303](https://github.com/flex-development/mark-tokenizer/issues/303))
- [[`d10e99f`](https://github.com/flex-development/mark-tokenizer/commit/d10e99f4b457253e367c5e17940a3b15aead3586)] **deps:** bump actions/cache from 5.0.3 to 5.0.4 ([#310](https://github.com/flex-development/mark-tokenizer/issues/310))
- [[`193eb61`](https://github.com/flex-development/mark-tokenizer/commit/193eb615f88d0b3f7daf335e3ae555804b39d67d)] **deps:** bump actions/cache from 5.0.4 to 5.0.5 ([#322](https://github.com/flex-development/mark-tokenizer/issues/322))
- [[`959f5b1`](https://github.com/flex-development/mark-tokenizer/commit/959f5b1ce67c8c8b3cf07015e84445fb5aef4b32)] **deps:** Bump actions/checkout from 4.2.2 to 5.0.0 ([#253](https://github.com/flex-development/mark-tokenizer/issues/253))
- [[`a56503b`](https://github.com/flex-development/mark-tokenizer/commit/a56503bd54ea806c9710613c8e9f314790bc6a74)] **deps:** bump actions/checkout from 5.0.0 to 5.0.1 ([#282](https://github.com/flex-development/mark-tokenizer/issues/282))
- [[`0639cb5`](https://github.com/flex-development/mark-tokenizer/commit/0639cb5a8ba7032c9bd0dd053b4d5bf8793244ae)] **deps:** bump actions/checkout from 5.0.1 to 6.0.0 ([#284](https://github.com/flex-development/mark-tokenizer/issues/284))
- [[`6679a2a`](https://github.com/flex-development/mark-tokenizer/commit/6679a2a2a91b1e3d93aca2324545fd62f2302e48)] **deps:** bump actions/checkout from 6.0.0 to 6.0.1 ([#289](https://github.com/flex-development/mark-tokenizer/issues/289))
- [[`c33b2d4`](https://github.com/flex-development/mark-tokenizer/commit/c33b2d4b29c32ecffb2faae63fefd739404048e7)] **deps:** bump actions/checkout from 6.0.1 to 6.0.2 ([#301](https://github.com/flex-development/mark-tokenizer/issues/301))
- [[`7415a13`](https://github.com/flex-development/mark-tokenizer/commit/7415a13ba1d202f775ec291fae782921afaae115)] **deps:** Bump actions/create-github-app-token from 1.11.7 to 1.12.0 ([#146](https://github.com/flex-development/mark-tokenizer/issues/146))
- [[`1ac4292`](https://github.com/flex-development/mark-tokenizer/commit/1ac429297220b1bb1c1c15abacc86ec71c1fa2fd)] **deps:** Bump actions/create-github-app-token from 1.12.0 to 2.0.2 ([#154](https://github.com/flex-development/mark-tokenizer/issues/154))
- [[`e7c1fe8`](https://github.com/flex-development/mark-tokenizer/commit/e7c1fe856abeb6bfe67dcebb0c8f70798e763627)] **deps:** Bump actions/create-github-app-token from 2.0.2 to 2.0.3 ([#190](https://github.com/flex-development/mark-tokenizer/issues/190))
- [[`02d8522`](https://github.com/flex-development/mark-tokenizer/commit/02d8522beb8b9683fc7af996fb6380145fa82e70)] **deps:** Bump actions/create-github-app-token from 2.0.3 to 2.0.6 ([#192](https://github.com/flex-development/mark-tokenizer/issues/192))
- [[`4427d16`](https://github.com/flex-development/mark-tokenizer/commit/4427d162468d0834f5a1828ca31b065bcbfb1c4d)] **deps:** Bump actions/create-github-app-token from 2.0.6 to 2.1.1 ([#254](https://github.com/flex-development/mark-tokenizer/issues/254))
- [[`2f974dc`](https://github.com/flex-development/mark-tokenizer/commit/2f974dc3f471fff1dda1c17f25d14a0a12b4b84a)] **deps:** bump actions/create-github-app-token from 2.1.1 to 2.1.4 ([#271](https://github.com/flex-development/mark-tokenizer/issues/271))
- [[`533f2bb`](https://github.com/flex-development/mark-tokenizer/commit/533f2bbd9fd2a1301e3af9a07fbb1d70a63f0d99)] **deps:** bump actions/create-github-app-token from 2.1.4 to 2.2.0 ([#285](https://github.com/flex-development/mark-tokenizer/issues/285))
- [[`a5a5f51`](https://github.com/flex-development/mark-tokenizer/commit/a5a5f5178175f3f58fac94371d118dc99d933a11)] **deps:** bump actions/create-github-app-token from 2.2.0 to 2.2.1 ([#291](https://github.com/flex-development/mark-tokenizer/issues/291))
- [[`18383ac`](https://github.com/flex-development/mark-tokenizer/commit/18383ac6e0e34dda9372d10a428040fc3943a422)] **deps:** bump actions/create-github-app-token from 2.2.1 to 3.0.0 ([#309](https://github.com/flex-development/mark-tokenizer/issues/309))
- [[`25678d5`](https://github.com/flex-development/mark-tokenizer/commit/25678d5d9be262b6175462bae6cc71dc3b5502fa)] **deps:** bump actions/create-github-app-token from 3.0.0 to 3.1.1 ([#320](https://github.com/flex-development/mark-tokenizer/issues/320))
- [[`70e4f9b`](https://github.com/flex-development/mark-tokenizer/commit/70e4f9bf13116273ba59a8ea82ebd943139ccb89)] **deps:** bump actions/create-github-app-token from 3.1.1 to 3.2.0 ([#328](https://github.com/flex-development/mark-tokenizer/issues/328))
- [[`7fae9c7`](https://github.com/flex-development/mark-tokenizer/commit/7fae9c72932864b2e697c9b1edc3bfdc7ef3e85e)] **deps:** bump actions/github-script from 7.0.1 to 8.0.0 ([#267](https://github.com/flex-development/mark-tokenizer/issues/267))
- [[`2d37fff`](https://github.com/flex-development/mark-tokenizer/commit/2d37fff617e55373b500c6c1f5fc35e0c9b44090)] **deps:** bump actions/github-script from 8.0.0 to 9.0.0 ([#319](https://github.com/flex-development/mark-tokenizer/issues/319))
- [[`2091fbe`](https://github.com/flex-development/mark-tokenizer/commit/2091fbe462cbdd95c14b31f84d90875b9e098e1b)] **deps:** Bump actions/setup-node from 4.3.0 to 4.4.0 ([#169](https://github.com/flex-development/mark-tokenizer/issues/169))
- [[`36b2dfc`](https://github.com/flex-development/mark-tokenizer/commit/36b2dfcae1bfd844b68d8e88449b40482ba18c6d)] **deps:** bump actions/setup-node from 4.4.0 to 6.0.0 ([#275](https://github.com/flex-development/mark-tokenizer/issues/275))
- [[`8bb0c06`](https://github.com/flex-development/mark-tokenizer/commit/8bb0c06bb4fc18bde36ba46d86832853e640c047)] **deps:** bump actions/setup-node from 6.0.0 to 6.1.0 ([#288](https://github.com/flex-development/mark-tokenizer/issues/288))
- [[`3e7091f`](https://github.com/flex-development/mark-tokenizer/commit/3e7091fcad07ee5be58279341ea4fe8dd6b65b1b)] **deps:** bump actions/setup-node from 6.1.0 to 6.2.0 ([#298](https://github.com/flex-development/mark-tokenizer/issues/298))
- [[`e095724`](https://github.com/flex-development/mark-tokenizer/commit/e095724f20da04caa27db29a01ea0cb8cc58ae00)] **deps:** bump actions/setup-node from 6.2.0 to 6.3.0 ([#308](https://github.com/flex-development/mark-tokenizer/issues/308))
- [[`2811ac7`](https://github.com/flex-development/mark-tokenizer/commit/2811ac797f053625d7b92f4dafb94a289560bd8a)] **deps:** bump actions/setup-node from 6.3.0 to 6.4.0 ([#323](https://github.com/flex-development/mark-tokenizer/issues/323))
- [[`abd1225`](https://github.com/flex-development/mark-tokenizer/commit/abd12258613740569f805105e19f8ac2b0f9aa3d)] **deps:** bump actions/upload-artifact from 4.6.2 to 5.0.0 ([#277](https://github.com/flex-development/mark-tokenizer/issues/277))
- [[`707f8ea`](https://github.com/flex-development/mark-tokenizer/commit/707f8ea261528dde89bf465805fc61edd69db15f)] **deps:** bump actions/upload-artifact from 5.0.0 to 6.0.0 ([#295](https://github.com/flex-development/mark-tokenizer/issues/295))
- [[`7b18066`](https://github.com/flex-development/mark-tokenizer/commit/7b180664c035844a52a85187df0100a25aa686b4)] **deps:** bump actions/upload-artifact from 6.0.0 to 7.0.0 ([#306](https://github.com/flex-development/mark-tokenizer/issues/306))
- [[`0f6ce53`](https://github.com/flex-development/mark-tokenizer/commit/0f6ce5331f885c6cd8925a15b231eb8cb8cb8fd1)] **deps:** bump actions/upload-artifact from 7.0.0 to 7.0.1 ([#321](https://github.com/flex-development/mark-tokenizer/issues/321))
- [[`6bee6fd`](https://github.com/flex-development/mark-tokenizer/commit/6bee6fd0b7428821cbfd70a6504e0e89d3b102d6)] **deps:** bump andstor/file-existence-action from 3.0.0 to 3.1.0 ([#316](https://github.com/flex-development/mark-tokenizer/issues/316))
- [[`a7b6e4d`](https://github.com/flex-development/mark-tokenizer/commit/a7b6e4d73b095b69f42704d99efb3d82e9a1f0ce)] **deps:** Bump codecov/codecov-action from 5.4.0 to 5.4.2 ([#170](https://github.com/flex-development/mark-tokenizer/issues/170))
- [[`65351f0`](https://github.com/flex-development/mark-tokenizer/commit/65351f0226b1c4db896ec4cbf69d2d6ee3346f8a)] **deps:** Bump codecov/codecov-action from 5.4.2 to 5.4.3 ([#209](https://github.com/flex-development/mark-tokenizer/issues/209))
- [[`e25f9d1`](https://github.com/flex-development/mark-tokenizer/commit/e25f9d1308f7b9f5ccf907d3f790b52f270771cb)] **deps:** Bump codecov/codecov-action from 5.4.3 to 5.5.0 ([#264](https://github.com/flex-development/mark-tokenizer/issues/264))
- [[`a7496fd`](https://github.com/flex-development/mark-tokenizer/commit/a7496fd4b669351b176508f56922fd0bbd3947d2)] **deps:** bump codecov/codecov-action from 5.5.0 to 5.5.1 ([#268](https://github.com/flex-development/mark-tokenizer/issues/268))
- [[`512a4c1`](https://github.com/flex-development/mark-tokenizer/commit/512a4c1c59c4fffa096c2a9c2936b344b121c3c4)] **deps:** bump codecov/codecov-action from 5.5.1 to 5.5.2 ([#292](https://github.com/flex-development/mark-tokenizer/issues/292))
- [[`920c467`](https://github.com/flex-development/mark-tokenizer/commit/920c4676881fc6067d928baa935ba34a04e9bd5b)] **deps:** bump codecov/codecov-action from 5.5.2 to 5.5.3 ([#311](https://github.com/flex-development/mark-tokenizer/issues/311))
- [[`f68c7ea`](https://github.com/flex-development/mark-tokenizer/commit/f68c7ea0be1e73a3db14b557e1528eb006e56b0b)] **deps:** bump codecov/codecov-action from 5.5.3 to 6.0.0 ([#314](https://github.com/flex-development/mark-tokenizer/issues/314))
- [[`eda9f14`](https://github.com/flex-development/mark-tokenizer/commit/eda9f1400dbd58f4873e39676d8241ab88dfd973)] **deps:** Bump crazy-max/ghaction-import-gpg from 6.2.0 to 6.3.0 ([#148](https://github.com/flex-development/mark-tokenizer/issues/148))
- [[`626c06e`](https://github.com/flex-development/mark-tokenizer/commit/626c06e3146ae244329e48ee1b86aac46b8dc127)] **deps:** bump crazy-max/ghaction-import-gpg from 6.3.0 to 7.0.0 ([#307](https://github.com/flex-development/mark-tokenizer/issues/307))
- [[`a13a202`](https://github.com/flex-development/mark-tokenizer/commit/a13a202b63b850acd5d3aeaec282a4d95d0af22a)] **deps:** Bump GitGuardian/ggshield-action from 1.37.0 to 1.38.0 ([#147](https://github.com/flex-development/mark-tokenizer/issues/147))
- [[`41280ad`](https://github.com/flex-development/mark-tokenizer/commit/41280adb82602d0943fa313a28bbafc988239c38)] **deps:** Bump GitGuardian/ggshield-action from 1.38.0 to 1.39.0 ([#188](https://github.com/flex-development/mark-tokenizer/issues/188))
- [[`950d496`](https://github.com/flex-development/mark-tokenizer/commit/950d496fd29e8489c6e6559b16cbd7e7879bee99)] **deps:** Bump GitGuardian/ggshield-action from 1.39.0 to 1.41.0 ([#240](https://github.com/flex-development/mark-tokenizer/issues/240))
- [[`62e264a`](https://github.com/flex-development/mark-tokenizer/commit/62e264a2e924d954bd681aa91a3b2accdbe56227)] **deps:** Bump GitGuardian/ggshield-action from 1.41.0 to 1.42.0 ([#249](https://github.com/flex-development/mark-tokenizer/issues/249))
- [[`f4bf9f8`](https://github.com/flex-development/mark-tokenizer/commit/f4bf9f8b0f69e5db51d17a7d94c8fa9d9e6b0c68)] **deps:** bump GitGuardian/ggshield-action from 1.42.0 to 1.43.0 ([#265](https://github.com/flex-development/mark-tokenizer/issues/265))
- [[`3889d58`](https://github.com/flex-development/mark-tokenizer/commit/3889d5860811675692d9ba1e807ab8dda6a9cc61)] **deps:** bump GitGuardian/ggshield-action from 1.43.0 to 1.44.0 ([#279](https://github.com/flex-development/mark-tokenizer/issues/279))
- [[`db76cd0`](https://github.com/flex-development/mark-tokenizer/commit/db76cd03c4621ab7f576b1d0fec18fba69f34d3a)] **deps:** bump GitGuardian/ggshield-action from 1.44.0 to 1.45.0 ([#283](https://github.com/flex-development/mark-tokenizer/issues/283))
- [[`68cff29`](https://github.com/flex-development/mark-tokenizer/commit/68cff295bc65ba9042ef5ef8f6aafba0f892427b)] **deps:** bump GitGuardian/ggshield-action from 1.45.0 to 1.46.0 ([#297](https://github.com/flex-development/mark-tokenizer/issues/297))
- [[`8bae128`](https://github.com/flex-development/mark-tokenizer/commit/8bae128582d8f165a64364500628e7e29e2f6e2f)] **deps:** bump GitGuardian/ggshield-action from 1.46.0 to 1.47.0 ([#302](https://github.com/flex-development/mark-tokenizer/issues/302))
- [[`308dba3`](https://github.com/flex-development/mark-tokenizer/commit/308dba3e4f36a389c365e81d1c35c1f4814fbc7e)] **deps:** bump GitGuardian/ggshield-action from 1.47.0 to 1.48.0 ([#304](https://github.com/flex-development/mark-tokenizer/issues/304))
- [[`664c6ef`](https://github.com/flex-development/mark-tokenizer/commit/664c6ef9658a150ce7e94341fcfedb555c4948ce)] **deps:** bump GitGuardian/ggshield-action from 1.48.0 to 1.49.0 ([#315](https://github.com/flex-development/mark-tokenizer/issues/315))
- [[`85063ce`](https://github.com/flex-development/mark-tokenizer/commit/85063cef550420b3f46d0d698d1020c9d6eb5afd)] **deps:** bump GitGuardian/ggshield-action from 1.49.0 to 1.50.0 ([#324](https://github.com/flex-development/mark-tokenizer/issues/324))
- [[`9b5411b`](https://github.com/flex-development/mark-tokenizer/commit/9b5411b691f92a50e06bbf78bc5fbff4910baa89)] **deps:** bump GitGuardian/ggshield-action from 1.50.0 to 1.50.3 ([#326](https://github.com/flex-development/mark-tokenizer/issues/326))
- [[`90b960f`](https://github.com/flex-development/mark-tokenizer/commit/90b960f5cb1e361ed29f9220b51e19d7e077da8e)] **deps:** bump kaisugi/action-regex-match from 1.0.1 to 1.0.2 ([#290](https://github.com/flex-development/mark-tokenizer/issues/290))
- [[`86dae7e`](https://github.com/flex-development/mark-tokenizer/commit/86dae7e7af478af05885a86688c4d82861ec8c52)] **deps:** bump octokit/graphql-action from 2.3.2 to 3.0.0 ([#280](https://github.com/flex-development/mark-tokenizer/issues/280))
- [[`ef29917`](https://github.com/flex-development/mark-tokenizer/commit/ef299172e33da8dc0c794e488b30163349edd527)] **deps:** bump octokit/graphql-action from 3.0.0 to 3.0.2 ([#293](https://github.com/flex-development/mark-tokenizer/issues/293))

### :house_with_garden: Housekeeping

- [[`af7d16c`](https://github.com/flex-development/mark-tokenizer/commit/af7d16c4f99e58fda055bb29916f8746df581df3)] remove `.npmrc`

## [1.0.0-alpha.2](https://github.com/flex-development/mark-tokenizer/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2026-05-14)

### :package: Build

- [[`adc0540`](https://github.com/flex-development/mark-tokenizer/commit/adc0540bb94b65e6b23bd843551d71878199e737)] bundle
- [[`6357cb1`](https://github.com/flex-development/mark-tokenizer/commit/6357cb15a3bbcbfaac737a6076900ab32a068cf0)] **deps-dev:** Bump @arethetypeswrong/cli from 0.17.4 to 0.18.0 ([#199](https://github.com/flex-development/mark-tokenizer/issues/199))
- [[`e6c7338`](https://github.com/flex-development/mark-tokenizer/commit/e6c733827977c1037ed7d4fa32ea6613cd1de0bc)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.0 to 0.18.1 ([#201](https://github.com/flex-development/mark-tokenizer/issues/201))
- [[`e3f97bb`](https://github.com/flex-development/mark-tokenizer/commit/e3f97bb270ad159c2bd07642bdaf4fcdc9d3f414)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.1 to 0.18.2 ([#231](https://github.com/flex-development/mark-tokenizer/issues/231))
- [[`be1b223`](https://github.com/flex-development/mark-tokenizer/commit/be1b2232b431f0b2028d3c91222efa5cd56cd9fb)] **deps-dev:** Bump @flex-development/colors from 1.0.1 to 1.0.2 in the flex-development group ([#221](https://github.com/flex-development/mark-tokenizer/issues/221))
- [[`9d57038`](https://github.com/flex-development/mark-tokenizer/commit/9d570384f3a0183d42ae547ad3158299b36ecde9)] **deps-dev:** Bump @flex-development/pathe from 4.0.1 to 4.0.2 in the flex-development group ([#222](https://github.com/flex-development/mark-tokenizer/issues/222))
- [[`542d4ed`](https://github.com/flex-development/mark-tokenizer/commit/542d4edfc8427ae4eeea8bdc77369ac1580bda99)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.2.0 to 4.4.0 ([#218](https://github.com/flex-development/mark-tokenizer/issues/218))
- [[`3d50b0a`](https://github.com/flex-development/mark-tokenizer/commit/3d50b0a1fa1ee117ed84a42ac1f878e9b83bfaec)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.0 to 4.4.1 ([#228](https://github.com/flex-development/mark-tokenizer/issues/228))
- [[`68b77d5`](https://github.com/flex-development/mark-tokenizer/commit/68b77d5266b731df828a8ae727695989ca4246f5)] **deps-dev:** Bump @stylistic/eslint-plugin from 4.4.1 to 5.2.3 ([#259](https://github.com/flex-development/mark-tokenizer/issues/259))
- [[`c549a3c`](https://github.com/flex-development/mark-tokenizer/commit/c549a3cf27d6723b30b99c4745d10bd034883e60)] **deps-dev:** Bump chai from 5.2.0 to 5.2.1 ([#258](https://github.com/flex-development/mark-tokenizer/issues/258))
- [[`442ba86`](https://github.com/flex-development/mark-tokenizer/commit/442ba86efc0e6b0dd15962d53ea42f9497210e23)] **deps-dev:** Bump cspell from 8.17.5 to 8.18.0 ([#144](https://github.com/flex-development/mark-tokenizer/issues/144))
- [[`48e6ba0`](https://github.com/flex-development/mark-tokenizer/commit/48e6ba0ed6e1b8ecd36062abfb86690c53e0c352)] **deps-dev:** Bump cspell from 8.18.0 to 8.18.1 ([#151](https://github.com/flex-development/mark-tokenizer/issues/151))
- [[`c17c2b2`](https://github.com/flex-development/mark-tokenizer/commit/c17c2b219ff1539fad293863bc5848671ee7fea4)] **deps-dev:** Bump cspell from 8.18.1 to 8.19.0 ([#172](https://github.com/flex-development/mark-tokenizer/issues/172))
- [[`beec3ee`](https://github.com/flex-development/mark-tokenizer/commit/beec3eee20866f1087cf68378197544814fbc005)] **deps-dev:** Bump cspell from 8.19.0 to 8.19.2 ([#174](https://github.com/flex-development/mark-tokenizer/issues/174))
- [[`dde7712`](https://github.com/flex-development/mark-tokenizer/commit/dde7712a753e71517ccc5b6fe33d1a608cc4ed54)] **deps-dev:** Bump cspell from 8.19.2 to 8.19.3 ([#187](https://github.com/flex-development/mark-tokenizer/issues/187))
- [[`576c843`](https://github.com/flex-development/mark-tokenizer/commit/576c843fcf3db6d012e84fd788e9fe4b19da4ab9)] **deps-dev:** Bump cspell from 8.19.3 to 9.0.0 ([#193](https://github.com/flex-development/mark-tokenizer/issues/193))
- [[`b9c3cc9`](https://github.com/flex-development/mark-tokenizer/commit/b9c3cc939878321682e7bee474f5878fbe57c5f8)] **deps-dev:** Bump cspell from 9.0.0 to 9.0.1 ([#198](https://github.com/flex-development/mark-tokenizer/issues/198))
- [[`f39dbe8`](https://github.com/flex-development/mark-tokenizer/commit/f39dbe8ce973ca7257beb42a438b139ff9d7fc63)] **deps-dev:** Bump cspell from 9.0.1 to 9.0.2 ([#214](https://github.com/flex-development/mark-tokenizer/issues/214))
- [[`df20df4`](https://github.com/flex-development/mark-tokenizer/commit/df20df477f5d1319d4d8d87f07c6b4c5ddd9052f)] **deps-dev:** Bump cspell from 9.0.2 to 9.2.0 ([#246](https://github.com/flex-development/mark-tokenizer/issues/246))
- [[`40d0b02`](https://github.com/flex-development/mark-tokenizer/commit/40d0b026a3b706f780037c71df25a77b1a66a5b7)] **deps-dev:** Bump dprint from 0.49.1 to 0.50.0 ([#211](https://github.com/flex-development/mark-tokenizer/issues/211))
- [[`5204846`](https://github.com/flex-development/mark-tokenizer/commit/52048463a5a7485125672c68af056048272f6966)] **deps-dev:** Bump dprint from 0.50.0 to 0.50.1 ([#257](https://github.com/flex-development/mark-tokenizer/issues/257))
- [[`41f1380`](https://github.com/flex-development/mark-tokenizer/commit/41f1380d03775fe7462f3b52b0f1dfbb7658e94d)] **deps-dev:** Bump editorconfig from 2.0.1 to 3.0.0 ([#233](https://github.com/flex-development/mark-tokenizer/issues/233))
- [[`e731127`](https://github.com/flex-development/mark-tokenizer/commit/e73112735cc405e578220e30d4a580efb07d4a89)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.3 to 4.2.4 ([#143](https://github.com/flex-development/mark-tokenizer/issues/143))
- [[`a55cb76`](https://github.com/flex-development/mark-tokenizer/commit/a55cb76e7b5e60cc7c1d75c9998a9642b0f97c31)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.4 to 4.2.5 ([#145](https://github.com/flex-development/mark-tokenizer/issues/145))
- [[`0495e94`](https://github.com/flex-development/mark-tokenizer/commit/0495e949b2ca30c8f3428b6caaa3e96d4dc92f9a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.5 to 4.3.1 ([#150](https://github.com/flex-development/mark-tokenizer/issues/150))
- [[`fe38ab4`](https://github.com/flex-development/mark-tokenizer/commit/fe38ab46a23ebd7325e5b2716e72338b18b9abd0)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.1 to 4.3.2 ([#165](https://github.com/flex-development/mark-tokenizer/issues/165))
- [[`580ed64`](https://github.com/flex-development/mark-tokenizer/commit/580ed64baa8620d78932b73df9ab9b7bff65e795)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.2 to 4.3.3 ([#176](https://github.com/flex-development/mark-tokenizer/issues/176))
- [[`5bc896d`](https://github.com/flex-development/mark-tokenizer/commit/5bc896dd245a8026b46d483c383b769c298b5a7a)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.3 to 4.3.4 ([#179](https://github.com/flex-development/mark-tokenizer/issues/179))
- [[`f516a42`](https://github.com/flex-development/mark-tokenizer/commit/f516a428480a14c417d66d29528986879a4bd297)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.4 to 4.3.5 ([#212](https://github.com/flex-development/mark-tokenizer/issues/212))
- [[`0061c4c`](https://github.com/flex-development/mark-tokenizer/commit/0061c4c42e81f3cd61e63e47b84b8cd6f4e84267)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.3.5 to 4.4.1 ([#217](https://github.com/flex-development/mark-tokenizer/issues/217))
- [[`78de4dd`](https://github.com/flex-development/mark-tokenizer/commit/78de4dd1060b1f918b20ea65aaefeaa075ed8246)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.1 to 4.4.2 ([#226](https://github.com/flex-development/mark-tokenizer/issues/226))
- [[`8674751`](https://github.com/flex-development/mark-tokenizer/commit/8674751c146c85889d16a7bb6a509c0b44b682aa)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.4.2 to 4.4.3 ([#229](https://github.com/flex-development/mark-tokenizer/issues/229))
- [[`15c8712`](https://github.com/flex-development/mark-tokenizer/commit/15c87128e3098fa3133892bfb41562455e36efa5)] **deps-dev:** Bump eslint-mdx from 3.3.1 to 3.3.2 ([#155](https://github.com/flex-development/mark-tokenizer/issues/155))
- [[`c9ba783`](https://github.com/flex-development/mark-tokenizer/commit/c9ba783677de5c1b5e4ab19ecc0d03bdeff53478)] **deps-dev:** Bump eslint-mdx from 3.3.2 to 3.4.0 ([#161](https://github.com/flex-development/mark-tokenizer/issues/161))
- [[`84cd45a`](https://github.com/flex-development/mark-tokenizer/commit/84cd45ac0b51fadd8360ba610d938dc8e4f98d26)] **deps-dev:** Bump eslint-mdx from 3.4.0 to 3.4.1 ([#181](https://github.com/flex-development/mark-tokenizer/issues/181))
- [[`548197c`](https://github.com/flex-development/mark-tokenizer/commit/548197c860c1807daf632e05e22efc039a6d38fd)] **deps-dev:** Bump eslint-mdx from 3.4.1 to 3.4.2 ([#208](https://github.com/flex-development/mark-tokenizer/issues/208))
- [[`af49ba2`](https://github.com/flex-development/mark-tokenizer/commit/af49ba22d301efa81156d6f21c68ffa067536909)] **deps-dev:** Bump eslint-mdx from 3.4.2 to 3.6.0 ([#241](https://github.com/flex-development/mark-tokenizer/issues/241))
- [[`290f868`](https://github.com/flex-development/mark-tokenizer/commit/290f868ec5d7707f672b6cef9bf9b1e441c6b6b9)] **deps-dev:** Bump eslint-mdx from 3.6.0 to 3.6.2 ([#261](https://github.com/flex-development/mark-tokenizer/issues/261))
- [[`138d2bb`](https://github.com/flex-development/mark-tokenizer/commit/138d2bb6038da87a5bda8def41e35e6dcb4247bf)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.10 to 50.6.11 ([#184](https://github.com/flex-development/mark-tokenizer/issues/184))
- [[`0c4ff79`](https://github.com/flex-development/mark-tokenizer/commit/0c4ff7933c1f49f3020f3e2c4382a127be55691e)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.11 to 50.6.14 ([#202](https://github.com/flex-development/mark-tokenizer/issues/202))
- [[`db71656`](https://github.com/flex-development/mark-tokenizer/commit/db716566ca20e5628fca5ca18fa89caeaeaf7b5d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.14 to 50.6.16 ([#205](https://github.com/flex-development/mark-tokenizer/issues/205))
- [[`d7324d9`](https://github.com/flex-development/mark-tokenizer/commit/d7324d9a578f423c0ae86f18c641804c3582d83d)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.16 to 50.6.17 ([#206](https://github.com/flex-development/mark-tokenizer/issues/206))
- [[`1761760`](https://github.com/flex-development/mark-tokenizer/commit/1761760b16e2d8a551fe2427afd43650abe4b9fc)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.17 to 50.7.1 ([#223](https://github.com/flex-development/mark-tokenizer/issues/223))
- [[`3a55802`](https://github.com/flex-development/mark-tokenizer/commit/3a55802a7be752bba4efb2488a1676b7d699fffe)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.9 to 50.6.10 ([#183](https://github.com/flex-development/mark-tokenizer/issues/183))
- [[`7a9ac91`](https://github.com/flex-development/mark-tokenizer/commit/7a9ac91fbad962342fe15674f282cd7db4227c2b)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.7.1 to 50.8.0 ([#232](https://github.com/flex-development/mark-tokenizer/issues/232))
- [[`ed953a7`](https://github.com/flex-development/mark-tokenizer/commit/ed953a7c703a35b81a3a47c037c91f4c06530b22)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.8.0 to 51.0.1 ([#234](https://github.com/flex-development/mark-tokenizer/issues/234))
- [[`f0d1ce0`](https://github.com/flex-development/mark-tokenizer/commit/f0d1ce093359a375fa50feb1b9de918e2df607cb)] **deps-dev:** Bump eslint-plugin-jsdoc from 51.0.1 to 54.1.0 ([#260](https://github.com/flex-development/mark-tokenizer/issues/260))
- [[`cd62b99`](https://github.com/flex-development/mark-tokenizer/commit/cd62b992f4d36e97c5740cccf453ad46366098de)] **deps-dev:** Bump eslint-plugin-jsonc from 2.20.0 to 2.20.1 ([#215](https://github.com/flex-development/mark-tokenizer/issues/215))
- [[`d34646c`](https://github.com/flex-development/mark-tokenizer/commit/d34646c94af479f23e2ba0fcfd4ec22f77ebf951)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.1 to 3.3.2 ([#156](https://github.com/flex-development/mark-tokenizer/issues/156))
- [[`9ffea73`](https://github.com/flex-development/mark-tokenizer/commit/9ffea730861beb956b851330c8d2660a6ea791f1)] **deps-dev:** Bump eslint-plugin-mdx from 3.3.2 to 3.4.0 ([#162](https://github.com/flex-development/mark-tokenizer/issues/162))
- [[`fceed53`](https://github.com/flex-development/mark-tokenizer/commit/fceed5301430d54a057ab4ef0e9a13fe4375515d)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.0 to 3.4.1 ([#182](https://github.com/flex-development/mark-tokenizer/issues/182))
- [[`e23376e`](https://github.com/flex-development/mark-tokenizer/commit/e23376ed47bd7f141314c35401365085b6df65c9)] **deps-dev:** Bump eslint-plugin-mdx from 3.4.1 to 3.4.2 ([#207](https://github.com/flex-development/mark-tokenizer/issues/207))
- [[`ad5e31b`](https://github.com/flex-development/mark-tokenizer/commit/ad5e31bea55c0d129dc143e6bf4d5282206036f5)] **deps-dev:** Bump eslint-plugin-unicorn from 58.0.0 to 59.0.0 ([#186](https://github.com/flex-development/mark-tokenizer/issues/186))
- [[`b6f0087`](https://github.com/flex-development/mark-tokenizer/commit/b6f0087a23a085f312bfa49dc5ad6f2c6be4ac3d)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.0 to 59.0.1 ([#195](https://github.com/flex-development/mark-tokenizer/issues/195))
- [[`d5d033d`](https://github.com/flex-development/mark-tokenizer/commit/d5d033d7cdfae08220a33f51f397b5b31ada1b7b)] **deps-dev:** Bump eslint-plugin-unicorn from 59.0.1 to 60.0.0 ([#255](https://github.com/flex-development/mark-tokenizer/issues/255))
- [[`e94fa1b`](https://github.com/flex-development/mark-tokenizer/commit/e94fa1be62ef04b13c127a3132fe45e99ccbe57d)] **deps-dev:** Bump eslint-plugin-yml from 1.17.0 to 1.18.0 ([#180](https://github.com/flex-development/mark-tokenizer/issues/180))
- [[`9a86d12`](https://github.com/flex-development/mark-tokenizer/commit/9a86d1216b80e27c986946b2d18d2d19db1006c2)] **deps-dev:** Bump globals from 16.0.0 to 16.1.0 ([#196](https://github.com/flex-development/mark-tokenizer/issues/196))
- [[`1ca9923`](https://github.com/flex-development/mark-tokenizer/commit/1ca99234dbab61d5e15a8e7d7d0ddffdc4200e85)] **deps-dev:** Bump globals from 16.1.0 to 16.2.0 ([#216](https://github.com/flex-development/mark-tokenizer/issues/216))
- [[`96e807e`](https://github.com/flex-development/mark-tokenizer/commit/96e807e1b278a321cd1a39e3ba8e431af109f0a4)] **deps-dev:** Bump globals from 16.2.0 to 16.3.0 ([#247](https://github.com/flex-development/mark-tokenizer/issues/247))
- [[`0c13957`](https://github.com/flex-development/mark-tokenizer/commit/0c1395735a194a0493f808957909bbc218d0ae1d)] **deps-dev:** Bump remark-lint-no-unused-definitions from 4.0.1 to 4.0.2 in the remark group ([#167](https://github.com/flex-development/mark-tokenizer/issues/167))
- [[`8010d52`](https://github.com/flex-development/mark-tokenizer/commit/8010d5260281ff5c96e8de27633daa8e8c2427ea)] **deps-dev:** Bump sh-syntax from 0.4.2 to 0.5.1 ([#158](https://github.com/flex-development/mark-tokenizer/issues/158))
- [[`2307a35`](https://github.com/flex-development/mark-tokenizer/commit/2307a352ecb5a17f1db8d331ab63945a594add4b)] **deps-dev:** Bump sh-syntax from 0.5.1 to 0.5.6 ([#166](https://github.com/flex-development/mark-tokenizer/issues/166))
- [[`009e757`](https://github.com/flex-development/mark-tokenizer/commit/009e75775839bda794ccc2322be2859c46ca88f4)] **deps-dev:** Bump sh-syntax from 0.5.6 to 0.5.7 ([#175](https://github.com/flex-development/mark-tokenizer/issues/175))
- [[`c5f421e`](https://github.com/flex-development/mark-tokenizer/commit/c5f421ea17e6a8dd7f373432c27ba68248d914bd)] **deps-dev:** Bump sh-syntax from 0.5.7 to 0.5.8 ([#213](https://github.com/flex-development/mark-tokenizer/issues/213))
- [[`720b319`](https://github.com/flex-development/mark-tokenizer/commit/720b31943b62365296e91fe937aa03b6b9f9cb66)] **deps-dev:** Bump the commitlint group with 2 updates ([#197](https://github.com/flex-development/mark-tokenizer/issues/197))
- [[`cb8a6de`](https://github.com/flex-development/mark-tokenizer/commit/cb8a6de9ae1ff12f8e6a1943692afb02964f13af)] **deps-dev:** Bump the eslint group with 2 updates ([#160](https://github.com/flex-development/mark-tokenizer/issues/160))
- [[`71ed8ae`](https://github.com/flex-development/mark-tokenizer/commit/71ed8aefc99b1c7a17864cb8b50d1d6ce287f3a7)] **deps-dev:** Bump the eslint group with 2 updates ([#173](https://github.com/flex-development/mark-tokenizer/issues/173))
- [[`ceec22c`](https://github.com/flex-development/mark-tokenizer/commit/ceec22c6efebafd1653c7ffc2f9ec92ec35d7c55)] **deps-dev:** Bump the eslint group with 2 updates ([#177](https://github.com/flex-development/mark-tokenizer/issues/177))
- [[`883e221`](https://github.com/flex-development/mark-tokenizer/commit/883e221f4e2b8417dd61dbe5356df2b9c9e3e208)] **deps-dev:** Bump the eslint group with 2 updates ([#191](https://github.com/flex-development/mark-tokenizer/issues/191))
- [[`1f4aa6c`](https://github.com/flex-development/mark-tokenizer/commit/1f4aa6c2d6742182252addc48ce9ba73ace385cd)] **deps-dev:** Bump the eslint group with 2 updates ([#210](https://github.com/flex-development/mark-tokenizer/issues/210))
- [[`26648b7`](https://github.com/flex-development/mark-tokenizer/commit/26648b715d92c46f6295809b165ce10e64bffaa5)] **deps-dev:** Bump the eslint group with 2 updates ([#224](https://github.com/flex-development/mark-tokenizer/issues/224))
- [[`00c6935`](https://github.com/flex-development/mark-tokenizer/commit/00c69359cff08d28769527b845b8b01a06acaedd)] **deps-dev:** Bump the eslint group with 2 updates ([#236](https://github.com/flex-development/mark-tokenizer/issues/236))
- [[`c6cf3ef`](https://github.com/flex-development/mark-tokenizer/commit/c6cf3ef4b762dae74e9edc85640550b048957da9)] **deps-dev:** Bump the eslint group with 2 updates ([#243](https://github.com/flex-development/mark-tokenizer/issues/243))
- [[`e03bd16`](https://github.com/flex-development/mark-tokenizer/commit/e03bd16ab6e9c5a770f76e746752937527c2f347)] **deps-dev:** Bump the remark group with 2 updates ([#164](https://github.com/flex-development/mark-tokenizer/issues/164))
- [[`9e164f5`](https://github.com/flex-development/mark-tokenizer/commit/9e164f5b4f3c7f9bb7d9ae86193e04fbc7425a88)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#153](https://github.com/flex-development/mark-tokenizer/issues/153))
- [[`c9853b5`](https://github.com/flex-development/mark-tokenizer/commit/c9853b5515f5b982c1cd2ce4bb028a4872dad646)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#163](https://github.com/flex-development/mark-tokenizer/issues/163))
- [[`553f03b`](https://github.com/flex-development/mark-tokenizer/commit/553f03bf53642af5c73ae7c69dcb765a606b3aca)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#171](https://github.com/flex-development/mark-tokenizer/issues/171))
- [[`09cdd67`](https://github.com/flex-development/mark-tokenizer/commit/09cdd671db2c1ebd6b6960a892bf7763e5f8a25c)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#178](https://github.com/flex-development/mark-tokenizer/issues/178))
- [[`8aaafff`](https://github.com/flex-development/mark-tokenizer/commit/8aaafffaab6d69019df5b313edb365224237120f)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#185](https://github.com/flex-development/mark-tokenizer/issues/185))
- [[`cafac87`](https://github.com/flex-development/mark-tokenizer/commit/cafac87c039ac14394d874526e4b439a0f9e707b)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#194](https://github.com/flex-development/mark-tokenizer/issues/194))
- [[`a33e327`](https://github.com/flex-development/mark-tokenizer/commit/a33e3271972b8b85d706579239ee5948032577e1)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#203](https://github.com/flex-development/mark-tokenizer/issues/203))
- [[`2ab54e9`](https://github.com/flex-development/mark-tokenizer/commit/2ab54e97f528583454e7b9ecb744776fecafac17)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#220](https://github.com/flex-development/mark-tokenizer/issues/220))
- [[`c59d771`](https://github.com/flex-development/mark-tokenizer/commit/c59d771df03edb7f5bc9d8b94d52df00eddfb3a2)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#227](https://github.com/flex-development/mark-tokenizer/issues/227))
- [[`a34ce83`](https://github.com/flex-development/mark-tokenizer/commit/a34ce83665d1cfde0cb031eddf689577affd2477)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#230](https://github.com/flex-development/mark-tokenizer/issues/230))
- [[`5c51113`](https://github.com/flex-development/mark-tokenizer/commit/5c51113da911a6620ecdd1b2319b6ce6cd347931)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#256](https://github.com/flex-development/mark-tokenizer/issues/256))
- [[`d2172ba`](https://github.com/flex-development/mark-tokenizer/commit/d2172ba8c60936b5b8969d47c5c79c553105f2b4)] **deps-dev:** Bump typescript from 5.8.2 to 5.8.3 ([#159](https://github.com/flex-development/mark-tokenizer/issues/159))
- [[`1da9863`](https://github.com/flex-development/mark-tokenizer/commit/1da98633ceac4df88dc6ca3108dc6862dc65305b)] **deps:** Bump debug from 4.4.0 to 4.4.1 ([#204](https://github.com/flex-development/mark-tokenizer/issues/204))
- [[`4b919d4`](https://github.com/flex-development/mark-tokenizer/commit/4b919d430b3d7a0f226e815e4c132a644480e3b7)] **deps:** bump js-yaml from 4.1.0 to 4.1.1 ([#281](https://github.com/flex-development/mark-tokenizer/issues/281))
- [[`25d4b1a`](https://github.com/flex-development/mark-tokenizer/commit/25d4b1a3ca10efb2c1cfab39e47bb198672bd415)] **deps:** bump lodash from 4.17.21 to 4.17.23 ([#300](https://github.com/flex-development/mark-tokenizer/issues/300))
- [[`3e518e5`](https://github.com/flex-development/mark-tokenizer/commit/3e518e5ae43e24b27a9c216ae54721263a2593d0)] **deps:** bump mdast-util-to-hast from 13.2.0 to 13.2.1 ([#286](https://github.com/flex-development/mark-tokenizer/issues/286))
- [[`096f93a`](https://github.com/flex-development/mark-tokenizer/commit/096f93a6f6986f2b8febcbb95f3a1d3715f1bcd0)] **deps:** bump rollup from 4.35.0 to 4.59.0 ([#305](https://github.com/flex-development/mark-tokenizer/issues/305))
- [[`1b6a2b8`](https://github.com/flex-development/mark-tokenizer/commit/1b6a2b8617cbeb50913d002c55e1edb2cf8ce803)] **deps:** bump validator from 13.11.0 to 13.15.20 ([#278](https://github.com/flex-development/mark-tokenizer/issues/278))
- [[`5e7a832`](https://github.com/flex-development/mark-tokenizer/commit/5e7a8327af456322041d38ac66545048f3b2759f)] **deps:** bump validator from 13.15.20 to 13.15.23 ([#287](https://github.com/flex-development/mark-tokenizer/issues/287))
- [[`afeb905`](https://github.com/flex-development/mark-tokenizer/commit/afeb90584ed9bf7b7699da5b89ecef5c37d6745d)] **deps:** Bump vite from 6.2.3 to 6.2.4 ([#152](https://github.com/flex-development/mark-tokenizer/issues/152))
- [[`e67e6dc`](https://github.com/flex-development/mark-tokenizer/commit/e67e6dc5d15afb3fc1b12fd76f7beff5f517017f)] **deps:** Bump vite from 6.2.4 to 6.2.5 ([#157](https://github.com/flex-development/mark-tokenizer/issues/157))
- [[`71bf1ab`](https://github.com/flex-development/mark-tokenizer/commit/71bf1ab8e6ffbe3e9c425b82d3a2781fb6ef85d6)] **deps:** Bump vite from 6.2.5 to 6.2.6 ([#168](https://github.com/flex-development/mark-tokenizer/issues/168))

### :robot: Continuous Integration

- [[`ce240cb`](https://github.com/flex-development/mark-tokenizer/commit/ce240cbc0d2014b37087ed7efb79a7a5e2cb0d4a)] **deps:** bump actions/add-to-project from 1.0.2 to 2.0.0 ([#327](https://github.com/flex-development/mark-tokenizer/issues/327))
- [[`4a5ee0e`](https://github.com/flex-development/mark-tokenizer/commit/4a5ee0e52b917d06bf2d5fefb960c15fb806b71c)] **deps:** Bump actions/cache from 4.2.3 to 4.2.4 ([#250](https://github.com/flex-development/mark-tokenizer/issues/250))
- [[`abda7de`](https://github.com/flex-development/mark-tokenizer/commit/abda7de82bc12a0dc4cc84f76e73e355ab8e229e)] **deps:** bump actions/cache from 4.2.4 to 4.3.0 ([#274](https://github.com/flex-development/mark-tokenizer/issues/274))
- [[`8fff496`](https://github.com/flex-development/mark-tokenizer/commit/8fff496bd5a365217616e3ef31524aaa38e0bf71)] **deps:** bump actions/cache from 4.3.0 to 5.0.0 ([#294](https://github.com/flex-development/mark-tokenizer/issues/294))
- [[`d63f790`](https://github.com/flex-development/mark-tokenizer/commit/d63f7901549db3938a033d2c47a5dde147675248)] **deps:** bump actions/cache from 5.0.0 to 5.0.1 ([#296](https://github.com/flex-development/mark-tokenizer/issues/296))
- [[`a5cb73b`](https://github.com/flex-development/mark-tokenizer/commit/a5cb73b5a211a01f6ed5916dca74ffe5d0b8d883)] **deps:** bump actions/cache from 5.0.1 to 5.0.2 ([#299](https://github.com/flex-development/mark-tokenizer/issues/299))
- [[`70db59e`](https://github.com/flex-development/mark-tokenizer/commit/70db59e9f7e8ce0dfc893a4be5a529bd8d775da3)] **deps:** bump actions/cache from 5.0.2 to 5.0.3 ([#303](https://github.com/flex-development/mark-tokenizer/issues/303))
- [[`d10e99f`](https://github.com/flex-development/mark-tokenizer/commit/d10e99f4b457253e367c5e17940a3b15aead3586)] **deps:** bump actions/cache from 5.0.3 to 5.0.4 ([#310](https://github.com/flex-development/mark-tokenizer/issues/310))
- [[`193eb61`](https://github.com/flex-development/mark-tokenizer/commit/193eb615f88d0b3f7daf335e3ae555804b39d67d)] **deps:** bump actions/cache from 5.0.4 to 5.0.5 ([#322](https://github.com/flex-development/mark-tokenizer/issues/322))
- [[`959f5b1`](https://github.com/flex-development/mark-tokenizer/commit/959f5b1ce67c8c8b3cf07015e84445fb5aef4b32)] **deps:** Bump actions/checkout from 4.2.2 to 5.0.0 ([#253](https://github.com/flex-development/mark-tokenizer/issues/253))
- [[`a56503b`](https://github.com/flex-development/mark-tokenizer/commit/a56503bd54ea806c9710613c8e9f314790bc6a74)] **deps:** bump actions/checkout from 5.0.0 to 5.0.1 ([#282](https://github.com/flex-development/mark-tokenizer/issues/282))
- [[`0639cb5`](https://github.com/flex-development/mark-tokenizer/commit/0639cb5a8ba7032c9bd0dd053b4d5bf8793244ae)] **deps:** bump actions/checkout from 5.0.1 to 6.0.0 ([#284](https://github.com/flex-development/mark-tokenizer/issues/284))
- [[`6679a2a`](https://github.com/flex-development/mark-tokenizer/commit/6679a2a2a91b1e3d93aca2324545fd62f2302e48)] **deps:** bump actions/checkout from 6.0.0 to 6.0.1 ([#289](https://github.com/flex-development/mark-tokenizer/issues/289))
- [[`c33b2d4`](https://github.com/flex-development/mark-tokenizer/commit/c33b2d4b29c32ecffb2faae63fefd739404048e7)] **deps:** bump actions/checkout from 6.0.1 to 6.0.2 ([#301](https://github.com/flex-development/mark-tokenizer/issues/301))
- [[`7415a13`](https://github.com/flex-development/mark-tokenizer/commit/7415a13ba1d202f775ec291fae782921afaae115)] **deps:** Bump actions/create-github-app-token from 1.11.7 to 1.12.0 ([#146](https://github.com/flex-development/mark-tokenizer/issues/146))
- [[`1ac4292`](https://github.com/flex-development/mark-tokenizer/commit/1ac429297220b1bb1c1c15abacc86ec71c1fa2fd)] **deps:** Bump actions/create-github-app-token from 1.12.0 to 2.0.2 ([#154](https://github.com/flex-development/mark-tokenizer/issues/154))
- [[`e7c1fe8`](https://github.com/flex-development/mark-tokenizer/commit/e7c1fe856abeb6bfe67dcebb0c8f70798e763627)] **deps:** Bump actions/create-github-app-token from 2.0.2 to 2.0.3 ([#190](https://github.com/flex-development/mark-tokenizer/issues/190))
- [[`02d8522`](https://github.com/flex-development/mark-tokenizer/commit/02d8522beb8b9683fc7af996fb6380145fa82e70)] **deps:** Bump actions/create-github-app-token from 2.0.3 to 2.0.6 ([#192](https://github.com/flex-development/mark-tokenizer/issues/192))
- [[`4427d16`](https://github.com/flex-development/mark-tokenizer/commit/4427d162468d0834f5a1828ca31b065bcbfb1c4d)] **deps:** Bump actions/create-github-app-token from 2.0.6 to 2.1.1 ([#254](https://github.com/flex-development/mark-tokenizer/issues/254))
- [[`2f974dc`](https://github.com/flex-development/mark-tokenizer/commit/2f974dc3f471fff1dda1c17f25d14a0a12b4b84a)] **deps:** bump actions/create-github-app-token from 2.1.1 to 2.1.4 ([#271](https://github.com/flex-development/mark-tokenizer/issues/271))
- [[`533f2bb`](https://github.com/flex-development/mark-tokenizer/commit/533f2bbd9fd2a1301e3af9a07fbb1d70a63f0d99)] **deps:** bump actions/create-github-app-token from 2.1.4 to 2.2.0 ([#285](https://github.com/flex-development/mark-tokenizer/issues/285))
- [[`a5a5f51`](https://github.com/flex-development/mark-tokenizer/commit/a5a5f5178175f3f58fac94371d118dc99d933a11)] **deps:** bump actions/create-github-app-token from 2.2.0 to 2.2.1 ([#291](https://github.com/flex-development/mark-tokenizer/issues/291))
- [[`18383ac`](https://github.com/flex-development/mark-tokenizer/commit/18383ac6e0e34dda9372d10a428040fc3943a422)] **deps:** bump actions/create-github-app-token from 2.2.1 to 3.0.0 ([#309](https://github.com/flex-development/mark-tokenizer/issues/309))
- [[`25678d5`](https://github.com/flex-development/mark-tokenizer/commit/25678d5d9be262b6175462bae6cc71dc3b5502fa)] **deps:** bump actions/create-github-app-token from 3.0.0 to 3.1.1 ([#320](https://github.com/flex-development/mark-tokenizer/issues/320))
- [[`70e4f9b`](https://github.com/flex-development/mark-tokenizer/commit/70e4f9bf13116273ba59a8ea82ebd943139ccb89)] **deps:** bump actions/create-github-app-token from 3.1.1 to 3.2.0 ([#328](https://github.com/flex-development/mark-tokenizer/issues/328))
- [[`7fae9c7`](https://github.com/flex-development/mark-tokenizer/commit/7fae9c72932864b2e697c9b1edc3bfdc7ef3e85e)] **deps:** bump actions/github-script from 7.0.1 to 8.0.0 ([#267](https://github.com/flex-development/mark-tokenizer/issues/267))
- [[`2d37fff`](https://github.com/flex-development/mark-tokenizer/commit/2d37fff617e55373b500c6c1f5fc35e0c9b44090)] **deps:** bump actions/github-script from 8.0.0 to 9.0.0 ([#319](https://github.com/flex-development/mark-tokenizer/issues/319))
- [[`2091fbe`](https://github.com/flex-development/mark-tokenizer/commit/2091fbe462cbdd95c14b31f84d90875b9e098e1b)] **deps:** Bump actions/setup-node from 4.3.0 to 4.4.0 ([#169](https://github.com/flex-development/mark-tokenizer/issues/169))
- [[`36b2dfc`](https://github.com/flex-development/mark-tokenizer/commit/36b2dfcae1bfd844b68d8e88449b40482ba18c6d)] **deps:** bump actions/setup-node from 4.4.0 to 6.0.0 ([#275](https://github.com/flex-development/mark-tokenizer/issues/275))
- [[`8bb0c06`](https://github.com/flex-development/mark-tokenizer/commit/8bb0c06bb4fc18bde36ba46d86832853e640c047)] **deps:** bump actions/setup-node from 6.0.0 to 6.1.0 ([#288](https://github.com/flex-development/mark-tokenizer/issues/288))
- [[`3e7091f`](https://github.com/flex-development/mark-tokenizer/commit/3e7091fcad07ee5be58279341ea4fe8dd6b65b1b)] **deps:** bump actions/setup-node from 6.1.0 to 6.2.0 ([#298](https://github.com/flex-development/mark-tokenizer/issues/298))
- [[`e095724`](https://github.com/flex-development/mark-tokenizer/commit/e095724f20da04caa27db29a01ea0cb8cc58ae00)] **deps:** bump actions/setup-node from 6.2.0 to 6.3.0 ([#308](https://github.com/flex-development/mark-tokenizer/issues/308))
- [[`2811ac7`](https://github.com/flex-development/mark-tokenizer/commit/2811ac797f053625d7b92f4dafb94a289560bd8a)] **deps:** bump actions/setup-node from 6.3.0 to 6.4.0 ([#323](https://github.com/flex-development/mark-tokenizer/issues/323))
- [[`abd1225`](https://github.com/flex-development/mark-tokenizer/commit/abd12258613740569f805105e19f8ac2b0f9aa3d)] **deps:** bump actions/upload-artifact from 4.6.2 to 5.0.0 ([#277](https://github.com/flex-development/mark-tokenizer/issues/277))
- [[`707f8ea`](https://github.com/flex-development/mark-tokenizer/commit/707f8ea261528dde89bf465805fc61edd69db15f)] **deps:** bump actions/upload-artifact from 5.0.0 to 6.0.0 ([#295](https://github.com/flex-development/mark-tokenizer/issues/295))
- [[`7b18066`](https://github.com/flex-development/mark-tokenizer/commit/7b180664c035844a52a85187df0100a25aa686b4)] **deps:** bump actions/upload-artifact from 6.0.0 to 7.0.0 ([#306](https://github.com/flex-development/mark-tokenizer/issues/306))
- [[`0f6ce53`](https://github.com/flex-development/mark-tokenizer/commit/0f6ce5331f885c6cd8925a15b231eb8cb8cb8fd1)] **deps:** bump actions/upload-artifact from 7.0.0 to 7.0.1 ([#321](https://github.com/flex-development/mark-tokenizer/issues/321))
- [[`6bee6fd`](https://github.com/flex-development/mark-tokenizer/commit/6bee6fd0b7428821cbfd70a6504e0e89d3b102d6)] **deps:** bump andstor/file-existence-action from 3.0.0 to 3.1.0 ([#316](https://github.com/flex-development/mark-tokenizer/issues/316))
- [[`a7b6e4d`](https://github.com/flex-development/mark-tokenizer/commit/a7b6e4d73b095b69f42704d99efb3d82e9a1f0ce)] **deps:** Bump codecov/codecov-action from 5.4.0 to 5.4.2 ([#170](https://github.com/flex-development/mark-tokenizer/issues/170))
- [[`65351f0`](https://github.com/flex-development/mark-tokenizer/commit/65351f0226b1c4db896ec4cbf69d2d6ee3346f8a)] **deps:** Bump codecov/codecov-action from 5.4.2 to 5.4.3 ([#209](https://github.com/flex-development/mark-tokenizer/issues/209))
- [[`e25f9d1`](https://github.com/flex-development/mark-tokenizer/commit/e25f9d1308f7b9f5ccf907d3f790b52f270771cb)] **deps:** Bump codecov/codecov-action from 5.4.3 to 5.5.0 ([#264](https://github.com/flex-development/mark-tokenizer/issues/264))
- [[`a7496fd`](https://github.com/flex-development/mark-tokenizer/commit/a7496fd4b669351b176508f56922fd0bbd3947d2)] **deps:** bump codecov/codecov-action from 5.5.0 to 5.5.1 ([#268](https://github.com/flex-development/mark-tokenizer/issues/268))
- [[`512a4c1`](https://github.com/flex-development/mark-tokenizer/commit/512a4c1c59c4fffa096c2a9c2936b344b121c3c4)] **deps:** bump codecov/codecov-action from 5.5.1 to 5.5.2 ([#292](https://github.com/flex-development/mark-tokenizer/issues/292))
- [[`920c467`](https://github.com/flex-development/mark-tokenizer/commit/920c4676881fc6067d928baa935ba34a04e9bd5b)] **deps:** bump codecov/codecov-action from 5.5.2 to 5.5.3 ([#311](https://github.com/flex-development/mark-tokenizer/issues/311))
- [[`f68c7ea`](https://github.com/flex-development/mark-tokenizer/commit/f68c7ea0be1e73a3db14b557e1528eb006e56b0b)] **deps:** bump codecov/codecov-action from 5.5.3 to 6.0.0 ([#314](https://github.com/flex-development/mark-tokenizer/issues/314))
- [[`eda9f14`](https://github.com/flex-development/mark-tokenizer/commit/eda9f1400dbd58f4873e39676d8241ab88dfd973)] **deps:** Bump crazy-max/ghaction-import-gpg from 6.2.0 to 6.3.0 ([#148](https://github.com/flex-development/mark-tokenizer/issues/148))
- [[`626c06e`](https://github.com/flex-development/mark-tokenizer/commit/626c06e3146ae244329e48ee1b86aac46b8dc127)] **deps:** bump crazy-max/ghaction-import-gpg from 6.3.0 to 7.0.0 ([#307](https://github.com/flex-development/mark-tokenizer/issues/307))
- [[`a13a202`](https://github.com/flex-development/mark-tokenizer/commit/a13a202b63b850acd5d3aeaec282a4d95d0af22a)] **deps:** Bump GitGuardian/ggshield-action from 1.37.0 to 1.38.0 ([#147](https://github.com/flex-development/mark-tokenizer/issues/147))
- [[`41280ad`](https://github.com/flex-development/mark-tokenizer/commit/41280adb82602d0943fa313a28bbafc988239c38)] **deps:** Bump GitGuardian/ggshield-action from 1.38.0 to 1.39.0 ([#188](https://github.com/flex-development/mark-tokenizer/issues/188))
- [[`950d496`](https://github.com/flex-development/mark-tokenizer/commit/950d496fd29e8489c6e6559b16cbd7e7879bee99)] **deps:** Bump GitGuardian/ggshield-action from 1.39.0 to 1.41.0 ([#240](https://github.com/flex-development/mark-tokenizer/issues/240))
- [[`62e264a`](https://github.com/flex-development/mark-tokenizer/commit/62e264a2e924d954bd681aa91a3b2accdbe56227)] **deps:** Bump GitGuardian/ggshield-action from 1.41.0 to 1.42.0 ([#249](https://github.com/flex-development/mark-tokenizer/issues/249))
- [[`f4bf9f8`](https://github.com/flex-development/mark-tokenizer/commit/f4bf9f8b0f69e5db51d17a7d94c8fa9d9e6b0c68)] **deps:** bump GitGuardian/ggshield-action from 1.42.0 to 1.43.0 ([#265](https://github.com/flex-development/mark-tokenizer/issues/265))
- [[`3889d58`](https://github.com/flex-development/mark-tokenizer/commit/3889d5860811675692d9ba1e807ab8dda6a9cc61)] **deps:** bump GitGuardian/ggshield-action from 1.43.0 to 1.44.0 ([#279](https://github.com/flex-development/mark-tokenizer/issues/279))
- [[`db76cd0`](https://github.com/flex-development/mark-tokenizer/commit/db76cd03c4621ab7f576b1d0fec18fba69f34d3a)] **deps:** bump GitGuardian/ggshield-action from 1.44.0 to 1.45.0 ([#283](https://github.com/flex-development/mark-tokenizer/issues/283))
- [[`68cff29`](https://github.com/flex-development/mark-tokenizer/commit/68cff295bc65ba9042ef5ef8f6aafba0f892427b)] **deps:** bump GitGuardian/ggshield-action from 1.45.0 to 1.46.0 ([#297](https://github.com/flex-development/mark-tokenizer/issues/297))
- [[`8bae128`](https://github.com/flex-development/mark-tokenizer/commit/8bae128582d8f165a64364500628e7e29e2f6e2f)] **deps:** bump GitGuardian/ggshield-action from 1.46.0 to 1.47.0 ([#302](https://github.com/flex-development/mark-tokenizer/issues/302))
- [[`308dba3`](https://github.com/flex-development/mark-tokenizer/commit/308dba3e4f36a389c365e81d1c35c1f4814fbc7e)] **deps:** bump GitGuardian/ggshield-action from 1.47.0 to 1.48.0 ([#304](https://github.com/flex-development/mark-tokenizer/issues/304))
- [[`664c6ef`](https://github.com/flex-development/mark-tokenizer/commit/664c6ef9658a150ce7e94341fcfedb555c4948ce)] **deps:** bump GitGuardian/ggshield-action from 1.48.0 to 1.49.0 ([#315](https://github.com/flex-development/mark-tokenizer/issues/315))
- [[`85063ce`](https://github.com/flex-development/mark-tokenizer/commit/85063cef550420b3f46d0d698d1020c9d6eb5afd)] **deps:** bump GitGuardian/ggshield-action from 1.49.0 to 1.50.0 ([#324](https://github.com/flex-development/mark-tokenizer/issues/324))
- [[`9b5411b`](https://github.com/flex-development/mark-tokenizer/commit/9b5411b691f92a50e06bbf78bc5fbff4910baa89)] **deps:** bump GitGuardian/ggshield-action from 1.50.0 to 1.50.3 ([#326](https://github.com/flex-development/mark-tokenizer/issues/326))
- [[`90b960f`](https://github.com/flex-development/mark-tokenizer/commit/90b960f5cb1e361ed29f9220b51e19d7e077da8e)] **deps:** bump kaisugi/action-regex-match from 1.0.1 to 1.0.2 ([#290](https://github.com/flex-development/mark-tokenizer/issues/290))
- [[`86dae7e`](https://github.com/flex-development/mark-tokenizer/commit/86dae7e7af478af05885a86688c4d82861ec8c52)] **deps:** bump octokit/graphql-action from 2.3.2 to 3.0.0 ([#280](https://github.com/flex-development/mark-tokenizer/issues/280))
- [[`ef29917`](https://github.com/flex-development/mark-tokenizer/commit/ef299172e33da8dc0c794e488b30163349edd527)] **deps:** bump octokit/graphql-action from 3.0.0 to 3.0.2 ([#293](https://github.com/flex-development/mark-tokenizer/issues/293))

## 1.0.0-alpha.1 (2025-03-25)

### :package: Build

- [[`e70669c`](https://github.com/flex-development/mark-tokenizer/commit/e70669cce01e8fc722e34729a3243e7583d92996)] **deps-dev:** Bump @stylistic/eslint-plugin from 2.2.0 to 2.2.2 ([#5](https://github.com/flex-development/mark-tokenizer/issues/5))
- [[`3ff06fc`](https://github.com/flex-development/mark-tokenizer/commit/3ff06fc061b5998acbcdbfb95ada3a7e06d294fd)] **deps-dev:** Bump cspell from 8.8.4 to 8.9.1 ([#8](https://github.com/flex-development/mark-tokenizer/issues/8))
- [[`db04218`](https://github.com/flex-development/mark-tokenizer/commit/db04218935fe8b686e07bcc820b7a5c052976166)] **deps-dev:** Bump dprint from 0.46.2 to 0.46.3 ([#4](https://github.com/flex-development/mark-tokenizer/issues/4))
- [[`917a7d3`](https://github.com/flex-development/mark-tokenizer/commit/917a7d3b7c1a0d247723c2390eb1300ad965ed25)] **deps-dev:** Bump dprint from 0.49.0 to 0.49.1 ([#126](https://github.com/flex-development/mark-tokenizer/issues/126))
- [[`d5a7d01`](https://github.com/flex-development/mark-tokenizer/commit/d5a7d0173e4a5d7446ffd3d8e364e8d92fcd6d12)] **deps-dev:** Bump eslint-import-resolver-typescript from 3.8.3 to 3.8.4 ([#116](https://github.com/flex-development/mark-tokenizer/issues/116))
- [[`eecce0a`](https://github.com/flex-development/mark-tokenizer/commit/eecce0a60550b8a20fc31080e96933d1d3cfac7d)] **deps-dev:** Bump eslint-import-resolver-typescript from 3.8.4 to 4.1.0 ([#121](https://github.com/flex-development/mark-tokenizer/issues/121))
- [[`776b1d7`](https://github.com/flex-development/mark-tokenizer/commit/776b1d701826c67ebc23a0c1d0e2045ae85f327b)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.1.0 to 4.2.1 ([#123](https://github.com/flex-development/mark-tokenizer/issues/123))
- [[`7785172`](https://github.com/flex-development/mark-tokenizer/commit/7785172f06d365cd0e0dfb7988ded37f2b604dd4)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.1 to 4.2.2 ([#125](https://github.com/flex-development/mark-tokenizer/issues/125))
- [[`c69a3ec`](https://github.com/flex-development/mark-tokenizer/commit/c69a3ecb9080d0ea198151272f15841c75c66800)] **deps-dev:** Bump eslint-import-resolver-typescript from 4.2.2 to 4.2.3 ([#136](https://github.com/flex-development/mark-tokenizer/issues/136))
- [[`0bb3ace`](https://github.com/flex-development/mark-tokenizer/commit/0bb3acef88c59bde115622226d955564ec9976b2)] **deps-dev:** Bump eslint-mdx from 3.2.0 to 3.3.1 ([#138](https://github.com/flex-development/mark-tokenizer/issues/138))
- [[`b5032f7`](https://github.com/flex-development/mark-tokenizer/commit/b5032f7dffcccf7806f1cd1b41b119f7a4ccb41b)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.3 to 50.6.6 ([#115](https://github.com/flex-development/mark-tokenizer/issues/115))
- [[`03354f0`](https://github.com/flex-development/mark-tokenizer/commit/03354f0886ca405fffcaeb16451334ae6330e852)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.6 to 50.6.7 ([#122](https://github.com/flex-development/mark-tokenizer/issues/122))
- [[`7e1f3f6`](https://github.com/flex-development/mark-tokenizer/commit/7e1f3f67fe7bb8ad7873787388b4ccebed436b96)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.7 to 50.6.8 ([#124](https://github.com/flex-development/mark-tokenizer/issues/124))
- [[`3c2e48c`](https://github.com/flex-development/mark-tokenizer/commit/3c2e48c1d4dafa92afc0de15ab712913e1b578fc)] **deps-dev:** Bump eslint-plugin-jsdoc from 50.6.8 to 50.6.9 ([#133](https://github.com/flex-development/mark-tokenizer/issues/133))
- [[`d20a7a2`](https://github.com/flex-development/mark-tokenizer/commit/d20a7a2b0a16a14cdee72a8ee0ab86d86186f42e)] **deps-dev:** Bump eslint-plugin-jsonc from 2.19.1 to 2.20.0 ([#137](https://github.com/flex-development/mark-tokenizer/issues/137))
- [[`22bfb07`](https://github.com/flex-development/mark-tokenizer/commit/22bfb07d816f71ddfdfcabba525c870faf22beb0)] **deps-dev:** bump eslint-plugin-mdx from 3.2.0 to 3.3.1
- [[`4d1dfe2`](https://github.com/flex-development/mark-tokenizer/commit/4d1dfe2044ab1ee5b2e96df45f44eda81f3a4a75)] **deps-dev:** Bump eslint-plugin-unicorn from 57.0.0 to 58.0.0 ([#132](https://github.com/flex-development/mark-tokenizer/issues/132))
- [[`41485da`](https://github.com/flex-development/mark-tokenizer/commit/41485da23f0b41f4f57afd41385d2f30081d6bba)] **deps-dev:** Bump globals from 15.5.0 to 15.6.0 ([#2](https://github.com/flex-development/mark-tokenizer/issues/2))
- [[`788e7f8`](https://github.com/flex-development/mark-tokenizer/commit/788e7f8a3911d08c4eb5549e483bc251d35e3fe7)] **deps-dev:** Bump the eslint group with 2 updates ([#131](https://github.com/flex-development/mark-tokenizer/issues/131))
- [[`16980c9`](https://github.com/flex-development/mark-tokenizer/commit/16980c937fa5163de9be5685d0b44699fd7553fd)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#114](https://github.com/flex-development/mark-tokenizer/issues/114))
- [[`a69a2eb`](https://github.com/flex-development/mark-tokenizer/commit/a69a2eba06e17c3245fac1dbe97e5a7a526074d2)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#130](https://github.com/flex-development/mark-tokenizer/issues/130))
- [[`19ff6cc`](https://github.com/flex-development/mark-tokenizer/commit/19ff6cc84133922a4bae85c3427d7817936e9e91)] **deps-dev:** Bump the typescript-eslint group with 3 updates ([#134](https://github.com/flex-development/mark-tokenizer/issues/134))
- [[`93a466f`](https://github.com/flex-development/mark-tokenizer/commit/93a466f45fee9494a5ff0bb1ed3577a25749a0ef)] **deps-dev:** Bump the vitest group with 2 updates ([#7](https://github.com/flex-development/mark-tokenizer/issues/7))
- [[`1dbef66`](https://github.com/flex-development/mark-tokenizer/commit/1dbef6600206d99318b13056d1cffad165582721)] **deps-dev:** Bump the vitest group with 3 updates ([#120](https://github.com/flex-development/mark-tokenizer/issues/120))
- [[`3f445b6`](https://github.com/flex-development/mark-tokenizer/commit/3f445b6ba1928d0588a31d8bdb4d82b7a756df8f)] **deps:** bump @flex-development/vfile-reader from 3.1.1 to 3.1.2
- [[`c11f97c`](https://github.com/flex-development/mark-tokenizer/commit/c11f97cba76608c31b90ecdeaf4aa83a62d56e1e)] **deps:** Bump debug from 4.3.5 to 4.4.0 ([#112](https://github.com/flex-development/mark-tokenizer/issues/112))
- [[`2b18a33`](https://github.com/flex-development/mark-tokenizer/commit/2b18a33a6551a5c7c87fb993a629f857a5e3c4db)] **deps:** Bump micromark-util-chunked from 2.0.0 to 2.0.1 ([#111](https://github.com/flex-development/mark-tokenizer/issues/111))
- [[`a9b0b44`](https://github.com/flex-development/mark-tokenizer/commit/a9b0b44964e7917d139aa75304454a1e34733085)] **deps:** Bump vite from 6.2.1 to 6.2.3 ([#139](https://github.com/flex-development/mark-tokenizer/issues/139))

### :robot: Continuous Integration

- [[`08be546`](https://github.com/flex-development/mark-tokenizer/commit/08be5468e2147d14bc6292989bee14959400a16b)] **deps:** Bump actions/cache from 4.2.2 to 4.2.3 ([#129](https://github.com/flex-development/mark-tokenizer/issues/129))
- [[`a4dd862`](https://github.com/flex-development/mark-tokenizer/commit/a4dd862325eec976304fdd06d08af306c9b98d0b)] **deps:** Bump actions/create-github-app-token from 1.11.5 to 1.11.6 ([#110](https://github.com/flex-development/mark-tokenizer/issues/110))
- [[`c09bd92`](https://github.com/flex-development/mark-tokenizer/commit/c09bd9222177e07e62de5fe559de9a2eb17a772d)] **deps:** Bump actions/create-github-app-token from 1.11.6 to 1.11.7 ([#128](https://github.com/flex-development/mark-tokenizer/issues/128))
- [[`c267041`](https://github.com/flex-development/mark-tokenizer/commit/c26704150a73b2b6f4721391c2f3f6107b9aeedb)] **deps:** Bump actions/setup-node from 4.0.2 to 4.0.4 ([#85](https://github.com/flex-development/mark-tokenizer/issues/85))
- [[`60bacd0`](https://github.com/flex-development/mark-tokenizer/commit/60bacd0bd47fe1bc9526246cb9e35ad0f98f0335)] **deps:** Bump actions/upload-artifact from 4.6.1 to 4.6.2 ([#127](https://github.com/flex-development/mark-tokenizer/issues/127))
- [[`b794ee2`](https://github.com/flex-development/mark-tokenizer/commit/b794ee2719f405970e3eec94b728cfaeddd64747)] **deps:** Bump GitGuardian/ggshield-action from 1.36.0 to 1.37.0 ([#113](https://github.com/flex-development/mark-tokenizer/issues/113))

### :pencil: Documentation

- [[`977cc56`](https://github.com/flex-development/mark-tokenizer/commit/977cc562024cd04612827df1453810be90ac1edc)] what is this?
- [[`4690e69`](https://github.com/flex-development/mark-tokenizer/commit/4690e69306651f1071fa299ed4b445245abba86e)] when should i use this?

### :sparkles: Features

- [[`a4837a7`](https://github.com/flex-development/mark-tokenizer/commit/a4837a7d1a9c63036ed522c0e844cd7c0ed78428)] `Lexer`, `tokenize`
- [[`7ba5585`](https://github.com/flex-development/mark-tokenizer/commit/7ba55853eb39fc012cb0470317fa440d3f901e23)] buffer chunks
- [[`fae10c3`](https://github.com/flex-development/mark-tokenizer/commit/fae10c3fe2e867e8c8842e5a77f60c1a81bf080b)] construct records
- [[`d30832e`](https://github.com/flex-development/mark-tokenizer/commit/d30832ed296f2fa6bc2cd77ba12c258c417103d7)] stream support

### :bug: Fixes

- [[`3a8f8bd`](https://github.com/flex-development/mark-tokenizer/commit/3a8f8bde885e68b1be9690dbfcd711b8b132d5f5)] [`createTokenizer`] `moveOnBreak` logic at end-of-file
- [[`521ba38`](https://github.com/flex-development/mark-tokenizer/commit/521ba38bea139847710101d54beef9b3e57c40f8)] [`createTokenizer`] do not move on `codes.empty`
- [[`1442482`](https://github.com/flex-development/mark-tokenizer/commit/14424827d0d16c763ceed3a210ca14d82a9213e4)] tail token restore

### :house_with_garden: Housekeeping

- [[`d1f4367`](https://github.com/flex-development/mark-tokenizer/commit/d1f4367bd2b2378fdb87cdd641ccb78cc2f87b98)] `.mts` migration and project rename
- [[`404b4ed`](https://github.com/flex-development/mark-tokenizer/commit/404b4edc8dc8fae5ca082d74dd4eec37d4db9cfb)] initial commit
- [[`e80df68`](https://github.com/flex-development/mark-tokenizer/commit/e80df68d44f77244eca75062ec8dde625c3536bc)] project rename
- [[`874267c`](https://github.com/flex-development/mark-tokenizer/commit/874267cd506800dac471c4d133e1532623c361af)] **tests:** refactor token snaphot serializer

### :mechanical_arm: Refactors

- [[`85f91f2`](https://github.com/flex-development/mark-tokenizer/commit/85f91f22fbf2dcb23c07fae8eaf5b552841d15d5)] api
- [[`3d662fc`](https://github.com/flex-development/mark-tokenizer/commit/3d662fc675a0a92679b9fd040acd929b1a7f610a)] api


