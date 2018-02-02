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
