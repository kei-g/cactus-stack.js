# cactus-stack.js [![license][license-image]][license-url] [![npm][npm-image]][npm-url]

[![coverage][nyc-cov-image]][github-url] [![dependency][depencency-image]][dependency-url] [![maintenance][maintenance-image]][npmsio-url] [![quality][quality-image]][npmsio-url] [![GitHub CI (Build)][github-build-image]][github-build-url] [![GitHub CI (Coverage)][github-coverage-image]][github-coverage-url]

`cactus-stack` - A library for cactus stack works on [Node.js](https://nodejs.org/)

## Installation

```shell
npm i cactus-stack --save
```

## Usage

```typescript
import { CactusStack, CactusStackError } from 'cactus-stack'

type Foo = {
  id: number
  name: string
}

const root = new CactusStack<Foo>()

const firstNode = root.push({
  id: 1,
  name: 'foo',
})

const secondNode = root.push({
  id: 2,
  name: 'bar',
})

const thirdNode = secondNode.push({
  id: 3,
  name: 'baz',
})

const baz = thirdNode.pop()
if (baz instanceof CactusStackError) {
  console.error(baz.message)
  process.exit(1)
}
console.assert(baz.id === 3)
console.assert(baz.name === 'baz')

const foo = firstNode.pop()
if (foo instanceof CactusStackError) {
  console.error(foo.message)
  process.exit(1)
}
console.assert(foo.id === 1)
console.assert(foo.name === 'foo')

const err = thirdNode.pop()
console.assert(err instanceof CactusStackError)
```

[depencency-image]:https://img.shields.io/librariesio/release/npm/cactus-stack?logo=nodedotjs
[dependency-url]:https://npmjs.com/package/cactus-stack?activeTab=dependencies
[github-build-image]:https://github.com/kei-g/cactus-stack.js/actions/workflows/build.yml/badge.svg
[github-build-url]:https://github.com/kei-g/cactus-stack.js/actions/workflows/build.yml
[github-coverage-image]:https://github.com/kei-g/cactus-stack.js/actions/workflows/coverage.yml/badge.svg
[github-coverage-url]:https://github.com/kei-g/cactus-stack.js/actions/workflows/coverage.yml
[github-url]:https://github.com/kei-g/cactus-stack.js
[license-image]:https://img.shields.io/github/license/kei-g/cactus-stack.js
[license-url]:https://opensource.org/licenses/BSD-3-Clause
[maintenance-image]:https://img.shields.io/npms-io/maintenance-score/cactus-stack?logo=npm
[npm-image]:https://img.shields.io/npm/v/cactus-stack.svg?logo=npm
[npm-url]:https://npmjs.org/package/cactus-stack
[npmsio-url]:https://npms.io/search?q=cactus-stack
[nyc-cov-image]:https://img.shields.io/nycrc/kei-g/cactus-stack.js?config=.nycrc.json&label=coverage
[quality-image]:https://img.shields.io/npms-io/quality-score/cactus-stack?logo=npm
