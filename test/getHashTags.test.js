const getHashTags = require('../challenges/getHashTags');
const assert = require('chai').assert;

describe('#getHashTags', () => {
  it('should return ["#avocado", "#became", "#global"] when given getHashTags("How the Avocado Became the Fruit of the Global Trade")', () => {
    const result = getHashTags(
      'How the Avocado Became the Fruit of the Global Trade'
    );
    assert.deepEqual(result, ['#avocado', '#became', '#global']);
  });

  it('should return ["#christmas", "#probably", "#will"] when given getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")', () => {
    const result = getHashTags(
      'Why You Will Probably Pay More for Your Christmas Tree This Year'
    );
    assert.deepEqual(result, ['#christmas', '#probably', '#will']);
  });

  it('should return ["#surprise", "#parents", "#fruit"] when given getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")', () => {
    const result = getHashTags(
      'Hey Parents, Surprise, Fruit Juice Is Not Fruit'
    );
    assert.deepEqual(result, ['#surprise', '#parents', '#fruit']);
  });

  it('should return all words in descending order if called with less than or equal to 3', () => {
    const result = getHashTags('Visualizing Science');
    assert.deepEqual(result, ['#visualizing', '#science']);
  });
});
