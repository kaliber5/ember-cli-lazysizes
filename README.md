# ember-cli-lazysizes

The Ember.js integration of [lazysizes](https://github.com/aFarkas/lazysizes) loader for images (responsive and regular), iframes and more without any configuration. [Demo app](http://afarkas.github.io/lazysizes) from original repository.

## Installation

```bash
ember install ember-cli-lazysizes
```

## Usage

Usage is simple, all you have to do is to assign the class (default: `'lazyload'`) to image tag in your template:

```html
<img src="./tomster.png" alt="tomster" class="lazyload">
```

and the response is the custom generated class (default: `'lazyloaded'`):

```html
<img src="./tomster.png" alt="tomster" class=" lazyloaded">
```

All defaults can be overwritten in `ember-cli-build.js` file:

```js
'ember-cli-lazysizes': {
  lazyClass: 'lazy',
  loadedClass: 'loaded'
}
```

Find more about lazysizes' JS API on [original repo](https://github.com/aFarkas/lazysizes#js-api).
