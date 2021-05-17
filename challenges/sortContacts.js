/* 
  INSTRUCTIONS: 

  Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

  EXAMPLES: 

  sortContacts([
    "John Locke",
    "Thomas Aquinas",
    "David Hume",
    "Rene Descartes"
  ], "ASC") ➞ [
    "Thomas Aquinas",
    "Rene Descartes",
    "David Hume",
    "John Locke"
  ]

  Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

  sortContacts([
    "Paul Erdos",
    "Leonhard Euler",
    "Carl Gauss"
  ], "DESC") ➞ [
    "Carl Gauss",
    "Leonhard Euler",
    "Paul Erdos"
  ]

  Gauss (G) > Erdos (ER) > Euler (EU)

  sortContacts([], "DESC") ➞ []

  sortContacts(null, "DESC") ➞ []

  sortContacts(undefined, "DESC") ➞ []

  NOTES: 
  An array with a single name should be trivially returned.
  An empty array, or an input of null or undefined should return an empty array.

*/

const sortContacts = (contacts, order) => {
  if (!contacts || !contacts.length) return [];

  const getLastname = (fullName) => fullName.split(' ')[1];

  return contacts.sort((a, b) => {
    if (order === 'ASC') {
      return getLastname(a).localeCompare(getLastname(b));
    } else {
      return getLastname(b).localeCompare(getLastname(a));
    }
  });
};

module.exports = sortContacts;
