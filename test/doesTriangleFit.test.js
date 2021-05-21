const doesTriangleFit = require('../challenges/doesTriangleFit');
const assert = require('chai').assert;

describe('#doubleSwap', () => {
  it('should return true when called with doesTriangleFit([1, 1, 1], [1, 1, 1])', () => {
    const result = doesTriangleFit([1, 1, 1], [1, 1, 1]);
    assert.strictEqual(result, true);
  });

  it('should return true when called with doesTriangleFit([1, 1, 1], [2, 2, 2])', () => {
    const result = doesTriangleFit([1, 1, 1], [2, 2, 2]);
    assert.strictEqual(result, true);
  });

  it('should return false when called with doesTriangleFit([1, 2, 3], [1, 2, 2])', () => {
    const result = doesTriangleFit([1, 2, 3], [1, 2, 2]);
    assert.strictEqual(result, false);
  });

  it('should return true when called with doesTriangleFit([3, 6, 8], [23, 63, 42])', () => {
    const result = doesTriangleFit([3, 6, 8], [23, 63, 42]);
    assert.strictEqual(result, true);
  });

  it('should return false when called with doesTriangleFit([12, 63, 42], [1, 6, 8])', () => {
    const result = doesTriangleFit([12, 63, 42], [1, 6, 8]);
    assert.strictEqual(result, false);
  });

  it('should return false when called with doesTriangleFit([1, 6, 8], [1, 6, 8])', () => {
    const result = doesTriangleFit([1, 6, 8], [1, 6, 8]);
    assert.strictEqual(result, false);
  });

  it('should return false when called with doesTriangleFit([3, 6, 8], [1, 10, 8])', () => {
    const result = doesTriangleFit([3, 6, 8], [1, 10, 8]);
    assert.strictEqual(result, false);
  });
});

// console.log(doesTriangleFit([1, 1, 1], [1, 1, 1])) // true
// console.log(doesTriangleFit([1, 1, 1], [2, 2, 2])) // true
// console.log(doesTriangleFit([1, 2, 3], [1, 2, 2])) // false

// console.log(doesTriangleFit([3, 6, 8], [23, 63, 42])) // true

// console.log(doesTriangleFit([12, 63, 42], [1, 6, 8])) // false
// console.log(doesTriangleFit([1, 6, 8], [1, 6, 8])) // false
// console.log(doesTriangleFit([3, 6, 8], [1, 10, 8])) // false
