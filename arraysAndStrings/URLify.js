// write a method to replace all spaces in a string with '%20'

// I: a string with spaces
// O: a string with no spaces (spaces replaced with '%20')
// C: none
// E: an empty string returns and empty string, a string with no spaces does not change
const urlify = str => str.replace(/ /g, '%20');

// time complexity: O(n)? depends on implementation details of str.replace() 
// since strings are immutable in JS, I'm not exactly sure how this works under the hood
// space complexity: also depends on implementation details, but my guess is O(n)

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}".`);
	}
};

assertEquals(urlify('alex'), 'alex', 'string with no spaces');
assertEquals(urlify(' a l e x '), '%20a%20l%20e%20x%20', 'multiple spaces');
assertEquals(urlify('alex  '), 'alex%20%20', 'consecutive spaces');
