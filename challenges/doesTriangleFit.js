/* 
  INSTRUCTIONS:

  Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

  EXAMPLES:
  doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
  doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
  doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
*/

const doesTriangleFit = (a1, a2) => {
  const returnAreaIfTriangleIsValid = (array) => {
    const [a, b, c] = array;
    if (a + b > c && a + c > b && b + c > a) {
      return array.reduce((acc, cur) => (acc += cur), 0) / 2;
    }

    return false;
  };

  const area1 = returnAreaIfTriangleIsValid(a1);
  const area2 = returnAreaIfTriangleIsValid(a2);

  if (area1 && area2) {
    return area1 <= area2;
  }

  return false;
};

module.exports = doesTriangleFit;
