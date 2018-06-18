// given a str, write a fn to check if it is a permutation of a palidrome
// the palindrome does not need to be limited to just dictionary words

// i.e. can input string be rearranged into a palindrome

// I: string
// O: boolean
// C: none
// E: empty str is palindrome; handle even and odd length strings; ignore case, whitespace, non-alphabet chars

const isPalindromePermutation = str => {
	str = str.toLowerCase().replace(/[^a-z]/g, '');
	const chars = {};
	for (let char of str) {
		chars[char] ? chars[char]++ : chars[char] = 1;
	}
	let result = true;
	if (str.length % 2 === 0) {
		Object.values(chars).forEach(charCount => {
			if (charCount % 2 !== 0) {
				result = false;
			}
		});
	} else {
		let oddAllowed = true;
		Object.values(chars).forEach(charCount => {
			if (charCount % 2 !== 0) {
				if (oddAllowed) {
					oddAllowed = false;
				} else {
					result = false;
				}
			}
		});
	}
	return result;
};

// time complexity: O(n)
// space complexity: O(n) 

const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

assertEquals(isPalindromePermutation('racecar'), true, 'palindrome');
assertEquals(isPalindromePermutation('arcecra'), true, 'palindrome permutation');
assertEquals(isPalindromePermutation('aRc eCra.-'), true, 'palindrome permutation with uppercase and non-alphabet chars');
assertEquals(isPalindromePermutation('racecars'), false, 'not palindrome permutation');
assertEquals(isPalindromePermutation(''), true, 'empty string');
assertEquals(isPalindromePermutation('a'), true, 'single character');
assertEquals(isPalindromePermutation('aa'), true, 'double character');
