// given two singly linked lists, determine if the two lists intersect
// return the intersecting node.  note that intersection is defined based
// on reference, not value.  That is, if the kth node of the first list 
// is the exact same node (by reference) as the jth node of the second list
// then they are intersecting

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
}

// I: two linked lists
// O: the node at intersection or null
// C: none
// E: empty lists, intersection anywhere but end doesn't count, intersection at end and middle but not connected
// e.g. 0 -> 1 -> 2 -> 3 -> 4 -> 5
//      9 -> 1 -> 2 -> 8 -> 7 -> 5   => the intersection should only be 5
const areIntersecting = (l1, l2) => {
	// point of intersection
	let poi = null;
	// neither list can be empty
	if (l1.tail && l2.tail) {
		// if tails aren't equal, there is no itersection
		// how do I test that the nodes are equal by reference and not by value to avoid situations like the edge case above?
		if (l1.tail.value === l2.tail.value) {
			poi = l1.tail;
			// compare previous node
			// with a doubly-linked list I could traverse through lists in reverse and find the point where the values diverge
			// with a singly-linked list I could use the kthToLast function, but this would have a pretty bad time and space complexity
			// if I had a way to compare equality of reference:
				// find the difference in lengths of the two lists
				// start ahead in the longer list so that the lengths are essentially equal
				// iterate through both lists at the same time
				// if the current node in both lists is the same by reference, return that node
				// (the following nodes will all be the same by definition)
		}
	}
	return poi;
}
// time complexity:
// space complexity:

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const list0 = new LinkedList();
list0.addToTail(0);
list0.addToTail(1);
list0.addToTail(2);
list0.addToTail(3);
list0.addToTail(4);

const list1 = new LinkedList();
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);

const list2 = new LinkedList();
list2.addToTail(5);
list2.addToTail(6);
list2.addToTail(7);

const list3 = new LinkedList();
list3.addToTail(1);
list3.addToTail(2);
list3.addToTail(3);

const list4 = new LinkedList();
list4.addToTail(4);

const list5 = new LinkedList();

const result0 = areIntersecting(list0, list1);
assertDeepEquals(result0.value, 2, 'should return node at point of intersection if there is intersection');

const result1 = areIntersecting(list1, list2);
assertDeepEquals(result1, null, 'should return null when there is no intersection');

const result2 = areIntersecting(list0, list3);
assertDeepEquals(result2, null, 'should only count intersection if at end of list');

const result3 = areIntersecting(list0, list4);
assertDeepEquals(result4.value, 4, 'should work when intersection is at final node');

const result4 = areIntersecting(list0, list5);
assertDeepEquals(result5, null, 'there should be no intersection with an empty list');
