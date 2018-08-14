// Write a function to swap two numbers in place (i.e. without using a temporary variable)

// I: arr, indices of values to swap -> assume value at index 1 is less than value at index2
// O: arr with swapped values
// C: no temp variables
// E: negative numbers, non-integer values
const swap = (arr, index1, index2) => {
	arr[index2] = arr[index2] - arr[index1];
	arr[index1] = arr[index2] + arr[index1];
	arr[index2] = arr[index1] - arr[index2];
	return arr;
};

assertEquals = (actual, expected, testName) => {
	actual = JSON.stringify(actual);
	expected = JSON.stringify(expected);
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected: ${expected}, but got: ${actual}`);
	}
}

assertEquals(swap([1, 2, 3, 4, 5], 0, 4), [5, 2, 3, 4, 1], 'swaps positive integers');
assertEquals(swap([-1, -2, -3, -4, -5], 0, 4), [-5, -2, -3, -4, -1], 'swaps negative integers');
assertEquals(swap([-1, -2, -3, 4, 5], 0, 4), [5, -2, -3, 4, -1], 'swaps negative and positive integers');
assertEquals(swap([1, 2, 3, 4, 1], 0, 4), [1, 2, 3, 4, 1], 'swaps when values are equal');
// to handle non-integer values, you have to round numbers to deal with imprecise representation of decimal numbers in binary
// assertEquals(swap([1.2, 2, 3, 4, 5.5], 0, 4), [5.5, 2, 3, 4, 1.2], 'swaps non integer numbers');