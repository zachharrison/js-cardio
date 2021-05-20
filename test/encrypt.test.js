const encrypt = require('../challenges/encrypt');
const assert = require('chai').assert;

describe('#encrypt', () => {
  it('should return "0c0r0kaca" when called with encrypt("karaca")', () => {
    const result = encrypt('karaca');
    assert.strictEqual(result, '0c0r0kaca');
  });

  it('should return "k0r3baca" when called with encrypt("burak")', () => {
    const result = encrypt('burak');
    assert.strictEqual(result, 'k0r3baca');
  });

  it('should return "0n0n0baca" when called with encrypt("banana")', () => {
    const result = encrypt('banana');
    assert.strictEqual(result, '0n0n0baca');
  });

  it('should return "0c0pl0aca" when called with encrypt("alpaca")', () => {
    const result = encrypt('alpaca');
    assert.strictEqual(result, '0c0pl0aca');
  });

  it('should return "2ll1haca" when called with encrypt("hello")', () => {
    const result = encrypt('hello');
    assert.strictEqual(result, '2ll1haca');
  });
});
