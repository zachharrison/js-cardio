const letterCombos = require('../challenges/letterCombos');
const assert = require('chai').assert;

describe('#letterCombos', () => {
  it('should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] when given letterCombos("23")', () => {
    const result = letterCombos('23');
    assert.deepEqual(result, [
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  it('should return all possible combinations when given letterCombos("532")', () => {
    const result = letterCombos('532');
    assert.deepEqual(result, [
      'jda',
      'jdb',
      'jdc',
      'jea',
      'jeb',
      'jec',
      'jfa',
      'jfb',
      'jfc',
      'kda',
      'kdb',
      'kdc',
      'kea',
      'keb',
      'kec',
      'kfa',
      'kfb',
      'kfc',
      'lda',
      'ldb',
      'ldc',
      'lea',
      'leb',
      'lec',
      'lfa',
      'lfb',
      'lfc',
    ]);
  });

  it('should return all possible combinations when given letterCombos("943")', () => {
    const result = letterCombos('943');
    assert.deepEqual(result, [
      'wgd',
      'wge',
      'wgf',
      'whd',
      'whe',
      'whf',
      'wid',
      'wie',
      'wif',
      'xgd',
      'xge',
      'xgf',
      'xhd',
      'xhe',
      'xhf',
      'xid',
      'xie',
      'xif',
      'ygd',
      'yge',
      'ygf',
      'yhd',
      'yhe',
      'yhf',
      'yid',
      'yie',
      'yif',
      'zgd',
      'zge',
      'zgf',
      'zhd',
      'zhe',
      'zhf',
      'zid',
      'zie',
      'zif',
    ]);
  });

  it('should return all possible combinations when given letterCombos("372")', () => {
    const result = letterCombos('372');
    assert.deepEqual(result, [
      'dpa',
      'dpb',
      'dpc',
      'dqa',
      'dqb',
      'dqc',
      'dra',
      'drb',
      'drc',
      'dsa',
      'dsb',
      'dsc',
      'epa',
      'epb',
      'epc',
      'eqa',
      'eqb',
      'eqc',
      'era',
      'erb',
      'erc',
      'esa',
      'esb',
      'esc',
      'fpa',
      'fpb',
      'fpc',
      'fqa',
      'fqb',
      'fqc',
      'fra',
      'frb',
      'frc',
      'fsa',
      'fsb',
      'fsc',
    ]);
  });
});
