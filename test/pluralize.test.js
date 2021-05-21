const pluralize = require('../challenges/pluralize');
const assert = require('chai').assert;

describe('#pluralize', () => {
  it('should return ["cows", "pig"] when called with pluralize(["cow", "pig", "cow", "cow"])', () => {
    const result = pluralize(['cow', 'pig', 'cow', 'cow']);
    assert.deepEqual(result, ['cows', 'pig']);
  });

  it('should return ["tables"] when called with pluralize(["table", "table", "table"])', () => {
    const result = pluralize(['table', 'table', 'table']);
    assert.deepEqual(result, ['tables']);
  });

  it('should return ["chair", "pencil", "arm"] when called with pluralize(["chair", "pencil", "arm"])', () => {
    const result = pluralize(['chair', 'pencil', 'arm']);
    assert.deepEqual(result, ['chair', 'pencil', 'arm']);
  });
});
