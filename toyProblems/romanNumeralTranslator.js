// leetcode # 13

/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

// passes all tests on leetcode
// assumes roman numeral is valid
const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = DIGIT_VALUES[s[i]];
        const next = DIGIT_VALUES[s[i + 1]];
        if (next && next > curr) {
            total -= curr
        } else {
            total += curr;
        }
    }
    return total;
};

// leetcode # 12

/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

// passes all tests on leetcode
const intToRoman = function(num) {
    // possibilities for 1000s, 100s, 10s, and 1s places
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    // get individual digit values
    num = num.toString();
    // pad front with 0s if necessary
    while (num.length < 4) {
        num = '0' + num;
    }
    return M[parseInt(num[0])] + C[parseInt(num[1])] + X[parseInt(num[2])] + I[parseInt(num[3])];
};
