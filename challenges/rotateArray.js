/* 
  INSTRUCTIONS: 
  Rotate an array either left or right according to the number passed.
  Your challenge is to write a function that rotates an array by a given number, either left or right depending on if the number is positive or negative.

  ARGUMENTS: 
  Array: The array which will be rotated.
  Number: The number of index positions the array will be rotated.
  Returns Array: The rotated array.

  EXAMPLES: 
  A positive number rotates it to the right:
  rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2) ➞ [7, 9, 0, 1, 2, 3, 4, 5]

  A negative number rotates it to the left:
  rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2) ➞ [2, 3, 4, 5, 7, 9, 0, 1]

  The number to rotate by can be longer than the array, it just loops over in that case:
  rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12) ➞ [4, 5, 7, 9, 0, 1, 2, 3]
*/

const rotateArray = (arr, n) => {
  const lastIndex = arr.length - 1;
  let arrCopy = [...arr];
  let i = n;

  while (i !== 0) {
    if (n > 0) {
      arrCopy = [arrCopy[lastIndex], ...arrCopy.slice(0, lastIndex)];
      i--;
    } else {
      arrCopy = [...arrCopy.slice(1), arrCopy[0]];
      i++;
    }
  }

  return arrCopy;
};

module.exports = rotateArray;
