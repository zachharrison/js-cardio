/* 
  Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

  Create a function that takes a string str (text to be encrypted) and an integer n (the rotation factor). It should return an encrypted string.

  EXAMPLES:
  caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

  // m -> o
  // i -> k
  // d -> f
  // d -> f
  // l -> n
  // e -> g
  // -    -
  // O -> Q
  // u -> w
  // t -> v
  // z -> b

  caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

  caesarCipher("A friend in need is a friend indeed", 20) ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

  NOTES:
  All test input will be a valid ASCII string.
*/

const caesarCipher = (str, n) => {
  let result = '';

  // RETURN ENCRYPTED CHARACTER
  const getCharFromCode = (charCode, shift = n) => {
    // UPPERCASE LETTERS
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }

    // LOWERCASE LETTERS
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
  };

  for (let i = 0; i < str.length; i++) {
    // GET ASCII CODE
    const code = str[i].charCodeAt();

    // KEEP CHARACTER AS IS IF IT IS NOT A LETTER IN THE ALPHABET
    if (!/[a-z]/i.test(str[i])) {
      result += str[i];
    } else {
      const char = getCharFromCode(code);
      result += char;
    }
  }

  return result;
};

module.exports = caesarCipher;
