// given two strings, write a method to decide if one is a permutation of the other

// I: two strings
// O: a boolean
// C: none
// E: should ignore case, should not ignore spaces

const isPermutation = (str1, str2) => {
	// if the strings are not equal in length, they cannot be permutations
	if (str1.length !== str2.length) {
		return false;
	}
	// ignore case
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	// quick check to see whether the strings are equal to potentially save time
	if (str1 === str2) {
		return true
	}
	// get char frequecy of all chars for both strings
	const str1Chars = {};
	const str2Chars = {};
	for (let i = 0; i < str1.length; i += 1) {
		str1Chars.hasOwnProperty(str1[i]) ? str1Chars[str1[i]] += 1 : str1Chars[str1[i]] = 1;
		str2Chars.hasOwnProperty(str2[i]) ? str2Chars[str2[i]] += 1 : str2Chars[str2[i]] = 1;
	}
	// compare char frequencies
	for (let char in str1Chars) {
		if (str1Chars[char] !== str2Chars[char]) {
			return false;
		}
	}
	return true;
};

// time complexity: O(nm) where n and m are the lengths of the two strings
// space complexity: O(nm) where n and m are the lengths of the two strings

// tests
const assertEquals = (actual, expected, testName) => {
  if (actual === expected) {
  	console.log(`passed ${testName}`);
  } else {
  	console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}"`);
  }
};

assertEquals(isPermutation('cat', 'cat'), true, 'should return true when the strings are equal');
assertEquals(isPermutation('cats', 'cat'), false, 'should return false when strings are not equal length');
assertEquals(isPermutation('cats', 'ca ts'), false, 'should not ignore spaces');
assertEquals(isPermutation('c ats', 'cats '), true, 'should not ignore spaces');
assertEquals(isPermutation('Cat', 'cat'), true, 'should ignore case');
assertEquals(isPermutation('cat', 'act'), true, 'should return true when strings are permutations of each other');
assertEquals(isPermutation('cat', 'cut'), false, 'should return false when strings are not permutations of each other');