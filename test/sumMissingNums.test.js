const sumMissingNums = require('../challenges/sumMissingNums');
const assert = require('chai').assert;

describe('#sumMissingNums', () => {
  it('should return 18 when given sumMissingNums([4, 3, 8, 1, 2])', () => {
    const result = sumMissingNums([4, 3, 8, 1, 2]);
    assert.strictEqual(result, 18);
  });

  it('should return 27 when given sumMissingNums([17, 16, 15, 10, 11, 12])', () => {
    const result = sumMissingNums([17, 16, 15, 10, 11, 12]);
    assert.strictEqual(result, 27);
  });
});
