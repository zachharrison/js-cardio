const firstRepeat = require('../challenges/firstRepeat');
const assert = require('chai').assert;

describe('#firstRepeat', () => {
  it('should return -1 if there are no repeating characters', () => {
    const result = firstRepeat('Balrog');
    assert.strictEqual(result, '-1');
  });

  it('should return "l" when given firstRepeat("Gollum")', () => {
    const result = firstRepeat('Gollum');
    assert.strictEqual(result, 'l');
  });

  it('should return "a" when given firstRepeat("Galadriel")', () => {
    const result = firstRepeat('Galadriel');
    assert.strictEqual(result, 'a');
  });

  it('should return the first repeating character when multiple are found', () => {
    const result = firstRepeat('basketball');
    assert.strictEqual(result, 'b');
  });

  it('should be case sensitive', () => {
    const result = firstRepeat('Samsung');
    assert.strictEqual(result, '-1');
  });
});
