/* 
  INSTRUCTIONS: 
  At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

  Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

  Return true if and only if you can provide every customer with correct change.

  EXAMPLES:
  lemonade([5, 5, 5, 10, 20]) ➞ true

  lemonade([5, 5, 10, 10, 20]) ➞ false

  lemonade([10, 10]) ➞ false

  lemonade([5, 5, 10]) ➞ true

  NOTES: 
  You don't have any change in hand at first.
  bills is an integer array.
  bills[i] will be either 5, 10, or 20.
*/

const lemonadeStand = (bills) => {
  let change = 0;

  if (bills[0] === 10) return false;

  for (const bill of bills) {
    if (bill > 5 && change - bill > 5) {
      return false;
    }

    change += bill;
  }

  return true;
};

module.exports = lemonadeStand;
