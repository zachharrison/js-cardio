/* 
  INSTRUCTIONS: 
  Write a function to replace all instances of character c1 with character c2 and vice versa.

  EXAMPLES: 
  doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

  doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"

  doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"

  NOTES: 
  Both characters will show up at least once in the string.

*/

const doubleSwap = (str, c1, c2) => {
  return str
    .split('')
    .map((char) => (char === c1 ? c2 : char === c2 ? c1 : char))
    .join('');
};

module.exports = doubleSwap;
