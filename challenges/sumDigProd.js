/* 
  INSTRUCTIONS: 
  Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

  EXAMPLES:
  
  sumDigProd(16, 28) ➞ 6
  16 + 28 = 44
  4 * 4 =  16
  1 * 6 = 6

  sumDigProd(0) ➞ 0

  sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

  NOTES:
  The input of the function is at least one number.
*/

const sumDigProd = (...numbers) => {
  if (numbers.length === 1 && numbers[0] < 10) return numbers[0];
  const splitAndMultiply = (number) => {
    const arr = [];
    number = number.toString();

    for (const char of number) {
      arr.push(+char);
    }

    return arr.reduce((acc, cur) => acc * cur);
  };

  let sum = numbers.reduce((acc, cur) => (acc += cur));

  while (sum > 10) {
    sum = splitAndMultiply(sum);
    if (sum < 10) {
      return sum;
    }
  }
};

module.exports = sumDigProd;
