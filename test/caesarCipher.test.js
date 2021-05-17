const caesarCipher = require('../challenges/caesarCipher');
const assert = require('chai').assert;

describe('#caesarCipher', () => {
  it('should return "okffng-Qwvb", given caesarCipher("middle-Outz", 2)', () => {
    const result = caesarCipher('middle-Outz', 2);
    assert.strictEqual(result, 'okffng-Qwvb');
  });

  it('should return "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj", given caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)', () => {
    const result = caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5);
    assert.strictEqual(result, 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj');
  });

  it('should return "U zlcyhx ch hyyx cm u zlcyhx chxyyx", given caesarCipher("A friend in need is a friend indeed", 20)', () => {
    const result = caesarCipher('A friend in need is a friend indeed', 20);
    assert.strictEqual(result, 'U zlcyhx ch hyyx cm u zlcyhx chxyyx');
  });

  it('should return "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.", given caesarCipher("A Fool and His Money Are Soon Parted.", 27)', () => {
    const result = caesarCipher('A Fool and His Money Are Soon Parted.', 27);
    assert.strictEqual(result, 'B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.');
  });

  it('should return "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.", given caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49)', () => {
    const result = caesarCipher(
      'One should not worry over things that have already happened and that cannot be changed.',
      49
    );
    assert.strictEqual(
      result,
      'Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.'
    );
  });

  it('should return "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.", given caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126)', () => {
    const result = caesarCipher(
      'Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.',
      126
    );
    assert.strictEqual(
      result,
      'Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.'
    );
  });
});
