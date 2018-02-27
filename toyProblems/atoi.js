/*
LEETCODE 8 - atoi (ASCII to integer)

The function first discards as many whitespace characters as necessary 
until the first non-whitespace character is found. Then, starting from 
this character, takes an optional initial plus or minus sign followed 
by as many numerical digits as possible, and interprets them as a 
numerical value.

The string can contain additional characters after those that form the 
integral number, which are ignored and have no effect on the behavior 
of this function.

If the first sequence of non-whitespace characters in str is not a valid 
integral number, or if no such sequence exists because either str is 
empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. 
If the correct value is out of the range of representable values, 
INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
*/


// I: a string
// O: integer representation of string
// C: within range -2147483648 to 2147483647 (otherwise return upper or lower bound), don't use built-in parseInt()
// E: empty str, str of all empty spaces, optional sign, more than one sign, spaces before and after digits, non-digit chars within string
const atoi = (str) => {
  // remove whitespace
  str = str.trim();

  // get sign if present and remove from str
  let sign = 1;
  if (str[0] === '-') {
      sign = -1;
      str = str.slice(1);
  } else if (str[0] === '+') {
      str = str.slice(1);
  }

  // get vals from ASCII codes until reaching a non-digit char or end of str
  const digits = [];
  for (let i = 0; i < str.length; i++) {
      if (/[\d]/.test(str[i])) {
          digits.push(str.charCodeAt(i) - 48);
      } else {
          i = str.length;
      }
  }

  // compute val of all digits based on place values
  let sum = 0;
  let place = 1;
  for (let j = digits.length - 1; j >= 0; j--) {
      sum += digits[j] * place;
      place *= 10;
  }

  const intVal = sum * sign;
  // if intVal is outside rage, return range bound
  return Math.max(Math.min(intVal, 2147483647), -2147483648)
};

// test atoi fn against this one liner using built-in parseInt()
const atoi2 = (str) => Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);

const assertEquals = (actual, expected, testname) => {
  if (actual === expected) {
    console.log(`passed ${testname}`);
  } else {
    console.log(`failed ${testname}: expected ${expected}, but got ${actual}`);
  }
};

assertEquals(atoi(''), atoi2(''), 'should return 0 for an empty string');
assertEquals(atoi('    '), atoi2('    '), 'should return 0 for a string of all empty spaces');
assertEquals(atoi('1'), atoi2('1'), 'should return int value for a single digit string');
assertEquals(atoi('-1'), atoi2('-1'), 'should handle optional negative sign');
assertEquals(atoi('+1'), atoi2('+1'), 'should handle optional positive sign');
assertEquals(atoi('+-1'), atoi2('+-1'), 'should return 0 when given more than one sign');
assertEquals(atoi('   -123456789     '), atoi2('   -123456789     '), 'should ignore space before and after digits');
assertEquals(atoi('   -12abc123'), atoi2('   -12abc123'), 'should ignore all chars after first non digit char');
assertEquals(atoi('2147483648'), atoi2('2147483648'), 'should handle numbers above max range');
assertEquals(atoi('-2147483649'), atoi2('-2147483649'), 'should handle numbers below min range');
