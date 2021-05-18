/* 
  Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

  EXAMPLES: 
  firstRepeat("legolas") ➞ "l"

  firstRepeat("Gandalf") ➞ "a"

  firstRepeat("Balrog") ➞ "-1"

  firstRepeat("Isildur") ➞ "-1"
  Case sensitive "I" not equal to "i"

  NOTES:
  Tests are case sensitive.

*/

const firstRepeat = (str) => {
  const repeatChar = str
    .split('')
    .filter((char, i, arr) => arr.indexOf(char) !== arr.lastIndexOf(char))[0];

  return !repeatChar ? '-1' : repeatChar;
};

module.exports = firstRepeat;
