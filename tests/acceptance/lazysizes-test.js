import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | lazysizes');

test('it creates the `lazySizes` global and overwrittes the `lazyClass`', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(window.lazySizes);
    assert.equal(window.lazySizesConfig.lazyClass, 'lazy');
  });
});

