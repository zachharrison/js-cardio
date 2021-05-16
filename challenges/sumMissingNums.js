/* 
  INSTRUCTIONS

  Create a function that returns the sum of missing numbers from the given array.

  EXAMPLE: 
  sumMissingNums([4, 3, 8, 1, 2]) ➞ 18
  5 + 6 + 7 = 18

  sumMissingNums([17, 16, 15, 10, 11, 12]) ➞ 27
  13 + 14 = 27

*/

const sumMissingNums = (arr) => {
  let sumWithMissingNums = 0;
  const sumWithoutMissingNums = arr.reduce((acc, cur) => (acc += cur));
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  for (let i = min; i <= max; i++) {
    sumWithMissingNums += i;
  }

  return sumWithMissingNums - sumWithoutMissingNums;
};

module.exports = sumMissingNums;
