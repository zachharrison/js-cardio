const simpleCheck = require('../challenges/simpleCheck');
const assert = require('chai').assert;

describe('#simpleCheck', () => {
  it('should return 2 given simpleCheck(3, 5)', () => {
    const result = simpleCheck(3, 5);
    assert.strictEqual(result, 2);
  });

  it('should return 3 given simpleCheck(8, 4)', () => {
    const result = simpleCheck(8, 4);
    assert.strictEqual(result, 3);
  });

  it('should return 1 given simpleCheck(54, 17)', () => {
    const result = simpleCheck(54, 17);
    assert.strictEqual(result, 1);
  });

  it('should return 10 given simpleCheck(150080, 150032)', () => {
    const result = simpleCheck(150080, 150032);
    assert.strictEqual(result, 10);
  });
});
