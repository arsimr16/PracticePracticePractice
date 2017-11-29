// there are three types of edits that can be performed on strings:
// insert char, remove char, replace char
// given two strings, write a fn to check if thery are one (or zero) edits away;

// I: two strings
// O: a boolean
// C: none
// E: do not ignore spaces, do not ignore capital letters, should handle empty strings

const areOneAway = (str1, str2) => {
	if (str1.length === str2.length) {
		let edits = 0;
		for (let i = 0; i < str1.length; i += 1) {
			if (str1[i] !== str2[i]) {
				edits += 1;
				if (edits >= 2) {
					return false;
				}
			}
		}
		return true;
	} else if (Math.abs(str1.length - str2.length) <= 1) {
		const longer = str1.length > str2.length ? str1 : str2;
		const shorter = str1.length < str2.length ? str1 : str2;
		for (let i = 0; i < longer.length; i += 1) {
			if (longer.slice(0, i) + longer.slice(i + 1) === shorter) {
				return true;
			}
		}
	}
	return false;
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

assertEquals(areOneAway('cat', 'cat'), true, 'should return true when both strings are equal');
assertEquals(areOneAway('cat', 'can'), true, 'should return true when one letter is replaced');
assertEquals(areOneAway('cat', 'chat'), true, 'should return true when one letter is added');
assertEquals(areOneAway('chat', 'cat'), true, 'should return true when one letter is removed');
assertEquals(areOneAway('cat', 'it'), false, 'should return false when more than one edit away');
assertEquals(areOneAway('cat', 'tac'), false, 'should return false when strings are permutations of each other with more than one edit')
assertEquals(areOneAway('cat', 'CAT'), false, 'should treat capital letters separately');
assertEquals(areOneAway('ca t', 'cat '), false, 'should count spaces as edits');
assertEquals(areOneAway('', ' '), true, 'should handle empty strings');
