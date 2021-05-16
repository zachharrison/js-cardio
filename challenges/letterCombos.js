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
  // const result = [];
  // const digitArr = [];
  // const digits = {
  //   2: ['a', 'b', 'c'],
  //   3: ['d', 'e', 'f'],
  //   4: ['g', 'h', 'i'],
  //   5: ['j', 'k', 'l'],
  //   6: ['m', 'n', 'o'],
  //   7: ['p', 'q', 'r', 's'],
  //   8: ['t', 'u', 'v'],
  //   9: ['w', 'x', 'y', 'z'],
  // };
  // for (const num of digitString) {
  //   digitArr.push(num);
  // }
  // const result = digitArr.reduce((acc, cur, index) => {
  //   return acc.concat(digits[cur][index]);
  // }, []);
  // for(let i = 0; i < digitArr.length; i++) {
  //   for(let j = i + 1; j < digits[digitArr[i]].length; i++){
  //   }
  // }
  // const test = digitArr.map((digit, index, arr) => {
  //   return `${digits[digit][index]} ${digits[digit][index + 1]}`;
  // });
  // return result;
};

module.exports = letterCombos;
