/* 
  INSTRUCTIONS: 
  Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

  [1, 2, 3, 4, 5, 6], 3
  [[1, 3, 5], [2, 4, 6]]
  // Divide array into groups of size 3.

  [1, 2, 3, 4, 5, 6], 2
  [[1, 4], [2, 5], [3, 6]]
  // Divide array into groups of size 2.

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
  [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
  // "Leftover" arrays are okay.

  EXAMPLES: 
  groupArr([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]

  groupArr([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]

  groupArr([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]

  groupArr([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]

  NOTES: 
  The size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
  Keep the relative order of the numbers in each sub-array the same as the order in the original array.

*/

const groupArr = (arr, size) => {
  const result = [];
  const numOfSubArrays = Math.ceil(arr.length / size);

  for (let i = 0; i < numOfSubArrays; i++) {
    result.push([]);
  }

  while (arr.length > 0) {
    for (const subArr of result) {
      if (!arr[0]) return result;
      subArr.push(arr[0]);
      arr.splice(0, 1);
    }
  }

  return result;
};

module.exports = groupArr;
