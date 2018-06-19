// given two strings, write a method to decide if one is a permutation of the other

// I: 2 strings
// O: boolean
// C: none
// E: treat spaces and punctuation diff cases as uniq chars;
const isPermutation = (str1, str2) => {
	return str1.split('').sort().join('') === str2.split('').sort().join('');
};

// time complexity: O(n log n)
// space complexity: O(n)

// above solution is less optimal, but very simple and easy to implement

// const isPermutation = (str1, str2) => {
// 	if (str1.length !== str2.length) {
// 		return false;
// 	}
// 	const str1Chars = {};
// 	for (let char of str1) {
// 	  str1Chars[char] ? str1Chars[char]++ : str1Chars[char] = 1;
// 	}
// 	for (let char of str2) {
// 		if (!str1Chars[char] || str1Chars[char] === 0) {
// 			return false;
// 		} else {
// 			str1Chars[char]--;
// 		}
// 	}
// 	return true;
// };

// time complexity: O(n)
// space complexity: O(n)

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}".`);
	}
};

console.log('#isPermutation()');
assertEquals(isPermutation('cat', 'cat'), true, 'equal strings');
assertEquals(isPermutation('cat', 'cat '), false, 'equal except space');
assertEquals(isPermutation('c ats', 'cats '), true, 'equal with spaces');
assertEquals(isPermutation('Cat', 'cat'), false, 'case-sensitivity');
assertEquals(isPermutation('cat', 'act'), true, 'permutations');
assertEquals(isPermutation('cat', 'cut'), false, 'not permutations');
