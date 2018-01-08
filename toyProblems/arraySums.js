// given an array D of numbers and a target T, count the  number of permutations of D [D_a, D_b, D_c] 
// where a < b < c and a + b + c <= T
// i.e. how many ways can you add numbers from array in ascending order and get a sum that is <= T

// I: an array of numbers (assume they don't have to be integers and can be negative)
// O: number of valid permutations
// C: none
// E: if the array contains duplicates, they cannot be used because they will not satisfy the condition a < b < c; 
// assume permutations must have at least 1 number (i.e. an empty array D has 0 permutations <= T and 
// a set of 0 numbers selected from D ([]) is not a valid permutations <= T);
const arraySums = (D, T) => {
	const permutations = 0;
	// sort numbers in ascending order
	// remove duplicates
	// recursive solution:
	// iterate through D
	// track current sums
	// try adding and not adding the current number
	// everytime a number is added
		// if the current sum <= T, increment the permutations count
		// if the current sum is > T, stop adding numbers to the invalid permutation
	return permutations;
};
// time complexity: O(2^n) exponential b/c there are two possibilities for each number (do or don't add it)
// space complexity: also exponential b/c you have to store all of the current sums

// tests:
