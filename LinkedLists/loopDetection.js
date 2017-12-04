// given a circular linked list, implement an algorithm that returns the node at the beginning of the loop
// Definition: a circular linked list is a (corrupt) linked list in which a node's pointer points to an earlier node
// so as to make a loop in the linked list
// e.g. A -> B -> C -> D -> E -> C [the same C as earlier]

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value, next) {
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
}

// I: assume input is a circular linked list
// O: the node at beginning of the loop
// C: none
// E: loop is whole list, some point in middle, or final node, assume all values are unique
// (to make this work with non-unique values, I need a way to check if nodes are equal by reference instead of value)
const loopDetection = (list) => {
	// move slow at rate of one node per step
	// move fast at rate of two nodes per step
	// fast moves 2x rate of slow
	// therefore when slow is at beginning of circle
	// slow has moved k times (where k is the length outside the circle)
	// fast has moved 2k times total, k times in the circle
	// fast is circle length - k steps away from slow (where k = circle length % k)
	// since fast catches up with slow at rate of 1 node per step
	// fast and slow will meet after circle length - k steps
	// at this point they will be k steps before the head of the loop
	// keep one pointer at collision node and move one pointer to list head
	// move both pointers by one node per step
	// the point where they meet is the loop head

	let slow = fast = list.head;
	slow = list.head.next;
	fast = list.head.next.next;
	// move at diff rates
	while(slow.value !== fast.value) {
		slow = slow.next;
		fast = fast.next.next;
	}
	fast = list.head
	// move at same rate
	while(slow.value !== fast.value) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};
// time complexity: O(n)
// space complexity: 0(1)

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const test0 = new LinkedList();
const node0 = test0.addToTail('A');
const node1 = test0.addToTail('B');
const node2 = test0.addToTail('C');
const node3 = test0.addToTail('D');
const node4 = test0.addToTail('E');
test0.addToTail = node2; // this doesn't actually create a circle

// const result0 = loopDetection(test0);
// assertEquals(result0.value, 'C', 'should return the node at the head of the circle');
