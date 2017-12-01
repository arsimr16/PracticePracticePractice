// write code to remove duplicates from an unsorted linked list
// how would you solve this problem if a temporary buffer is not allowed?

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return { value, next: null }
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

	forEach(cb) {
		let curr = this.head;
		while(curr) {
			// call the callback function on each item in the LinkedList
			cb(curr.value);
			curr = curr.next;
		}
	}

	// I: a linked list
	// O: the linked list without any duplicates
	// C: if a temp buffer is not allowed (O(n) space), O(n^2) time is required
	// for this case a second pointer would check the previous nodes for a match
	// E: if tail is removed, update LinkedList pointer to tail
	removeDups() {
		let curr = this.head;
		let uniq = {};
		uniq[this.head.value] = true;
		while(curr && curr.next) {
			// if next value is not unique
			if (uniq[curr.next.value]) {
				// if removed value is tail, update pointer to tail
				if (!curr.next.next) {
					this.tail = curr;
					this.tail.next = null;
				} else {
					curr.next = curr.next.next;
				}
			} else {
				uniq[curr.next.value] = true;
				curr = curr.next;
			}
		}
	}
	// time complexity: O(n)
	// space complexity: O(n)
}

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got ""${actual}`);
	}
};

const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got ""${actual}`);
	}
};

let listWithDups = new LinkedList();
listWithDups.addToTail(0);
listWithDups.addToTail(1);
listWithDups.addToTail(2);
listWithDups.addToTail(1);
listWithDups.addToTail(0);

listWithDups.removeDups();


const output1 = [];
listWithDups.forEach((node) => {
	output1.push(node);
});

assertDeepEquals(output1, [0, 1, 2], 'should remove duplicates from LinkedList');
assertEquals(listWithDups.tail.value, 2, 'should update LinkedList pointer to tail when tail is removed');

const listWithoutDups = new LinkedList();
listWithoutDups.addToTail(0);
listWithoutDups.addToTail(2);
listWithoutDups.addToTail(4);

listWithoutDups.removeDups();

const output2 = [];
listWithoutDups.forEach((node) => {
	output2.push(node);
});

assertDeepEquals(output2, [0, 2, 4], 'should not remove anything from LinkedList without duplicates');
