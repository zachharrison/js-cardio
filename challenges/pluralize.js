/* 
  INSTRUCTIONS: 
  Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

  EXAMPLES:
  pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]
  pluralize(["table", "table", "table"]) ➞ ["tables"]
  pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]

  NOTES: 
  This is an oversimplification of the English language so no edge cases will appear.
  Only focus on whether or not to add an s to the ends of words.
  All tests will be valid.
*/

const pluralize = (arr) => {
  const plural = arr.map((x, i) => {
    if (arr.indexOf(x) !== arr.lastIndexOf(x)) {
      return x + 's';
    }
    return x;
  });

  return [...new Set(plural)];
};

module.exports = pluralize;
