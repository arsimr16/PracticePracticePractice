// min heap with insert and removeRoot methods

class binaryHeap {
	constructor() {
		this.heap = [];
		// currently compare function for a minHeap
		this.compare = (a, b) => a < b;
	}

	swap(index, parentIndex) {
		const temp = this.heap[parentIndex];
		this.heap[parentIndex] = this.heap[index];
		this.heap[index] = temp;
	}

	// get index of appropriate child according to compare fn (e.g. the lesser child)
	getChildIndex(parentIndex) {
		const childrenIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter((index) => {
			return index < this.heap.length;
		});
		if (this.compare(this.heap[childrenIndices[0]], this.heap[childrenIndices[1]])) {
			return childrenIndices[0];
		} else {
			return childrenIndices[1];
		}
	}

	insert(value) {
		// add value to end of heap
		this.heap.push(value);
		// compare child with parent
		let index = this.heap.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while(index > 0 && this.compare(this.heap[index], this.heap[parentIndex])) {
			// swap parent and child
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	removeRoot() {
		// swap last node and root;
		this.swap(this.heap.length - 1, 0);
		// remove last node and store it to be returned later
		const origRoot = this.heap.pop();
		let tempRootIndex = 0;
		// compare children to get index of appropriate child
		let childIndex = this.getChildIndex(tempRootIndex);
		// while there are children and the compare fn is true
		while(childIndex && this.compare(this.heap[childIndex], this.heap[tempRootIndex]))
			// swap child with root
			this.swap(childIndex, tempRootIndex);
			tempRootIndex = childIndex;
			childIndex = this.getChildIndex(tempRootIndex);
		// return removed node from earlier
		return origRoot;
	}
}

// tests