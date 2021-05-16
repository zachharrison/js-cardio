/* 
  According to the lodash documentation, _.pull Removes all given values from array using SameValueZero for equality comparisons. Note that unlike _.without, this method mutates array.

  Arguments
  array (Array): The array to modify.
  values: The values to remove.
  Example:

  pull(["electric", "gas", "electric", "gas", "gas", "electric"], "gas") ➞ ["electric", "electric", "electric"]
  The challenege of this function is that it mutates the array so methods like filter and map can't be used.
*/

const pull = (arr, ...values) => {
  const indexesToRemove = [];

  arr.forEach((val, index) => {
    if (values.includes(val)) {
      indexesToRemove.push(index);
    }
  });

  while (indexesToRemove.length) {
    arr.splice(indexesToRemove.pop(), 1);
  }

  return arr;
};

module.exports = pull;
