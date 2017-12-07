// basic FIFO queue

// implemented with doubly-linked list
class QueueArr {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	makeNode(value) {
		this.size += 1;
		return { value, prev: null, next: null };
	}

	// add item to end of queue
	add(value) {
		const newTail = this.makeNode(value);
		if (!this.head) {
			this.head = newTail;
		} 
		if (this.tail) {
			newTail.prev = this.tail;
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}

	// remove item from front of queue
	remove() {
		const removed = this.peek();
		if (this.size === 0) {
			return removed;
		}
		this.size > 0 ? this.size -= 1 : null;
		if (this.head) {
			this.head = this.head.next;
		}
		return removed;
	}

	// return item at front of queue
	peek() {
		return this.head;
	}

	// return true if queue is empty
	isEmpty() {
		return this.queue.length === 0;
	}
}

// implemented with JS object
class QueueObj {
	constructor() {
		this.queue = {};
		this.size = 0;
	}

	add(item) {

	}

	remove() {

	}

	peek() {

	}

	isEmpty() {
		return this.queue.size === 0;
	}
}
