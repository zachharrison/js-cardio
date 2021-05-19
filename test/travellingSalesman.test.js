const travellingSalesman = require('../challenges/travellingSalesman');
const assert = require('chai').assert;

describe('#travellingSalesman', () => {
  it('should return 1 when called with travellingSalesman(1)', () => {
    const result = travellingSalesman(1);
    assert.strictEqual(result, 1);
  });

  it('should return 2 when called with travellingSalesman(2)', () => {
    const result = travellingSalesman(2);
    assert.strictEqual(result, 2);
  });

  it('should return 6 when called with travellingSalesman(3)', () => {
    const result = travellingSalesman(3);
    assert.strictEqual(result, 6);
  });

  it('should return 24 when called with travellingSalesman(4)', () => {
    const result = travellingSalesman(4);
    assert.strictEqual(result, 24);
  });

  it('should return 120 when called with travellingSalesman(5)', () => {
    const result = travellingSalesman(5);
    assert.strictEqual(result, 120);
  });

  it('should return 720 when called with travellingSalesman(6)', () => {
    const result = travellingSalesman(6);
    assert.strictEqual(result, 720);
  });

  it('should return 5040 when called with travellingSalesman(7)', () => {
    const result = travellingSalesman(7);
    assert.strictEqual(result, 5040);
  });

  it('should return 40320 when called with travellingSalesman(8)', () => {
    const result = travellingSalesman(8);
    assert.strictEqual(result, 40320);
  });
});
