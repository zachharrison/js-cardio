const longest7SegmentWord = require('../challenges/longest7SegmentWord');
const assert = require('chai').assert;

describe('#longest7SegmentWord', () => {
  it('should return attract', () => {
    const result = longest7SegmentWord([
      'vegetarian',
      'unique',
      'sensitivity',
      'goat',
      'nature',
      'attract',
      'suntan',
      'mobile',
      'pillow',
      'economist',
      'arrest',
      'galaxy',
      'proud',
      'proud',
    ]);
    assert.strictEqual(result, 'attract');
  });

  it('should return institution', () => {
    const result = longest7SegmentWord([
      'vat',
      'suntan',
      'murder',
      'dance',
      'course',
      'institution',
    ]);
    assert.strictEqual(result, 'institution');
  });

  it('should return preoccupation', () => {
    const result = longest7SegmentWord([
      'adjust',
      'garlic',
      'preoccupation',
      'nature',
      'garlic',
      'undermine',
      'pavement',
      'payment',
      'fair',
      'twin',
      'expertise',
      'pillow',
      'dance',
      'economist',
      'establish',
      'nervous',
      'sector',
    ]);
    assert.strictEqual(result, 'preoccupation');
  });

  it('should return establish', () => {
    const result = longest7SegmentWord(['winner', 'twin', 'establish']);
    assert.strictEqual(result, 'establish');
  });

  it('should return straight', () => {
    const result = longest7SegmentWord([
      'width',
      'straight',
      'sign',
      'inspire',
      'lay',
      'pavement',
      'settle',
      'undermine',
      'cat',
      'labour',
      'adjust',
      'admire',
      'scramble',
      'pavement',
      'limited',
      'payment',
      'withdrawal',
      'full',
      'brave',
    ]);
    assert.strictEqual(result, 'straight');
  });

  it('should return garlic', () => {
    const result = longest7SegmentWord([
      'extort',
      'galaxy',
      'garlic',
      'winner',
    ]);
    assert.strictEqual(result, 'garlic');
  });

  it('should return an empty string when no words fit', () => {
    const result = longest7SegmentWord([
      'velocity',
      'mackerel',
      'woven',
      'kingsmen',
    ]);
    assert.strictEqual(result, '');
  });
});
