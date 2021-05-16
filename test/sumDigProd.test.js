const sumDigProd = require('../challenges/sumDigProd');
const assert = require('chai').assert;

describe('#sumDigProd', () => {
  it('should return 6 when given sumDigProd(16, 28)', () => {
    const result = sumDigProd(16, 28);
    assert.strictEqual(result, 6);
  });

  it('should be able to recieve an unlimited number of arguments', () => {
    const result = sumDigProd(1, 2, 3, 4, 5, 6);
    assert.strictEqual(result, 2);
  });

  it('should return 0 when given 0', () => {
    const result = sumDigProd(0);
    assert.strictEqual(result, 0);
  });

  it('should return 9 when given sumDigProd(9)', () => {
    const result = sumDigProd(9);
    assert.strictEqual(result, 9);
  });

  it('should return 6 when given sumDigProd(26, 497, 62, 841)', () => {
    const result = sumDigProd(26, 497, 62, 841);
    assert.strictEqual(result, 6);
  });

  it('should return a single digit', () => {
    const a = sumDigProd(9);
    const b = sumDigProd(26, 497, 62, 841);
    const c = sumDigProd(1, 2, 3, 4, 5, 6);
    const results = [a, b, c];
    const test = results.every((num) => num < 10);
    assert.isTrue(test);
  });

  it('should work with negative numbers', () => {
    const result = sumDigProd(123, -99);
    assert.strictEqual(result, 8);
  });

  it('should return 6 when given sumDigProd(17737, 98723, 2)', () => {
    const result = sumDigProd(17737, 98723, 2);
    assert.strictEqual(result, 6);
  });
});
