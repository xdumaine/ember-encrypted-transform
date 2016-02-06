/* global CryptoJS */
import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:enc-string', 'Unit | Transform | enc string', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

const KEY = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
const IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

// Replace this with your real tests.
test('it can decrypt a value', function(assert) {
  let transform = this.subject();
  const result = transform.deserialize('xzS7A351deezRT+6iGKIzA==', KEY, { iv: IV });
  assert.equal(result, 'Batman');
});
