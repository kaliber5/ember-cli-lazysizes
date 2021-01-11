ember-cli-lazysizes
==============================================================================

[![CI](https://github.com/kaliber5/ember-cli-lazysizes/workflows/CI/badge.svg)](https://github.com/kaliber5/ember-cli-lazysizes/actions?query=workflow%3ACI+branch%3Amaster)

Ember.js integration of [lazysizes](https://github.com/aFarkas/lazysizes) loader for images (responsive and regular), iframes and more without any required configuration. See the [demo app](http://afarkas.github.io/lazysizes) from the original repository.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-lazysizes
```


Usage
------------------------------------------------------------------------------

Usage is simple, all you have to do is to assign the class (default: `'lazyload'`) to any image tag in your template,
and use `data-src` or `data-srcset` attributes instead of `src` or `srcset`:

```html
<img data-src="tomster.png" alt="tomster" class="lazyload">
```

See the lazysizes' [markup API](https://github.com/aFarkas/lazysizes#markup-api) for all the supported loading patterns.

### Configuration

All defaults can be overwritten in `ember-cli-build.js` file:

```js
'ember-cli-lazysizes': {
  lazyClass: 'lazy',
  loadedClass: 'loaded'
}
```

Find more about lazysizes' configuration options on its [original repo](https://github.com/aFarkas/lazysizes#js-api---options).

### Plugins

Lazysizes provides a number of [plugins](https://github.com/aFarkas/lazysizes#available-plugins-in-this-repo). You can easily include the plugins you need through the `plugins` option.

```js
'ember-cli-lazysizes': {
  plugins: [
    'bgset',
    'aspectratio'
  ]
}
```
See the [list of available plugin-names](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins)


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
