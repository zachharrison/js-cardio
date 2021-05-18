const lemonadeStand = require('../challenges/lemonadeStand');
const assert = require('chai').assert;

describe('#lemonadeStand', () => {
  it('should return true if you can provide customers with correct change', () => {
    const result = lemonadeStand([5, 5, 5, 10, 20]);
    assert.strictEqual(result, true);
  });

  it('should return true if you can provide customers with correct change', () => {
    const result = lemonadeStand([5, 5, 10]);
    assert.strictEqual(result, true);
  });

  it('should return false if you CANNOT provide customers with correct change', () => {
    const result = lemonadeStand([10, 10]);
    assert.strictEqual(result, false);
  });

  it('should return true if you can provide customers with correct change', () => {
    const result = lemonadeStand([5, 5, 5, 20]);
    assert.strictEqual(result, true);
  });

  it('should return false if you CANNOT provide customers with correct change', () => {
    const result = lemonadeStand([5, 5, 10, 10, 20]);
    assert.strictEqual(result, false);
  });
});
