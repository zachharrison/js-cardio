const numberTransform = require('../challenges/numberTransform');
const assert = require('chai').assert;

describe('#numberTransform', () => {
  it('should return 0 when given numberTransform(1, 1)', () => {
    const result = numberTransform(1, 1);
    assert.strictEqual(result, 0);
  });

  it('should return 1 when given numberTransform(2, 4)', () => {
    const result = numberTransform(2, 4);
    assert.strictEqual(result, 1);
  });

  it('should return 2 when given numberTransform(4, 16)', () => {
    const result = numberTransform(4, 16);
    assert.strictEqual(result, 2);
  });

  it('should return 1 when given numberTransform(2048, 1024)', () => {
    const result = numberTransform(2048, 1024);
    assert.strictEqual(result, 1);
  });

  it('should return 10 when given numberTransform(2048, 2)', () => {
    const result = numberTransform(2048, 2);
    assert.strictEqual(result, 10);
  });

  it('should return 2 when given numberTransform(9, 2)', () => {
    const result = numberTransform(9, 2);
    assert.strictEqual(result, 2);
  });

  it('should return 2 when given numberTransform(2, 8)', () => {
    const result = numberTransform(2, 8);
    assert.strictEqual(result, 2);
  });
});
