const pull = require('../challenges/pull');
const assert = require('chai').assert;

describe('#pull', () => {
  it('should return ["cat", "penguin", "dog"] when given pull(["cat", "penguin", "dog", "mouse"], "mouse")', () => {
    const result = pull(['cat', 'penguin', 'dog', 'mouse'], 'mouse');
    assert.deepEqual(result, ['cat', 'penguin', 'dog']);
  });

  it('should mutate the original array and return the array without the items to be pulled out', () => {
    const array = ['mug', 'spoon', 'pan', 'glass', 'spatula'];
    pull(array, 'spatula');
    assert.deepEqual(array, ['mug', 'spoon', 'pan', 'glass']);
  });

  it('should be able to pull multiple values from array', () => {
    const result = pull([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3, 4);
    assert.deepEqual(result, [1, 5, 6, 7, 8, 9]);
  });

  it('should pull all instances of a particular value if there are more than one in the given array', () => {
    const result = pull(['car', 'bike', 'bus', 'truck', 'car'], 'car');
    assert.deepEqual(result, ['bike', 'bus', 'truck']);
  });
});
