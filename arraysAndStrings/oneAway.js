// there are three types of edits that can be performed on strings:
// insert char, remove char, replace char
// given two strings, write a fn to check if thery are one (or zero) edits away;

// I: two strings
// O: a boolean
// C: none
// E: true if strings are equal, do not ignore spaces, do not ignore capital letters, should handle empty strings
const areOneAway = (str1, str2) => {
	const lengthDiff = Math.abs(str1.length - str2.length);
  if (lengthDiff === 0) {
  	let diffs = 0;
  	for (let i = 0; i < str1.length; i++) {
  		if (str1[i] !== str2[i]) {
  			diffs++;
  			if (diffs > 1) {
  				return false;
  			}
  		}
  	}
  	return true;
  } else if (lengthDiff === 1) {
  	const longer = str1.length > str2.length ? str1 : str2;
  	const shorter = str1.length < str2.length ? str1 : str2;
  	for (let i = 0; i < longer.length; i++) {
  		const longerMinusCurrChar = longer.slice(0, i) + longer.slice(i + 1, longer.length);
  		if (longerMinusCurrChar === shorter) {
  			return true
  		}
  	}
  	return false;
  } else {
  	return false;
  }
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

assertEquals(areOneAway('cat', 'cat'), true, 'equal strings');
assertEquals(areOneAway('cat', 'can'), true, 'one letter replaced');
assertEquals(areOneAway('cat', 'chat'), true, 'one letter added');
assertEquals(areOneAway('chat', 'cat'), true, 'one letter removed');
assertEquals(areOneAway('cat', 'it'), false, 'more than one edit away');
assertEquals(areOneAway('cat', 'tac'), false, 'strings are permutations with more than one edit')
assertEquals(areOneAway('cat', 'CAT'), false, 'case-sensitive');
assertEquals(areOneAway('ca t', 'cat '), false, 'whitespace');
assertEquals(areOneAway('', ' '), true, 'empty strings');
