// Given are pairs of integers (a1,b1),...,(an,bn). 
// Pair i is "dominated" by pair j if ai < aj and bi < bj. 
// Write an algorithm to quickly determine the list of pairs that are not dominated by any other pair.

// e.g.
// Input:
//	[[3, 2], [8, 7], [6, 9], [3, 4], [7, 8]]
// Output:
//	3
// (the non-dominatable paris are [[8, 7], [6, 9], [7, 8]])

// I: an array of pairs
// O: an integer indicating the number of non-dominatable pairs
// C: none (try to get n log n time)
// E: if there is only one pair, it is non-dominatable; condition is <, not <=;
// if passed empty array, return 0; if there are 1 or more pairs, there will always 
// be at least 1 non-dominatable pair
const NDP = (pairs) => {
	
};
// time complexity:
// space complexity:

// tests
