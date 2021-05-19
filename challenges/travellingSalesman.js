/* 
  INSTRUCTIONS: 
  A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

  If we have cities A, B and C, possible paths would be:

  A -> B -> C
  A -> C -> B
  B -> A -> C
  B -> C -> A
  C -> B -> A
  C -> A -> B
  ... which gives us 6 as the possible number of paths.

  Examples
  travellingSalesman(4) ➞ 24

  travellingSalesman(1) ➞ 1

  travellingSalesman(9) ➞ 362880
  Notes
  Inspired by a video from Dr. Peter Uelkes.
  This challenge is describing a factorial.
*/

const travellingSalesman = (paths) => {
  if (paths === 0) return 1;
  return paths * travellingSalesman(paths - 1);
};

module.exports = travellingSalesman;
