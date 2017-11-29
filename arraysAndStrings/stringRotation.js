// assume you have a method isSubstring which checks if one word is a substring of another.  
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 
// using only one call to isSubstring 
// e.g. 'waterbottle' is a rotation of 'erbottlewat'

// I: two strings
// O: a boolean
// C: only use one call to isSubstring method
// E: empty strings, spaces, equal strings

const stringRotation = (s1, s2) => {
	// if lengths are not equal, strings can not be rotations of each other
	if (s1.length !== s2.length) {
		return false;
	}
	// if strings are equal, return true
	if (s1 === s2) {
		return true;
	}
	const double = s1.concat(s1);
	return isSubstring(double, s2);
};

// I: two strings
// O: a boolean
// C: none
// E: empty strings -> index of '' in 'aNon-emptyString' === 0

// determine if s2 is a substring of s1
const isSubstring = (s1, s2) => {
	return s1.indexOf(s2) !== -1;
};

const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

console.log('TESTS FOR: isSubstring()');
assertEquals(isSubstring('waterbottle', 'bottle'), true, 'should return true if s2 is substring of s1');
assertEquals(isSubstring('waterbottle', 'terbots'), false, 'should return false if s2 is not substring of s1');
assertEquals(isSubstring('', ''), true, 'should return true when passed two empty strings');
assertEquals(isSubstring('waterbottle', ''), true, 'should return true when s2 is empty string and s1 is not');
console.log('');
console.log('TESTS FOR: stringRotation()');
assertEquals(stringRotation('waterbottle', 'erbottlewat'), true, 'should return true when one string is a rotation of the other');
assertEquals(stringRotation('waterbottle', 'erbotstlewat'), false, 'should return false when one string is not a rotation of the other');
assertEquals(stringRotation('', ''), true, 'should return true when given two empty strings');
assertEquals(stringRotation('', 'watterbottle'), false, 'should return false when given an empty string and a non-empty string');
assertEquals(stringRotation('waterbottle', 'waterbottle'), true, 'should return true when both strings are equal');
assertEquals(stringRotation('water bottle ', 'er bottle wat'), true, 'should work when there are spaces');
