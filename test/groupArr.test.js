const groupArr = require('../challenges/groupArr');
const assert = require('chai').assert;

describe('#groupArr', () => {
  it('should return [[1, 3], [2, 4]], given groupArr([1, 2, 3, 4], 2)', () => {
    const result = groupArr([1, 2, 3, 4], 2);
    assert.deepEqual(result, [
      [1, 3],
      [2, 4],
    ]);
  });

  it('should fill as many arrays as possible', () => {
    const result = groupArr([1, 2, 3, 4, 5, 6, 7], 4);
    assert.deepEqual(result, [
      [1, 3, 5, 7],
      [2, 4, 6],
    ]);
  });

  it('should return [[1], [2], [3], [4], [5]], given groupArr([1, 2, 3, 4, 5], 1)', () => {
    const result = groupArr([1, 2, 3, 4, 5], 1);
    assert.deepEqual(result, [[1], [2], [3], [4], [5]]);
  });

  it('should return [[1, 3, 5], [2, 4, 6]], given groupArr([1, 2, 3, 4, 5, 6], 4) because the size parameter represents the maximum possible length', () => {
    const result = groupArr([1, 2, 3, 4, 5, 6], 4);
    assert.deepEqual(result, [
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });
});
