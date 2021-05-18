/* 
  INSTRUCTIONS: 
  The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). Given a sorted array of numbers, return an array of all modes in ascending order.

  EXAMPLES:
  mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

  mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

  mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]

  NOTES: 
  In this challenge, all group of numbers will have at least one mode.
*/

const mode = (arr) => {
  const counts = {};
  const result = [];
  let mode = 0;

  arr.forEach((num) =>
    counts.hasOwnProperty(num) ? (counts[num] += 1) : (counts[num] = 0)
  );

  for (const num in counts) {
    if (counts[num] > mode) {
      mode = counts[num];
    }
  }

  for (const num in counts) {
    if (counts[num] === mode) {
      result.push(Number(num));
    }
  }

  return result;
};

module.exports = mode;
