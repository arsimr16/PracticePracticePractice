// implement a doubly linked list with addToTail, removeHead, contains, and makeNode methods

// more methods: addToHead, insertAfter, insertBefore, remove, forEach, map, length, kth item from head, kth item from tail

const LinkedList = () => { 'head': null, 'tail': null };

LinkedList.prototype.makeNode = value => { value, 'prev': null, 'next': null };

LinkedList.prototype.addToTail = value => {
	const newTail = this.makeNode(value);
	if (this.head === null) {
		this.head = newTail;
	}
	if (this.tail !== null) {
		newTail.prev = this.tail;
		this.tail.next = newTail;
	}
	this.tail = newTail;
};

LinkedList.prototype.removeHead = () => {
	const prevHead = this.head;
	if (this.head === null) return null;
	if (this.head === this.tail) {
		this.head = this.tail = null;
		return prevHead.value;
	}
	const newHead = prevHead.next;
	newHead.prev = null;
	this.head = newHead;
};

LinkedList.prototype.contains = target => {
	let curr = this.head;
	while(curr !== null) {
		if (curr.value === target) {
			return true;
		}
		curr = curr.next;
	}
	return false;
};

LinkedList.prototype.addToHead = value => {
	const newHead = this.makeNode(value);
	if (this.head === null) {
		this.head = this.tail = newHead;
	} else {
		newHead.next = this.head;
		this.head.prev = newHead;
		this.head = newHead;
	}
};

LinkedList.prototype.length = () => {
	let length = 0;
	let curr = this.head;
	while(curr !== null) {
		length++;
		curr = curr.next;
	}
	return length;
};

LinkedList.prototype.kthItemFromHead = k => {
	if (this.length < k) return null;
	let curr = this.head;
	let count = 1;
	while(count < k) {
		curr = curr.next;
		count++;
	}
	return curr.value;
};

LinkedList.prototype.kthItemFromTail = k => {
	if (this.length < k) return null;
	let curr = this.tail;
	let count = 1;
	while(count < k) {
		curr = curr.prev;
		count++;
	}
	return curr.value;
};

LinkedList.prototype.insertBefore = (target, value) => {

};

LinkedList.prototype.insertAfter = (target, value) => {

};

LinkedList.prototype.remove = value => {
	
};

LinkedList.prototype.forEach = cb => {

};

LinkedList.prototype.map = cb => {

};

// test all methods
