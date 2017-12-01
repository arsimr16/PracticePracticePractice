// write code to partition a linked list around a value x, 
// such that all nodes less than x come before all nodes 
// greater than or equal to x.  If x is contained within the list,
// the values of x only need to be after the elements less than x (see below).
// The partition element x can appear anywhere in the "right partition"; 
// it does not need to appear between the left and right partitions
// e.g. input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition 5]
//     output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return { value, next: null };
	}

	addToTail(value) {
		const newTail = this.makeNode(value);
		if (!this.head) {
			this.head = newTail;
		}
		if (this.tail) {
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}

	// I: a partition value
	// O: the linked list ordered such that all values less than the partition value are to the left of that value
	// C: none
	// E: if the partition value is less than or greater than all items in the list, the list should not change
	partition(x) {

	} 
	// time complexity:
	// space complexity:
}

// tests
const assertEquals = (actual, expected, testname) {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`failed ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const assertDeepEquals = (actual, expected, testname) {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`failed ${testname}: expected "${expected}", but got "${actual}"`);
	}
};