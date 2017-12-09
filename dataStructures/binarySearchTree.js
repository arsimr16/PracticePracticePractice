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
				this.left == null ? this.left = newNode : this.left.insert(value);
			} else if (value > this.value) {
				this.right === null ? this.right = newNode : this.right.insert(value);
			}
			// else do nothing b/c the value is already in the tree
		}
	}

	contains(target) {
		if (this.value === target) {
			return true;
		} else if (target < this.value) {
			return !!(this.left && this.left.contains(target));
		} else if (target > this.value) {
			return !!(this.right && this.right.contains(target));
		}
	}
}