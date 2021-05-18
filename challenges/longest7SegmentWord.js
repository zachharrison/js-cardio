/* 
  INSTRUCTIONS: 
  Given an array of words, return the longest word which can fit on a 7 segment display.

  Letters which do not fit on a 7 segment display are k, m, v, w and x.
  Therefore, do not count words which include these letters.

  EXAMPLES:
  longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

  longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

  longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""

  NOTES: 
  All words will be given in lowercase.
  Return an empty string if no words are eligible (see example #3).
  If multiple valid words have the same length, return the first word that appears.
*/

const longest7SegmentWord = (arr) => {
  const regex = /[k, m, v, w, x]/i;
  const validWords = arr.filter((word) => {
    if (!regex.test(word)) {
      return word;
    }
  });
  return validWords.length < 1
    ? ''
    : validWords.sort((a, b) => b.length - a.length)[0];
};

module.exports = longest7SegmentWord;
