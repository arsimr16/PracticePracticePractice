// Write methods to implement the multiply, subtract, and divide operations for integers.
// The results of all these are integers.  Use only the add operator.

// I: a number
// O: the same number with the opposite sign
// C: only use addition
// E: 0
const negate = num => {
	let neg = 0;
	let newSign = num < 0 ? 1 : -1;
	while (num !== 0) {
		neg += newSign;
		num += newSign;
	}
	return neg;
};

// I: two integers
// O: a boolean - true if only one num is negative, false otherwise
// C: none
// E: none
const isExactlyOneNeg = (a, b) => {
	return (a < 0 && b > 0) || (a > 0 && b < 0);
}

// I: two integers
// O: the product of the two ints
// C: only use addition
// E: 0, negative integers
const multiply = (a, b) => {
	let absa = Math.abs(a);
	let absb = Math.abs(b);
	let [smaller, larger] = absa < absb ? [absa, absb] : [absb, absa];
	let product = 0;
	while (smaller > 0) {
		product += larger;
		smaller--;
	}
	return isExactlyOneNeg(a, b) ? negate(product) : product;
};

// I: two integers
// O: the difference of a and b (a - b)
// C: only use addition
// E: 0, negative integers
const subtract = (a, b) => {
	return a + negate(b);
};

// I: two integers
// O: the quotient of the two ints (a / b)
// C: only use addition
// E: 0, negative integers, this is supposed to be integer division -> ignore remainders
const divide = (a, b) => {
	if (b === 0) return 'Error: cannot divide by zero';
	let absa = Math.abs(a);
	let absb = Math.abs(b);
	let prod = 0;
	let quot = 0;
	while (prod + absb <= absa) {
		prod += absb;
		quot++
	}
	return isExactlyOneNeg(a, b) ? negate(quot) : quot;
};

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

// tests for multiply
assertEquals(multiply(2, 3), 6, 'multiplies two positive integers');
assertEquals(multiply(-2, -3), 6, 'multiplies two negative integers');
assertEquals(multiply(2, -3), -6, 'multiplies a positive and negative integer');
assertEquals(multiply(0, 3), 0, 'multiplies a positive integer and zero');
assertEquals(multiply(0, -3), 0, 'multiplies a negative integer and zero');

// tests for subtract
assertEquals(subtract(5, 2), 3, 'subtracts when first arg is larger');
assertEquals(subtract(2, 5), -3, 'subtracts when first arg is smaller');
assertEquals(subtract(5, 5), 0, 'subtracts when args are equal');
assertEquals(subtract(5, 0), 5, 'subtracts 0 from first arg');

// tests for divide
assertEquals(divide(10, 2), 5, 'divides two positive integers');
assertEquals(divide(-10, -2), 5, 'divides two negative integers');
assertEquals(divide(10, -2), -5, 'divides a negative and positive integer');
assertEquals(divide(11, 2), 5, 'integer division ignores remainder');
assertEquals(divide(10, 0), 'Error: cannot divide by zero', 'dividing by zero returns an error message');
assertEquals(divide(0, -10), 0, 'zero divided by anything is 0');
