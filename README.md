# `micro-visualize` [![NPM](https://img.shields.io/npm/v/micro-visualize.svg?style=flat)](https://www.npmjs.org/package/micro-visualize) [![travis-ci](https://travis-ci.org/onbjerg/micro-visualize.svg?branch=master)](https://travis-ci.org/onbjerg/micro-visualize) [![Greenkeeper](https://badges.greenkeeper.io/onbjerg/micro-visualize.svg)](https://greenkeeper.io/)

Visualizes requests and responses for services written with [`micro`](https://github.com/zeit/micro).

**Screenshot**

<p align="center">
  <img src="http://i.imgur.com/ZQdhB51.png" />
</p>

---


## Installation

```sh
npm install --save micro-visualize
```

Or even better

```sh
yarn add micro-visualize
```

## Import and Usage Example

```js
const visualize = require('micro-visualize')

module.exports = visualize(async function (req, res) {
  return 'Hello, world!'
})
```

## API

#### visualize

Visualize requests and responses for a given function. The function is a no-op if `log` is not `dev`.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Async function, your normal `micro` logic.
-   `log` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** An optional log level (default: `dev`)

**Examples**

```js
const visualize = require('micro-visualize')

module.exports = visualize(async function (req, res) {
  return 'Hello, world!'
})
```

```js
const visualize = require('micro-visualize')

// Will only visualize requests/responses if
// ``process.env.NODE_ENV`` is ``dev``
module.exports = visualize(async function (req, res) {
  return 'Hello, world!'
}, process.env.NODE_ENV)
```

Returns an async **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**.

## Credits

Thanks to @rickharrison for his [excellent PR](https://github.com/zeit/micro/pull/104) which this project was heavily based on.
