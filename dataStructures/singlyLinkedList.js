// implement a singlyLinkedList with addToTail, removeHead, contains, and makeNode methods
// extra methods - add to head, remove, removeTail, forEach, map, insertAfter, insertBefore

const LinkedList = () => {
	this.head = null;
	this.tail = null;
};

LinkedList.prototype.makeNode = value => { value, 'next': null };

LinkedList.prototype.addToTail = value => {
	const newTail = this.makeNode(value);
	if (this.head === null) {
		this.head = newTail;
	}
	if (this.tail !== null) {
		this.tail.next = newTail;
	}
	this.tail = newTail;
};

LinkedList.prototype.removeHead = () => {
	const prevHead = this.head;
	if (prevHead === null) return;
	if (this.head === this.tail) {
		this.head = this.tail = null;
	} else {
		this.head = this.head.next;
	}
	return prevHead.value;
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
	if (this.tail === null) {
		this.tail = newHead;
	} else {
		this.newHead.next = this.head;
	}
	this.head = this.newHead;
};

LinkedList.prototype.remove = target => {
	const curr = this.head;
	if (curr === null) {
		return null;
	} else if (curr.value === target) {
		this.removeHead();
	}
	while(curr && curr.next) {
		if (curr.next.value === target) {
			if (curr.next.next !== null) {
				curr.next = curr.next.next;
			} else {
				curr.next = null;
				this.tail = curr;
			}
			return target;
		}
		curr = curr.next;
	}
	return null;
};

LinkedList.prototype.removeTail = () => {
	const oldTail = this.tail;
	if (oldTail === null) return null;
	if (oldTail === this.head) {
		this.head = this.tail = null;
		return oldTail.value;
	}
	const curr = this.head;
	while(curr !== null) {
		if (curr.next === oldTail) {
			curr.next = null;
			this.tail = curr;
			return oldTail.value;
		}
		curr = curr.next;
	}
};

LinkedList.prototype.forEach = cb => {
	let curr = this.head;
	while(curr !== null) {
		curr.value = cb(curr.value);
		curr = curr.next;
	}
};

LinkedList.prototype.map = cb => {
	const result = new LinkedList();
	this.forEach(node => result.addToTail(cb(node.value)));
	return result;
};

LinkedList.prototype.insertAfter = (target, value) => {
	const newNode = this.makeNode(value);
	let curr = this.head;
	while(curr !== null) {
		if (curr.value === target) {
			newNode.next = curr.next;
			curr.next = newNode;
			if (newNode.next === null) {
				this.tail = newNode;
			}
			return value;
		}
		curr = curr.next;
	}
	return null;
};

LinkedList.prototype.insertBefore = (target, value) => {
	const newNode = this.makeNode(value);
	if (this.head === target) {
		return this.addToHead(value);
	}
	let prev = this.head;
	let curr = this.head.next;
	while(curr !== null) {
		if (curr.value === target) {
			newNode.next = curr;
			pre.next = newNode;
			return value;
		}
		curr = curr.next;
	}
	return null;
};
