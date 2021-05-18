/* 
  INSTRUCTIONS: 
  Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

  EXAMPLES:
  getHashTags("How the Avocado Became the Fruit of the Global Trade") ➞ ["#avocado", "#became", "#global"]

  getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year") ➞ ["#christmas", "#probably", "#will"]

  getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit") ➞ ["#surprise", "#parents", "#fruit"]

  getHashTags("Visualizing Science") ➞ ["#visualizing", "#science"]

  NOTES:
  If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
  Punctuation does not count towards a word's length.

*/

const getHashTags = (str) =>
  str
    .toLowerCase()
    .match(/[a-zA-Z]+/g)
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map((word) => `#${word}`);

module.exports = getHashTags;
