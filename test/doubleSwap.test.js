const doubleSwap = require('../challenges/doubleSwap');
const assert = require('chai').assert;

describe('#doubleSwap', () => {
  it('should return "bbaaccc" when called with doubleSwap("aabbccc", "a", "b")', () => {
    const result = doubleSwap('aabbccc', 'a', 'b');
    assert.strictEqual(result, 'bbaaccc');
  });

  it('should return "random w&rds writt#n h#r#", when called with doubleSwap("random w#rds writt&n h&r&", "#", "&")', () => {
    const result = doubleSwap('random w#rds writt&n h&r&', '#', '&');
    assert.strictEqual(result, 'random w&rds writt#n h#r#');
  });

  it('should return "129 985 556 799 888", when called with doubleSwap("128 895 556 788 999", "8", "9")', () => {
    const result = doubleSwap('128 895 556 788 999', '8', '9');
    assert.strictEqual(result, '129 985 556 799 888');
  });

  it('should return "amaam aim", when called with doubleSwap("mamma mia", "m", "a")', () => {
    const result = doubleSwap('mamma mia', 'm', 'a');
    assert.strictEqual(result, 'amaam aim');
  });

  it('should return "&&556644", when called with doubleSwap("445566&&", "4", "&")', () => {
    const result = doubleSwap('445566&&', '4', '&');
    assert.strictEqual(result, '&&556644');
  });
});
