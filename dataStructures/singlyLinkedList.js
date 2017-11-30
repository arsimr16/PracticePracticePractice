// implement a sinlgyLinkedList with addToTail, removeHead, contains, and makeNode methods

const LinkedList = () => {
	this.head = null;
	this.tail = null;
};

LinkedList.prototype.makeNode = (value) => {
	const node = {};
	node.value = value;
	node.next = null;
	return node;
};

LinkedList.prototype.addToTail = (value) => {
	const newTail = this.makeNode(value);
	// if there is no head, the new value will be the head
	if (!this.head) {
		this.head = newTail;
	}
	// if there is already a tail, the previous tail needs to point to the new tail
	if (this.tail) {
		this.tail.next = newTail;
	}
	// in all cases this.tail will be set to the new tail
	this.tail = newTail;
};

LinkedList.prototype.removeHead = () => {
	// store the current head
	const prevHead = this.head;
	// if there is no head, nothing can be removed, return null
	if (!this.head) {
		return null;
	}
	// if the head and tail are the same, there is one node,
	// when it is removed, the head and tail will be null
	if (this.head === this.tail) {
		this.head = this.tail = null;
	// else update head reference to next node
	} else {
		this.head = this.head.next;
	}
	// return the value of the removed head
	return prevHead.value;
};

LinkedList.prototype.contains = (target) => {
	let current = this.head;
	while(current) {
		if (current.value === target) {
			return true;
		}
		current = current.next;
	}
	return false;
};

// more methods - addToHead, insertAfter, insertBefore, remove, forEach, map

LinkedList.prototype.addToHead = (value) => {
	const newHead = this.makeNode(value);
	// if there is no tail, the new head will also be the tail
	if (!this.tail) {
		this.tail = newHead;
	}
	// if there is already a head, set newHead.next to curr head
	if (this.head) {
		newHead.next = this.head;
	}
	// this.head will always be set to the new head
	this.head = newHead;
};

LinkedList.prototype.remove = (target) => {
	// if the head === value, use removeHead method
	if (this.head.value === target) {
		return this.removeHead();
	}
	// iterate through linked list
	const curr = this.head;
	// while the current and next values exist
	while(curr && curr.next) {
		// if the next value === value, remove the node
		if (curr.next.value === target) {
			// if the node being removed has a node after it
			if (curr.next.next) {
				// update the pointer of the current node
				curr.next = curr.next.next;
			} else {
				// otherwise, the current node should not point to anything
				curr.next = null;
				// the current node is now the new tail
				this.tail = curr;
			}
			// return the value that was removed
			return target;
		}
		// move to the next node in the LinkedList
		curr = curr.next
	}
	// return null if the item was not found
	return null;
};

LinkedList.prototype.forEach = (cb) => {
	let curr = this.head;
	while(curr) {
		// call the callback function on each item in the LinkedList
		this.head.value = cb(this.head.value);
		curr = curr.next;
	}
	// do not return anything
};

LinkedList.prototype.map = (cb) => {
	// map should return a new List
	const result = new LinkedList();
	let curr = this.head;
	while(curr) {
		// add a new node to the tail of the result LinkedList 
		// its value is the result of invoking the callback function on the current value
		result.addToTail(cb(curr.value));
		curr = curr.next;
	}
	return result;
};

LinkedList.prototype.insertAfter = (target, value) => {
	let curr = this.head;
	const newNode = this.makeNode(value);
	while(curr) {
		// if curr value === target, insert newNode
		if (curr.value === target) {
			// add pointer to following node
			newNode.next = curr.next;
			// update pointer of current node
			curr.next = newNode;
			// return value inserted
			return value;
		}
		curr = curr.next;
	}
	// if target is not found, return null
	return null
};

LinkedList.prototype.insertBefore = (target, value) => {
	let curr = this.head;

};


// TODO add time and space complexities for all methods

// TODO implement tests for all methods

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed "${testName}"`);
	} else {
		console.log(`FAILED "${testName}": expected: "${expected}", but got "${actual}"`);
	}
}

// TESTS

// tests for addToBack()
// 'should add to back when list is empty' (check that start and end are same, value is correct)
// 'should add to back when list is not empty' (check that start and end are not same, end value is correct)

// tests for addToFront()
// 'should add to front when list is empty' (check that start and end are same, value is correct)
// 'should add to front when list is not empty' (check that start and end are not same, start value is correct)

// tests for insertAfter()
// 'should insert new node after specified target'
// 'should not insert value if target is not found'

// tests for remove()
// 'should remove value if list contains value' 
// 'should not remove anything is value is not found' (compare lengths of before and after?)

// tests for contains()
// 'should return true if linked list contains value'
// 'should return false if linked list does not contain value'

// tests for map()
// 'should invoke callback on each value in the linked list'
