// implement an algorithm to delete a node in the middle 
// (i.e. any node bu the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node

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

	contains(target) {
		let curr = this.head;
		while(curr) {
			if (curr.value === target) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}

	// I: a middle node in a linked list
	// O: nothing, but the input is removed from the linked list
	// C: only given access to target node (i.e. not previous and next)
	// E: value not in linked list do nothing, value not in middle do nothing, assume all values are unique
	deleteFromMiddle(target) {

	}
	// time complexity:
	// space complexity:
}

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed "${testname}"`);
	} else {
		console.log(`FAILED "${testname}": expected "${expected}", but got "${actual}"`);
	}
};

let list = new LinkedList();
list.addToTail(0);
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);

list.deleteFromMiddle(2);
list.deleteFromMiddle(0);
list.deleteFromMiddle(4);

assertEquals(list.contains(2), false, 'should remove target if in middle');
assertEquals(list.contains(0), true, 'should not remove head');
assertEquals(list.contains(4), true, 'should not remove tail');
