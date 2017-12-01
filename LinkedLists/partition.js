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
		return { value, prev: null, next: null };
	}

	addToTail(value) {
		const newTail = this.makeNode(value);
		if (!this.head) {
			this.head = newTail;
		}
		if (this.tail) {
			newTail.prev = this.tail;
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}

	forEach(cb) {
		let curr = this.head;
		while(curr) {
			// call the callback function on each item in the LinkedList
			cb(curr.value);
			curr = curr.next;
		}
	}

	moveToHead(node) {
		// update previous' next pointer to next
		node.prev.next = node.next;
		// update next's prev pointer to previous
		if (node.next) {
			node.next.prev = node.prev;
		}
		let oldHead = this.head;
		// update node's next pointer to old head
		node.next = oldHead;
		// update old head's prev pointer to new head
		oldHead.prev = node;
		// update LinkedList's head pointer to the new head
		this.head = node;
	}

	// I: a partition value
	// O: no direct return value the linked list ordered such that 
	// all values less than the partition value are to the left of that value
	// C: none
	// E: partition value is less than or greater than all items in list
	partition(x) {
		// start with the second element because the first will never have to move
		let curr = this.head.next;
		while(curr) {
			let next = curr.next
			if (curr.value < x) {
				this.moveToHead(curr);
			}
			curr = next;
		}
	} 
	// time complexity: O(n)
	// space complexity: O(1)
}

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`failed ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`failed ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

let list0 = new LinkedList();
list0.addToTail(6);
list0.addToTail(10);
list0.addToTail(2);
list0.addToTail(7);
list0.addToTail(4);

list0.partition(1);

let result0 = [];
list0.forEach(item => result0.push(item));
assertDeepEquals(result0, [6, 10, 2, 7, 4], 'should work when x < all values in list');

list0.partition(12);

let result1 = [];
list0.forEach(item => result1.push(item));
assertDeepEquals(result1, [4, 7, 2, 10, 6], 'should work when x > all values in list');

list0.partition(5);

let result2 = [];
list0.forEach(item => result2.push(item));
assertDeepEquals(result2, [2, 4, 7, 10, 6], 'all values < x appear left of all values > x');

let list1 = new LinkedList();
list1.addToTail(3);
list1.addToTail(5);
list1.addToTail(8);
list1.addToTail(5);
list1.addToTail(10);
list1.addToTail(2);
list1.addToTail(1);

list1.partition(5);

let result3 = [];
list1.forEach(item => result3.push(item));
assertDeepEquals(result3, [1, 2, 3, 5, 8, 5, 10], 'should work when list contains values = x');
