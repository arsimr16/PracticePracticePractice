// write code to remove duplicates from an unsorted linked list
// how would you solve this problem if a temporary buffer is not allowed?

// basic LinkedList implementation
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
	if (!this.head) {
		this.head = newTail;
	}
	if (this.tail) {
		this.tail.next = newTail;
	}
	this.tail = newTail;
;

LinkedList.prototype.removeHead = () => {
	const prevHead = this.head;
	if (!prevHead) {
		return null;
	}
	if (this.head === this.tail) {
		this.head = this.tail = null;
	} else {
		this.head = this.head.next;
	}
	return prevHead.value;
};

LinkedList.prototype.contains = (target) => {
	let curr = this.head;
	while(curr) {
		if (curr.value === target) {
			return true;
		}
		curr = curr.next;
	}
	return false;
};


LinkedList.prototype.removeDups = () => {
	const uniq = {};
	// the head is always unique
	uniq[this.head.value] = true;
	let curr = this.head;
	while(curr && curr.next) {
		// if the next value is not unique
		if (uniq[curr.next.value]) {
			// remove pointer to curr.next / update pointer of current
			curr.next = curr.next.next
		} else {
			uniq[curr.next.value] = true;
			curr = curr.next;
		}
	}
	// return the linked list without any duplicates
	return this;
};

// time complexity: O(n)
// space complexity: O(n)

// tests:

