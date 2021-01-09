import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | lazysizes', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /lazysizes', async function (assert) {
    await visit('/');

    assert.ok(window.lazySizes);
    assert.equal(window.lazySizesConfig.lazyClass, 'lazy');
  });
});
