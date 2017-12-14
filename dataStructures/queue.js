// basic FIFO queue

// implemented with doubly-linked list
class QueueList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	makeNode(value) {
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
		this.size += 1;
	}

	// remove item from front of queue
	remove() {
		if (!this.isEmpty()) {
			const removed = this.peek();
			this.size -= 1;
			if (this.size === 0) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
			return removed;
		}
	}

	// return item at front of queue
	peek() {
		return this.head ? this.head.value : null;
	}

	// return true if queue is empty
	isEmpty() {
		return this.size === 0;
	}
}

// implemented with JS object
class QueueObj {
	constructor() {
		this.queue = {};
		this.size = 0;
	}

	add(item) {
		this.queue[this.size] = item;
		this.size += 1;
	}

	remove() {
		if (!this.isEmpty()) {
			const removed = this.peek();
			for (var i = 1; i <= this.size; i += 1) {
				this.queue[i - 1] = this.queue[i];
			}
			delete this.queue[this.size - 1];
			this.size -= 1;
			return removed;
		}
	}

	peek() {
		return this.queue[0] ? this.queue[0] : null;
	}

	isEmpty() {
		return this.size === 0;
	}
}

const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

// tests
console.log('TESTS FOR QueueList:')
const testQ0 = new QueueList();
assertDeepEquals(testQ0.peek(), null, 'peek method should return null when queue is empty');
assertDeepEquals(testQ0.isEmpty(), true, 'isEmpty method should return true when queue is empty');

testQ0.add(1);
assertDeepEquals(testQ0.size, 1, 'size should equal 1 after one item is added');
assertDeepEquals(testQ0.isEmpty(), false, 'isEmpty method should return false when queue is not empty');
assertDeepEquals(testQ0.head, testQ0.tail, 'head and tail should be equal when size = 1');
assertDeepEquals(testQ0.head.prev, null, 'prev of head should equal null');
assertDeepEquals(testQ0.tail.prev, null, 'prev of tail should be null when size = 1');
assertDeepEquals(testQ0.head.next, null, 'next of head should equal null when size = 1');
assertDeepEquals(testQ0.tail.next, null, 'next of tail should equal null');

testQ0.remove();
assertDeepEquals(testQ0.size, 0, 'size should equal 0 after all items removed');
assertDeepEquals(testQ0.head, null, 'head should be null when size = 0');
assertDeepEquals(testQ0.tail, null, 'tail should be null when size = 0');

testQ0.add(1);
testQ0.add(2);
assertDeepEquals(testQ0.peek(), 1, 'should return value of head when queue is not empty');
assertDeepEquals(testQ0.size, 2, 'size should equal 2 after two items are added');
assertDeepEquals(testQ0.head.value, 1, 'head value should be correct when size = 2');
assertDeepEquals(testQ0.head.prev, null, 'head prev value should be null');
assertDeepEquals(testQ0.head.next.value, 2, 'head next value should equal tail value when size = 2');
assertDeepEquals(testQ0.tail.value, 2, 'tail value should equal 2');
assertDeepEquals(testQ0.tail.prev.value, 1, 'tail prev value should equal head value when size = 2');
assertDeepEquals(testQ0.tail.next, null, 'tail next should equal null');

testQ0.add(3);
testQ0.add(4);
assertDeepEquals(testQ0.size, 4, 'size should equal 4 after four items are added');
assertDeepEquals(testQ0.head.value, 1, 'head should not change as values are added');
assertDeepEquals(testQ0.tail.value, 4, 'tail value should equal 4');
assertDeepEquals(testQ0.tail.prev.value, 3, 'tail prev should point to correct node as values are added');
assertDeepEquals(testQ0.tail.next, null, 'tail next should always be null');

console.log('');
// more tests
console.log('TESTS FOR QueueObj');
const testQ1 = new QueueObj();
assertDeepEquals(testQ1.peek(), null, 'peek should return null when queue is empty');
assertDeepEquals(testQ1.isEmpty(), true, 'isEmpty method should return true when queue is empty');

testQ1.add(1);
assertDeepEquals(testQ1.size, 1, 'size should equal 1 after one item is added');
assertDeepEquals(testQ1.isEmpty(), false, 'isEmpty shoudl return false when queue is not empty');
assertDeepEquals(testQ1.queue[0], 1, 'should add value to proper place in queue');

testQ1.remove();
assertDeepEquals(testQ1.size, 0, 'size should equal 0 after all items removed');
assertDeepEquals(testQ1.queue[0], undefined, 'queue[0] should be undefined when size = 0');

testQ1.add(1);
testQ1.add(2);
assertDeepEquals(testQ1.peek(), 1, 'should return value of head when queue is not empty');
assertDeepEquals(testQ1.size, 2, 'size should equal 2 after two items are added');
const queueValues = [];
queueValues.push(testQ1.queue[0]);
queueValues.push(testQ1.queue[1]);
assertDeepEquals(queueValues, [1, 2], 'queue should contain correct values in order');
assertDeepEquals(testQ1.queue[2], undefined, 'queue[size], should be undefined');

testQ1.add(3);
testQ1.add(4);
queueValues.push(testQ1.queue[2]);
queueValues.push(testQ1.queue[3]);
assertDeepEquals(queueValues, [1, 2, 3, 4], 'queue should contain correct values in order');
assertDeepEquals(testQ1.queue[4], undefined, 'queue[size], should be undefined');
