/* 
  INSTRUCTIONS: 
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  TELEPHONE BUTTONS IMAGE:
  https://edabit-challenges.s3.amazonaws.com/200px-Telephone-keypad2.svg.png

  EXAMPLES:
  letterCombos("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

  letterCombos("532") ➞ ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]

*/

const letterCombos = (digitString) => {
  if (digitString === '') return [];
  const digits = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (digitString.length === 1) return digits[digitString];

  const combine = (cur, n) => {
    if (cur.length === digitString.length) {
      return cur;
    }

    return digits[digitString[n]].flatMap((letter) =>
      combine(cur + letter, n + 1)
    );
  };
  return combine('', 0);
};

module.exports = letterCombos;
