// implement a method to perform basic string compression using the counts of repeated characters.  
// aabcccccaaa => a2b1c5a3
// if the compressed string would not become smaller than the original string, your method should return the original string
// you can assume the string has only uppercase and lowercase letters (a-z)

// I: a string
// O: the original string, or its compressed version if it is shorter
// C: none
// E: only upper and lowercase letters (a-z), empty string returns empty string

const compress = (str) => {
	let compressed = [];
	let count = 1
	for (let i = 0; i < str.length; i += 1) {
		if (str[i] !== str[i + 1]) {
			compressed.push(str[i] + count);
			count = 1;
		} else {
			count += 1;
		}
	}
	compressed = compressed.join('');
	return compressed.length < str.length ? compressed : str;
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

assertEquals(compress('Alex'), 'Alex', 'should return the original string when it is shorter than the compressed version');
assertEquals(compress('aabcccccaaa'), 'a2b1c5a3', 'should return the compressed string when it is shorter');
assertEquals(compress('abbbccdd'), 'abbbccdd', 'should return the original string when the compressed version is the same length');
assertEquals(compress('AAAaaaBBBbbb'), 'A3a3B3b3', 'should not ignore case');
assertEquals(compress(''), '', 'should return the original string, when the compressed version is not shorter');