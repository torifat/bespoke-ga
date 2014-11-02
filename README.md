[![Build Status](https://secure.travis-ci.org/torifat/bespoke-ga.png?branch=master)](https://travis-ci.org/torifat/bespoke-ga) [![Coverage Status](https://coveralls.io/repos/torifat/bespoke-ga/badge.png)](https://coveralls.io/r/torifat/bespoke-ga)

# bespoke-ga

Google Analytics for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/torifat/bespoke-ga/master/dist/bespoke-ga.min.js
[max]: https://raw.github.com/torifat/bespoke-ga/master/dist/bespoke-ga.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  ga = require('bespoke-ga');

bespoke.from('#presentation', [
  ga()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.ga()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-ga
```

### Bower

```bash
$ bower install bespoke-ga
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
