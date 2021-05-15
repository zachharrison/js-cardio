const rotateArray = require('../challenges/rotateArray');
const assert = require('chai').assert;

describe('#rotateArray', () => {
  it('should rotate to the right given a postive number', () => {
    const result = rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2);
    assert.deepEqual(result, [7, 9, 0, 1, 2, 3, 4, 5]);
  });

  it('should rotate to the left give a negative number', () => {
    const result = rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2);
    assert.deepEqual(result, [2, 3, 4, 5, 7, 9, 0, 1]);
  });

  it('The number to rotate by can be longer than the array, it just loops over in that case', () => {
    const result = rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12);
    assert.deepEqual(result, [4, 5, 7, 9, 0, 1, 2, 3]);
  });

  it('should rotate 4 spots to the left when given rotateArray([1, 20, 36, 40, 55, 57, 59, 77, 85, 99], -4)', () => {
    const result = rotateArray([1, 20, 36, 40, 55, 57, 59, 77, 85, 99], -4);
    assert.deepEqual(result, [55, 57, 59, 77, 85, 99, 1, 20, 36, 40]);
  });
});
