// basic LIFO stack

// JS arrays already have the basic methods required for a LIFO stack

class StackArr {
	constructor() {
		this.stack = [];
	}

	// add item to top of stack
	push(item) {
		this.stack.push(item);
	}

	// remove item from top of stack
	pop() {
		this.stack.pop();
	}

	// return item at top of stack
	peek() {
		return this.stack[this.stack.length - 1];
	}

	// return true if stack is empty
	isEmpty() {
		return this.stack.length === 0;
	}
}

// LIFO stack without using JS array

class StackObj {
	constructor() {
		this.stack = {};
		this.size = 0;
	}

	push(item) {
		this.stack[this.size] = item;
		this.size += 1;
	}

	pop() {
		const popped = this.stack[this.size - 1];
		delete this.stack[this.size - 1];
		this.size > 0 ? this.size -= 1 : null;
		return popped;
	}

	peek() {
		return this.stack[this.size - 1];
	}

	isEmpty() {
		return this.size === 0;
	}
}

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

console.log('TESTS FOR StackArr');
const stack0 = new StackArr();
assertDeepEquals(stack0.isEmpty(), true, 'isEmpty should return true when stack is empty');
assertDeepEquals(stack0.peek(), undefined, 'peek should return undefined when stack is empty');

stack0.push(1);
assertDeepEquals(stack0.peek(), 1, 'peek should return first item in stack');
assertDeepEquals(stack0.isEmpty(), false, 'isEmpty should return true after one item added');
assertDeepEquals(stack0.stack, [1], 'stack should have proper values in order');

stack0.push(2);
stack0.push(3);
assertDeepEquals(stack0.stack, [1, 2, 3], 'stack should have proper values in order');

stack0.pop();
assertDeepEquals(stack0.stack, [1, 2], 'stack should have proper values in order after pop is invoked');


console.log('TESTS FOR StackObj');
const stack1 = new StackObj();
assertDeepEquals(stack1.isEmpty(), true, 'isEmpty should return true when stack is empty');
assertDeepEquals(stack1.peek(), undefined, 'peek should return undefined when stack is empty');

stack1.push(1);
assertDeepEquals(stack1.isEmpty(), false, 'isEmpty should return false after one item is added');
assertDeepEquals(stack1.size, 1, 'size should equal 1 after one item is added');
assertDeepEquals(stack1.peek(), 1, 'peek should return correct value when one item is added');
assertDeepEquals(stack1.stack[0], 1, 'stack should contain proper values');

stack1.pop();
assertDeepEquals(stack1.size, 0, 'size should equal 0 when stack is empty');

stack1.push(1);
stack1.push(2);
stack1.push(3);
assertDeepEquals(stack1.size, 3, 'size should equal 3 after three items added');
const stackValues = [];
stackValues.push(stack1.stack[0]);
stackValues.push(stack1.stack[1]);
stackValues.push(stack1.stack[2]);
assertDeepEquals(stackValues, [1, 2, 3], 'stack should contain proper values');

stack1.pop();
assertDeepEquals(stack1.size, 2, 'should return proper size after item is popped');
assertDeepEquals(stack1.stack[2], undefined, 'stack at popped index should be undefined');
