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
		this.stack[size] = item;
		size += 1;
	}

	pop() {
		const popped = this.stack[size - 1];
		delete this.stack[size - 1];
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