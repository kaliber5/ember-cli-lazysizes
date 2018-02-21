'use strict';

const map = require('broccoli-stew').map;
const path = require('path');
const find = require('broccoli-stew').find;
const transform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-lazysizes',

  included(app) {
    this._super.included.apply(this, arguments);

    this.addonOptions = app.options[this.name] || {};
    this.plugins = this.addonOptions.plugins || [];
    delete this.addonOptions.plugins;

    this.plugins.forEach((plugin) => {
      this.import(`vendor/plugins/${plugin}/ls.${plugin}.js`, { using: [ {transformation: 'fastboot-transform'}]});
    });

    this.import(`vendor/lazysizes.js`, { using: [{ transformation: 'inject-lazysizes-config'}, { transformation: 'fastboot-transform' }]});
  },

  importTransforms() {
    return {
      'fastboot-transform': transform,
      'inject-lazysizes-config': (tree) => {
        return map(tree, (content) => {
          return `window.lazySizesConfig = ${JSON.stringify(this.addonOptions)}; ${content}`;
        });
      }
    }
  },

  treeForVendor() {
    let include = [];

    let lazySizesPath = path.dirname(require.resolve('lazysizes'));
    include.push('lazysizes.js');
    this.plugins.forEach((plugin) => {
      include.push(`plugins/${plugin}/ls.${plugin}.js`);
    });

    return find(this.treeGenerator(lazySizesPath), { include });
  }
};
