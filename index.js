'use strict';

const map = require('broccoli-stew').map;
const path = require('path');

module.exports = {
  name: 'ember-cli-lazysizes',

  included(app) {
    this._super.included.apply(this, arguments);

    this.addonOptions = app.options[this.name] || {};
    this.import('vendor/lazysizes.js');
  },

  treeForVendor() {
    let lazySizesPath = path.dirname(require.resolve('lazysizes'));

    return map(this.treeGenerator(lazySizesPath), 'lazysizes.js', (content) => `if (typeof FastBoot === 'undefined') {
      window.lazySizesConfig = ${JSON.stringify(this.addonOptions)};
      ${content}
    }`);
  }
};
