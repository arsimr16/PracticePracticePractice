// Given two arrays of integers, compute the pair of values (one value in each array)
// with the smallest (non-negative) difference.  Return the difference

// input: [1, 3, 15, 11, 2], [23, 127, 235, 19, 8]
// output: 3 (from the pair 11, 8)

// I: two arrays of integers
// O: smallest non-negative difference between a number from each arr
// C: none
// E: negative numbers, assume each arr has at least 1 num, duplicates in same arr, duplicates in diff arrays
const smallestDifference = (arr1, arr2) => {
	arr1 = arr1.sort((a, b) => a - b);
	arr2 = arr2.sort((a, b) => a - b);
	let i = j = 0;
	let smallestDiff = Infinity;
	while (i < arr1.length && j < arr2.length) {
		const currDiff = Math.abs(arr1[i] - arr2[j])
		if (currDiff < smallestDiff) {
			smallestDiff = currDiff;
		}
		if (arr1[i] < arr2[j]) {
			i++;
		} else {
			j++;
		}
	}
	return smallestDiff;
};

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

test1 = smallestDifference([1, 3, 5, 11, 2], [23, 127, 235, 19, 8]);
assertEquals(test1, 3, 'returns correct result from example');
