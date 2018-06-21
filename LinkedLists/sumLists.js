// you have two numbers represented by a linked list, where each node contains a single digit.  
// The digits are stored in reverse order, such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list
// e.g. I: (7 -> 1 -> 6) + (5 -> 9 -> 2) [that is 617 + 295]
//      O: 2 -> 1 -> 9 [ that is 912]

// suppose the digits are stored in forward order.  Repeat the above problem.
// e.g. I: (6 -> 1 -> 7) + (2 -> 9 -> 5) [that is 617 + 295]
//      O: 9 -> 1 -> 2 [ that is 912]

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return {value, next: null };
	}

	addToTail(value) {
		const newTail = this.makeNode(value);
		if (this.head === null) {
			this.head = newTail;
		}
		if (this.tail !== null) {
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}

	forEach(cb) {
		let curr = this.head;
		while(curr !== null) {
			curr.value = cb(curr.value);
			curr = curr.next;
		}
	}
}

// I: two linked lists, digits of a number in reverse order
// O: a new linked list - sum of input lists with digits in reverse order
// C: none
// E: lists are diff lengths, assume only whole numbers greater than or equal to 0
const sumListsReverse = (l1, l2) => {
	result = new LinkedList();
	let carryOver = 0;
	let curr1 = l1.head;
	let curr2 = l2.head;
	while(curr1 !== null || curr2 !== null || carryOver !== 0) {
		let val1 = curr1 !== null ? curr1.value : 0;
		let val2 = curr2 !== null ? curr2.value : 0;
		let sum = val1 + val2 + carryOver;
		if (sum > 9) {
			result.addToTail(sum - 10);
			carryOver = 1;
		} else {
			result.addToTail(sum);
			carryOver = 0;
		}
		curr1 = curr1 !== null ? curr1.next : null;
		curr2 = curr2 !== null ? curr2.next : null;
	}
	return result;
};

// I: two linked lists, digits in forward order
// O: a linked lists containing sum digits in forward order
// C: none
// E: empty list, numbers have different lengths, assume only positive integers
const sumLists = (l1, l2) => {
	// if I could use a doubly linked list, I could use the same logic from sumListsRevers iterating from tail to head
	// without having a doubly linked list:
	// check if lengths are equal
		// if they aren't, pad shorter list with 0s at the head
	// write logic to deal with remainders
	// this would get pretty complicated.  
	// It might be easier to convert the lists into numbers, add the numbers, and convert the sum into a linked list
}
// time complexity:
// space complexity:


const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

console.log('TESTS FOR SUMLISTSREVERSE(): ')

let list1 = new LinkedList();
list1.addToTail(7);
list1.addToTail(1);
list1.addToTail(6);

let list2 = new LinkedList();
list2.addToTail(5);
list2.addToTail(9);
list2.addToTail(2);

let list3 = new LinkedList();
list3.addToTail(5);
list3.addToTail(9);
list3.addToTail(2);
list3.addToTail(8);

let list4 = new LinkedList();
list4.addToTail(9);
list4.addToTail(9);

let list5 = new LinkedList();

const reverseSum0 = sumListsReverse(list1, list2);
const result0 = [];
reverseSum0.forEach(item => result0.push(item));

assertDeepEquals(result0, [2, 1, 9], 'should return sum of digits in reverse order');

const reverseSum1 = sumListsReverse(list1, list3);
const result1 = [];
reverseSum1.forEach(item => result1.push(item));

assertDeepEquals(result1, [2, 1, 9, 8], 'should return correct sum when lists are unequal in length');

const reverseSum2 = sumListsReverse(list4, list4);
const result2 = [];
reverseSum2.forEach(item => result2.push(item));

assertDeepEquals(result2, [8, 9, 1], 'should carry remainder of highest place value');

// console.log('');
// console.log('TESTS FOR SUMLISTS()');

// const sum0 = sumLists(list1, list2);
// const result3 = [];
// sum0.forEach(item => result.push(item));

// assertDeepEquals(result3, [1, 3, 0, 8], 'should return sum of digits in forward order');

// const sum1 = sumLists(list1, list3);
// const result4 = [];
// sum4.forEach(item => result4.push(item));

// assertDeepEquals(result4, [6, 6, 4, 4], 'shoudl return correct sum when lists are unequal in length');

// const sum2 = sumLists(list4, list4);
// const result5 = [];
// sum2.forEach(item => result5.push(item));

// assertDeepEquals(result2, [1, 9, 8], 'should carry remainder of highest place value');

// const sum3 = sumLists(list4, list5);
// const result6 = [9, 9];
// sum3.forEach(item => result6.push(item));

// assertDeepEquals(result6, [1, 9, 8], 'should work when one list is empty');

// const sum4 = sumLists(list5, list5);
// const result7 = [9, 9];
// sum4.forEach(item => result7.push(item));

// assertDeepEquals(result7, [], 'should work when both lists is empty');
