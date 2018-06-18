// determine if a string has all unique characters.  What if you cannot use additional data structures?

// I: string
// O: boolean
// C: none
// E: empty str is unique; spaces and other punctuation count as chars; diff case counts as unique
const hasUniqueChars = str => {
	return str.length === new Set(str.split('')).size;
};

// The approach below is more efficient, but technically they have the same time complexity. 
// I like the one above because it's so simple.
// In the above fn, split and Set are both linear, but O(2n) is the same as O(n) after you drop coefficients
// The above solution has linear space complexity, below is constant (the size of the char set)

// const hasUniqueChars = (str) => {
// 	const chars = {};
// 	for (let i = 0; i < str.length; i += 1) {
// 		if (chars.hasOwnProperty(str[i])) {
// 			return false
// 		} else {
// 			chars[str[i]] = str[i];
// 		}
// 	}
// 	return true;
// };

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}".`);
	}
};

console.log('#hasUniqueChars()');
assertEquals(hasUniqueChars(''), true, "empty string");
assertEquals(hasUniqueChars('asdf'), true, "str with unique chars");
assertEquals(hasUniqueChars('asdfa'), false, "str with dup char");
assertEquals(hasUniqueChars('not unique '), false, "counts spaces as chars");
assertEquals(hasUniqueChars('asdf. jkl;.'), false, "counts punctuation as chars");
assertEquals(hasUniqueChars('abcABC'), true, "counts diff cases as unique");



// with no additional data structures:

const hasUniqueChars1DS = str => {
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				return false;
			}
		}
	}
	return true;
};

// time complexity O(n^2)
// space complexity O(1)

console.log('');
console.log('#hasUniqueChars1DS()');
assertEquals(hasUniqueChars1DS(''), true, "empty string");
assertEquals(hasUniqueChars1DS('asdf'), true, "str with unique chars");
assertEquals(hasUniqueChars1DS('asdfa'), false, "str with dup char");
assertEquals(hasUniqueChars1DS('not unique '), false, "counts spaces as chars");
assertEquals(hasUniqueChars1DS('asdf. jkl;.'), false, "counts punctuation as chars");
assertEquals(hasUniqueChars1DS('abcABC'), true, "counts diff cases as unique");
