// implement an algorithm to find the kth to last element of a singly linked list

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

	// I: k
	// O: the kth item from the end
	// C: none
	// E: when k = 0, return last element, when k = 1, return 1 from end, etc.
	// if k >= list length, return null
	kthToLast(k) {

	}
	// time complexity: 
	// space complexity: 
}

// tests
const assertEquals = (actual, expected, testname) {
	if (actual === expected) {
		console.log(`passed "${testname}"`);
	} else {
		console.log(`FAILED "${testname}": expected "${expected}", but got "${actual}"`);
	}
}

let list = new LinkedList();
list.addToTail(0);
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);

assertEquals(list.kthToLast(0), 3, 'should return the last element when k = 0');
assertEquals(list.kthToLast(1), 2, 'should return the penultimate item when k = 2');
assertEquals(list.kthToLast(2), 1, 'should return the antepenultimate item when k = 3');
assertEquals(list.kthToLast(3), 0, 'should return the first item when k = list length - 1');
assertEquals(list.kthToLast(4), null, 'should return null when k >= list length');

