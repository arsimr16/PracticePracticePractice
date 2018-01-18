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
