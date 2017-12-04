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

// I:
// O:
// C:
// E: 
const areIntersecting = (l1, l2) => {

}
// time complexity:
// space complexity:

// tests
const assertDeepEquals = (actual, expected, testname) {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
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
list3.addToTail(0);
list3.addToTail(1);
list3.addToTail(2);

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
