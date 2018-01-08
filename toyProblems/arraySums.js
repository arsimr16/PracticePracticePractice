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
	let permutations = 0;
	// remove duplicates
	const uniqNums = new Set(D);
	const nums = Array.from(uniqNums);
	// sort numbers in ascending order
	nums.sort();
	// recursive inner function:
	const findSum = (i = 0, sum = 0) => {
		// limit recursive calls to size of array D
		if (i >= D.length) {
			return;
		}
		// iterate through D
		// track current sums
		// try not adding and adding the current number
		// not adding:
		findSum(i + 1, sum);
		// adding:
		sum += D[i];
		// if the current sum <= T, increment the permutations count
		if (sum <= T) {
			permutations += 1;
			findSum(i + 1, sum);
		}
	};
	findSum();
	return permutations;
};
// time complexity: O(2^n) exponential b/c there are two possibilities for each number (do or don't add it)
// space complexity: also exponential b/c you have to store all of the current sums

// tests:
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

assertEquals(arraySums([1, 2, 3, 5], 5), 7, 'should return correct number of permutations');
// 7 permutations: [1],[2],[3],[5],[1,2],[1,3],[2,3]
assertEquals(arraySums([], 10), 0, 'should return 0 when D is empty');
assertEquals(arraySums([4, 2.1, 4, 7, -2, 8], 6), 8, 'should handle duplicates, negative numbers, and non-integers');
// 8 permutations: [-2, 2.1, 4],[-2, 4],[-2, 7], [2.1],[4],[-2],[-2, 8],[-2, 2.1]
