// given a str, write a fn to check if it is a permutation of a palidrome
// the palindrome does not need to be limited to just dictionary words

// basically the question is asking if an input string can be rearranged into a palindrome

// I: a string
// O: a boolean
// C: none
// E: empty string counts as a palindrome, ignore spaces, ignore case

const isPalindromePermutation = (str) => {
	// remove spaces
	str = str.replace(/ /g, '');
	// ignore case
	str = str.toLowerCase();
	// quick check to potentially save time
	if (str.length <= 1) {
		return true;
	}
	// find char frequency of all chars
	const chars = {};
	for (let i = 0; i < str.length; i += 1) {
		chars.hasOwnProperty(str[i]) ? chars[str[i]] += 1 : chars[str[i]] = 1;
	}
	let result = true;
	// if str length is even, all chars must have an even frequency
	if (str.length % 2 === 0) {
		Object.values(chars).forEach((charCount) => {
			if (charCount % 2 !== 0) {
				result = false;
			}
		});
	// if str length is odd, only one char can have an odd frequency
	} else {
		let odds = 0; 
		Object.values(chars).forEach((charCount) => {
			if (charCount % 2 !== 0) {
				odds += 1;
				if (odds >= 2) {
					result = false;
				}
			}
		});
	}
	return result;
};

// time complexity: O(n)
// space complexity: O(n)


// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

assertEquals(isPalindromePermutation('racecar'), true, 'should return true when given a palindrom');
assertEquals(isPalindromePermutation('arcecra'), true, 'should return true when given a permutation of a palindrome');
assertEquals(isPalindromePermutation('arc ecra'), true, 'should ignore spaces');
assertEquals(isPalindromePermutation('racecars'), false, 'should return false when string is not a permutation of a palindrome');
assertEquals(isPalindromePermutation(''), true, 'should return true when passed an empty string');
assertEquals(isPalindromePermutation('a'), true, 'should return true when passed an single character');
assertEquals(isPalindromePermutation('RaceCar'), true, 'should ignore case');