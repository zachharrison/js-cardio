const mode = require('../challenges/mode');
const assert = require('chai').assert;

describe('#mode', () => {
  it('should return an array with one number if it occurs more than every other number in the array', () => {
    const result = mode([1, 2, 5, 6, 6, 6, 7, 10]);
    assert.deepEqual(result, [6]);
  });

  it('should return an array with one number if it occurs more than every other number in the array', () => {
    const result = mode([2, 2, 6, 9, 10, 10, 10]);
    assert.deepEqual(result, [10]);
  });

  it('should return an array with one number if it occurs more than every other number in the array', () => {
    const result = mode([1, 1, 1, 5, 1]);
    assert.deepEqual(result, [1]);
  });

  it('should return an array of numbers that occur the most, if there is more than one', () => {
    const result = mode([1, 1, 5, 6, 6, 10, 10]);
    assert.deepEqual(result, [1, 6, 10]);
  });

  it('should return an array of numbers that occur the most, if there is more than one', () => {
    const result = mode([2, 2, 3, 3, 4, 8]);
    assert.deepEqual(result, [2, 3]);
  });
});
