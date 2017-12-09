// implementation of binary search tree with pre-order, in-order, and post-order traversal methods;

class BST {
	constructor() {
		this.value = null;
		this.left = null;
		this.right = null;
	}

	makeNode(value) {
		return { value, left: null; right: null };
	}

	insert(value) {
		const newNode = this.makeNode(value);
		if (!this.value) {
			this.value = newNode;
		} else {
			if (value < this.value) {
				if (this.left === null) {
					this.left = newNode;
				} else {
					this.left.insert(value);
				}
			} else if (value > this.value) {
				if (this.right === null) {
					this.right = newNode;
				} else {
					this.right.insert(value);
				}
			} else {
				// do nothing
				// the value already exisits in the tree
			}
		}
	}
}