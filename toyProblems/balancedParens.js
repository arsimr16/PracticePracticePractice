// toy problem from Hack Reactor

/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

const balancedParens = (input) => {
	const parens = {
		'(': ')',
    '{': '}',
    '[': ']'
	};
	const closing = {
		')': true,
		'}': true,
		']': true
	};
	const stack = [];
	for (let i = 0; i < input.length; i++) {
		// if curr item is opening paren, push closing pair to stack
		if (parens[input[i]]) {
			stack.push(parens[input[i]]);
		// if curr item is closing paren, make sure it matches item on top of stack
		} else if (closing[input[i]]) {
			const popped = stack.pop();
			if (popped !== input[i]) {
				return false;
			}
		}
	}
	// if there are any unclosed parens, return false
	if (stack.length) {
		return false;
	} else {
		return true;
	}
};

// this implementation passes all of the Hack Reactor tests


// another parenthesis question
/* A string of brackets is correctly matched if you can pair every opening bracket 
up with a later closing bracket, and vice versa. For example, (()()) is correctly matched, 
and (() and )( are not. Implement a function which takes a string of brackets and returns 
the minimum number of brackets you'd have to add to the string to make it correctly matched.
For example, (() could be correctly matched by adding a single closing bracket at the end, 
so you'd return 1. )( can be correctly matched by adding an opening bracket at the start 
and a closing bracket at the end, so you'd return 2. If your string is already correctly matched, 
you can just return 0.
*/

const balancedParens2 = (str) {
	let opening = 0;
	let closing = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			opening++;
		} else if (str[i] ===')') {
			closing++;
		}
	}
	return Math.abs(opening - closing);
}
// this implementation passed all tests that were given
