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


	// I: two linked lists, digits in reverse order
	// O: a linked list containing sum digits in reverse order
	// C: none
	// E: empty list, numbers not same length, assume only positive integers
	sumListsReverse(l1, l2) {
		// sum lists with digits in reverse order
	}
	// time complexity:
	// space complexity:


	// I: two linked lists, digits in forward order
	// O: a linked lists containing sum digits in forward order
	// C: none
	// E: empty list, numbers have different lengths, assume only positive integers
	sumLists(l1, l2) {
		// sum lists with digits in forward order
	}
}

// assertion function(s)

// tests for sumListsReverse()

// tests for sumLists()