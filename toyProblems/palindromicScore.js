/* The palindromic score of a string is the number of errors 
(characters which do not match) when the string is read 
forwards and backwards. For example, the palindromic score 
of 'fox' is 2, because 'fox' and 'xof' differ by two characters. 
Write a function to take a string and return its palindromic score.
*/

const palindromicScore = (str) => {
	let result = 0;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			result += 2;
		}
	}
	return result;
};

const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected ${expected}, but got ${actual}`);
	}
};

assertEquals(palindromicScore('a'), 0, 'should return 0 when given an odd length palindrome');
assertEquals(palindromicScore('aa'), 0, 'should return 0 when given an even length palindrome');
assertEquals(palindromicScore('aaabbb'), 6, 'should return correct number when no letters match');
assertEquals(palindromicScore('abcdcaa'), 2, 'should return correct number when some letters are not equal');
