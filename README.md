[![Build Status](https://travis-ci.org/kaliber5/ember-cli-lazysizes.svg?branch=master)](https://travis-ci.org/kaliber5/ember-cli-lazysizes)
[![npm](https://img.shields.io/npm/v/ember-cli-lazysizes.svg)](http://npm.im/ember-cli-lazysizes)

# ember-cli-lazysizes

The Ember.js integration of [lazysizes](https://github.com/aFarkas/lazysizes) loader for images (responsive and regular), iframes and more without any required configuration. See the [Demo app](http://afarkas.github.io/lazysizes) from the original repository.

## Installation

```bash
ember install ember-cli-lazysizes
```

## Usage

Usage is simple, all you have to do is to assign the class (default: `'lazyload'`) to any image tag in your template,
and use `data-src` or `data-srcset` attributes instead of `src` or `srcset`:

```html
<img data-src="tomster.png" alt="tomster" class="lazyload">
```

See the lazysizes' [markup API](https://github.com/aFarkas/lazysizes#markup-api) for all the supported loading patterns.

## Configuration

All defaults can be overwritten in `ember-cli-build.js` file:

```js
'ember-cli-lazysizes': {
  lazyClass: 'lazy',
  loadedClass: 'loaded'
}
```

Find more about lazysizes' configuration options on its [original repo](https://github.com/aFarkas/lazysizes#js-api---options).

### Plugins

Lazysizes provides a number of plugins [markup API](https://github.com/aFarkas/lazysizes#available-plugins-in-this-repo). You can easily include the plugins you need through the `plugins` option.

```js
'ember-cli-lazysizes': {
  plugins: [
    'bgset',
    'aspectrtio'
  ]
}
```
See [list of available plugins](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins)