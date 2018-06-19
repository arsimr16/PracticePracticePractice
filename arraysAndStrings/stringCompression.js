// implement a method to perform basic string compression using the counts of repeated characters.  
// aabcccccaaa => a2b1c5a3
// if the compressed string would not become smaller than the original string, your method should return the original string
// you can assume the string has only uppercase and lowercase letters (a-z)

// I: a string
// O: the original string, or its compressed version if it is shorter
// C: none
// E: only upper and lowercase letters (a-z), empty string returns empty string

const compress = str => {
	let compressed = [];
	let count = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			compressed.push(str[i] + count);
			count = 1;
		}
	}
	compressed = compressed.join('')
	return compressed.length < str.length ? compressed : str;
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

assertEquals(compress('Alex'), 'Alex', 'original shorter than compressed');
assertEquals(compress('aabcccccaaa'), 'a2b1c5a3', 'compressed is shorter');
assertEquals(compress('abbbccdd'), 'abbbccdd', 'original and compressed are same length');
assertEquals(compress('AAAaaaBBBbbb'), 'A3a3B3b3', 'case-sensitive');
assertEquals(compress(''), '', 'empty str (compressed isn\'t shorter)');
