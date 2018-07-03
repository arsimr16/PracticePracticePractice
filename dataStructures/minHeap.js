// min heap with insert and removeRoot methods

class BinaryHeap {
	constructor(compare) {
		this.heap = [];
		this.compare = compare;
	}

	swap(index, parentIndex) {
		const temp = this.heap[parentIndex];
		this.heap[parentIndex] = this.heap[index];
		this.heap[index] = temp;
	}

	getChildIndex(parentIndex) {
		const childrenIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(index => {
			return index < this.heap.length;
		});
		if (childrenIndices.length === 0) return null;
		if (childrenIndices.length === 1) return childrenIndices[0];
		if (this.compare(this.heap[childrenIndices[0]], this.heap[childrenIndices[1]])) {
			return childrenIndices[0];
		} else {
			return childrenIndices[1];
		}
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	insert(value) {
		this.heap.push(value);
		let index = this.heap.length - 1;
		let parentIndex = this.getParentIndex(index);
		while(index > 0 && this.compare(this.heap[index], this.heap[parentIndex])) {
			this.swap(index, parentIndex);
			index = parentIndex;
		  parentIndex = this.getParentIndex(index);
		}
	}

	removeRoot() {
		this.swap(this.heap.length - 1, 0);
		const oldRoot = this.heap.pop();
		let parentIndex = 0;
		let childIndex = this.getChildIndex(parentIndex);
		while(childIndex !== null && this.compare(this.heap[childIndex], this.heap[parentIndex])) {
			this.swap(childIndex, parentIndex);
			parentIndex = childIndex;
			childIndex = this.getChildIndex(parentIndex);
		}
		return oldRoot;
	}
}

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
}

const testHeap = new BinaryHeap((a, b) => a < b);
testHeap.insert(50);
testHeap.insert(90);
testHeap.insert(7);
testHeap.insert(87);
testHeap.insert(4);
testHeap.insert(55);

assertDeepEquals(testHeap.heap, [4, 7, 50, 90, 87, 55], 'inserts values according to compare function');

testHeap.removeRoot();
assertDeepEquals(testHeap.heap, [7, 55, 50, 90, 87], 'removes root of heap');

const testMaxHeap = new BinaryHeap((a, b) => a > b);
testMaxHeap.insert(50);
testMaxHeap.insert(90);
testMaxHeap.insert(7);
testMaxHeap.insert(87);
testMaxHeap.insert(4);
testMaxHeap.insert(55);

assertDeepEquals(testMaxHeap.heap, [90, 87, 55, 50, 4, 7], 'accepts different compare functions');

testMaxHeap.removeRoot();
assertDeepEquals(testMaxHeap.heap, [87, 50, 55, 7, 4], 'removes root of heap with diff compare fn');
