// write a method to replace all spaces in a string with '%20'

// I: a string with spaces
// O: a string with no spaces (spaces replaced with '%20')
// C: none
// E: an empty string returns and empty string, a string with no spaces does not change

const replaceSpaces = (str) => {
	return str.replace(/ /g, '%20');
};

// time complexity: O(n) ?
// space complexity: O(n) ?
// I'm not sure about how regex works under the hood in JS
// The time complexity cannot be any better than linear because the function needs to check every character
// Since strings are not mutable in JS, I'm not sure how this works.  It might have to create copies of the string everytime a char is replaced
// I still think this would be linear time because we would drop the coefficient (number of time we iterate through str)

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

assertEquals(replaceSpaces('alex'), 'alex', 'should not mutate a string with no spaces');
assertEquals(replaceSpaces('alex  '), 'alex%20%20', 'should replace consecutive spaces with %20 for each space');
assertEquals(replaceSpaces(' a l e x '), '%20a%20l%20e%20x%20', 'should replace all spaces with %20');