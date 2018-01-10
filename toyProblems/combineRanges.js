// given an array of tuples where each tuple is a number range, combine any ranges
// that are overlapping and return the new ranges

// e.g. 
// input: [[1, 3], [-0.5, 0.5], [2, 6]]
// output: [[1, 6], [-0.5, 0.5]];

// [inputs, outputs, constrains, edge cases]
// I: an array of ranges
// O: an array of ranges (none can overlap, order of ranges does not matter)
// C: O(n log n) time?
// E: * empty input -> empty output 
//				[[]] -> [[]] (nothing can be combined);
//		* different kinds of overlapping:
//				one range fits inside another:
//					(min a >= min of b and max of a <= max of b) 
// 					[[1, 3], [0, 4]] -> [[0, 4]]
//				one range boundary crosses another:
//		  		(min of a between (inclusive) min and max of b) 
//					[[1, 3], [2, 4]] -> [[1, 4]]
// 				two boundaries are equal:
//					(max of a === min of b)
// 					[[1, 3], [3, 5]] -> [[3, 5]]
//		* as new ranges are made, more new ranges can be made
//				(first two ranges cannot be combined until third
//				 range is combined with first or second)
//				[[1, 3], [5, 8], [2, 5]] -> [[1, 5], [5, 8]] -> [[1, 8]]

const combineRanges = (arr) => {

};

// time complexity:
// space complexity:

// tests:
// not a true deep equality check, but this is okay since I am controlling I/O
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed "${testname}"`);
	} else {
		console.log(`FAILED "${testname}": expected "${expected}", but got "${actual}"`);
	}
};

assertDeepEquals(combineRanges([[]]), [[]], 'should not combine anything when input is empty');
assertDeepEquals(combineRanges([[1, 3], [-0.5, 0.5], [2, 6]]), [[1, 6], [-0.5, 0.5]], 'should return correct combined ranges');
assertDeepEquals(combineRanges([[1, 3], [-10, -5], [0, 4]]), [[0, 4], [-10, -5]], 'should combine ranges when one fits inside other');
assertDeepEquals(combineRanges([[1, 3], [2, 4], [5, 7]]), [[1, 4], [5, 7]], 'should combine ranges when one boundary crosses another');
assertDeepEquals(combineRanges([[1, 3], [3, 5]]), [[1, 5]], 'should combine ranges when max of one equals min of another');
assertDeepEquals(combineRanges([[10.5, 11], [1, 3], [5, 8], [2, 5]]), [[10.5, 11], [1, 8]], 'should keep combining ranges until nothing can be combined');
