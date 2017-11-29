// determine if a string has all unique characters
// what if you cannot use additional data structures?

// I: a string
// O: a boolean
// C: none / no additional data structures
// E: capital letters treated as unique, spaces

// without constraints
const hasUniqueChars = (str) => {
	const chars = {};
	for (let i = 0; i < str.length; i += 1) {
		if (chars.hasOwnProperty(str[i])) {
			return false
		} else {
			chars[str[i]] = str[i];
		}
	}
	return true;
};

// time complexity O(n)
// space complexity O(n)

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed "${testName}"`);
	} else {
		console.log(`FAILED "${testName}": expected ${expected}, but got ${actual}`);
	}
};

// tests for function without constraints
assertEquals(hasUniqueChars('Alex'), true, 'should return true when all chars are unique');
assertEquals(hasUniqueChars('Alexx'), false, 'should return false when all chars are not unique');
assertEquals(hasUniqueChars('Alexa'), true, 'should treat capital and lowercase as separate letters');
assertEquals(hasUniqueChars('A lex '), false, 'should treat spaces as a character');

// with constraints
const hasUniqueChars1DS = (str) => {
	for (let i = 0; i < str.length - 1; i += 1) {
		for (let j = i + 1; j < str.length; j += 1) {
			if (str[i] === str[j]) {
				return false;
			}
		}
	}
	return true;
};

// time complexity O(n^2)
// space complexity O(1)

// tests for function with constraints
assertEquals(hasUniqueChars1DS('Alex'), true, 'should return true when all chars are unique');
assertEquals(hasUniqueChars1DS('Alexx'), false, 'should return false when all chars are not unique');
assertEquals(hasUniqueChars1DS('Alexa'), true, 'should treat capital and lowercase as separate letters');
assertEquals(hasUniqueChars1DS('A lex '), false, 'should treat spaces as a character');