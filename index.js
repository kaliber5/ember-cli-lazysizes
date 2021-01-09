'use strict';

const map = require('broccoli-stew').map;
const path = require('path');
const find = require('broccoli-stew').find;
const transform = require('fastboot-transform');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    let app = this._findHost();

    this.addonOptions = app.options[this.name] || {};
    this.plugins = this.addonOptions.plugins || [];
    delete this.addonOptions.plugins;

    this.plugins.forEach((plugin) => {
      this.import(`vendor/plugins/${plugin}/ls.${plugin}.js`);
    });

    this.import(`vendor/lazysizes.js`);
  },

  treeForVendor(tree) {
    let trees = [];
    if (tree) {
      trees.push(tree);
    }

    let lazyNodeTree = this.treeGenerator(
      path.dirname(require.resolve('lazysizes'))
    );
    if (this.plugins.length > 0) {
      let include = this.plugins.map(
        (plugin) => `plugins/${plugin}/ls.${plugin}.js`
      );
      trees.push(transform(find(lazyNodeTree, { include })));
    }
    trees.push(
      transform(
        map(find(lazyNodeTree, 'lazysizes.js'), (content) => {
          return `window.lazySizesConfig = ${JSON.stringify(this.addonOptions)};
          ${content}`;
        })
      )
    );
    return mergeTrees(trees, { overwrite: true });
  },
};
