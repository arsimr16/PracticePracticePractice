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
