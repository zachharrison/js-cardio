const getStudentNameAndAverageNotes = require('../challenges/getStudentNameAndAverageNotes');
const assert = require('chai').assert;

describe('#getStudentNameAndAverageNotes', () => {
  it('should return [{ name: "John", avgNote: 4 }], given [{ name: "John", notes: [3, 5, 4]}]', () => {
    const result = getStudentNameAndAverageNotes([
      { name: 'John', notes: [3, 5, 4] },
    ]);
    assert.deepEqual(result, [{ name: 'John', avgNote: 4 }]);
  });

  it('should return [{ name: "John", avgNote: 4 }, { name: "Zach", avgNote: 5 }], given [{ name: "John", notes: [3, 5, 4]}, { name: "Zach", notes: [1, 5, 8, 6] }, { name: "Joe", notes: [3, 6, 9, 2, 5] }]', () => {
    const result = getStudentNameAndAverageNotes([
      { name: 'John', notes: [3, 5, 4] },
      { name: 'Zach', notes: [1, 5, 8, 6] },
      { name: 'Joe', notes: [3, 6, 9, 2, 5] },
    ]);
    assert.deepEqual(result, [
      { name: 'John', avgNote: 4 },
      { name: 'Zach', avgNote: 5 },
      { name: 'Joe', avgNote: 5 },
    ]);
  });

  it('should return avgNote of 0 when given an empty notes array', () => {
    const result = getStudentNameAndAverageNotes([
      { name: 'Sarah', notes: [] },
    ]);
    assert.deepEqual(result, [{ name: 'Sarah', avgNote: 0 }]);
  });
});
