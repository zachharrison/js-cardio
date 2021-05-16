const posNegSort = require('../challenges/posNegSort');
const assert = require('chai').assert;

describe('#posNegSort', () => {
  it('should return [2, 3, -2, 5, -8, 6, -2] when given posNegSort([6, 3, -2, 5, -8, 2, -2])', () => {
    const result = posNegSort([6, 3, -2, 5, -8, 2, -2]);
    assert.deepEqual(result, [2, 3, -2, 5, -8, 6, -2]);
  });

  it('should return [1, 2, 3, -1, 4, 5, -1, 6] when given posNegSort([6, 5, 4, -1, 3, 2, -1, 1])', () => {
    const result = posNegSort([6, 5, 4, -1, 3, 2, -1, 1]);
    assert.deepEqual(result, [1, 2, 3, -1, 4, 5, -1, 6]);
  });

  it('should return [-5, -5, -5, -5, 7, -5] when given posNegSort([-5, -5, -5, -5, 7, -5])', () => {
    const result = posNegSort([-5, -5, -5, -5, 7, -5]);
    assert.deepEqual(result, [-5, -5, -5, -5, 7, -5]);
  });

  it('should return [] when given posNegSort([])', () => {
    const result = posNegSort([]);
    assert.deepEqual(result, []);
  });

  it('should return [-5, -5, -5, -5, -4, -5] when given posNegSort([-5, -5, -5, -5, -4, -5])', () => {
    const result = posNegSort([-5, -5, -5, -5, -4, -5]);
    assert.deepEqual(result, [-5, -5, -5, -5, -4, -5]);
  });

  it('should return [-5, 1, -8, 2, -1, 3, 4, -7] when given posNegSort([-5, 4, -8, 3, -1, 2, 1, -7])', () => {
    const result = posNegSort([-5, 4, -8, 3, -1, 2, 1, -7]);
    assert.deepEqual(result, [-5, 1, -8, 2, -1, 3, 4, -7]);
  });

  it('should return [-5, 3, 4] when given posNegSort([-5, 4, 3])', () => {
    const result = posNegSort([-5, 4, 3]);
    assert.deepEqual(result, [-5, 3, 4]);
  });
});
