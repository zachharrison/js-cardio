/* 
  INSTRUCTIONS: 
  Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.
  
  EXAMPLES: 

  posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]
  
  posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]
  
  posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]
  
  posNegSort([]) ➞ []

  NOTES: 
  If given an empty array, you should return an empty array.
  Integers will always be either positive or negative (0 isn't included in the tests).

*/

const posNegSort = (arr) => {
  // CREATE RESULT ARRAY
  let result = [];

  // SORT ALL NUMBERS GREATER THAN 0
  let sortedPositives = arr.filter((x) => x > 0).sort((a, b) => a - b);

  // PUSH TO RESULT ARRAY IF NUMBER IS NEGATIVE ELSE PUSH AN EMPTY SPACE
  arr.forEach((num) => {
    if (num < 0) {
      result.push(num);
    } else {
      result.push('');
    }
  });

  // FILL ALL EMPTY SPACES WITH THE SORTED POSITIVE INTEGERS
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '') {
      result[i] = sortedPositives[0];
      sortedPositives = sortedPositives.slice(1);
    }
  }
  return result;
};

module.exports = posNegSort;
