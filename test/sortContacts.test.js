const sortContacts = require('../challenges/sortContacts');
const assert = require('chai').assert;

describe('#sortContacts', () => {
  it('should sort last names alphabetically when called with "ASC"', () => {
    const result = sortContacts(
      ['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'],
      'ASC'
    );
    assert.deepEqual(result, [
      'Thomas Aquinas',
      'Rene Descartes',
      'David Hume',
      'John Locke',
    ]);
  });

  it('should sort last names in reverse alphabetical order when called with "DESC"', () => {
    const result = sortContacts(
      ['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'],
      'DESC'
    );
    assert.deepEqual(result, ['Carl Gauss', 'Leonhard Euler', 'Paul Erdos']);
  });

  it('should return an empty array when called with an empty array or any other falsy value', () => {
    const result = sortContacts([], 'ASC');
    assert.deepEqual(result, []);
  });

  it("should return ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'] when called with sortContacts(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'], 'DESC')", () => {
    const result = sortContacts(
      ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'],
      'DESC'
    );
    assert.deepEqual(result, [
      'Michael Phelps',
      'Jesse Owens',
      'Michael Jordan',
      'Usain Bolt',
    ]);
  });
});

// sortContacts(
//   ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'],
//   'DESC'
// ),
//   ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'];
