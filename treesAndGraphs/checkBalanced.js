// implement a function to check whether a binary tree is balanced
// a balanced tree is defined to be a tree such that the heights
// of the two subtrees of any node never differ by more than 1

class BST {
	constructor() {
		this.root = null;
	}

	makeNode(value) {
		return { value, left: null, right: null };
	}

	insert(value) {
		const newNode = this.makeNode(value);
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		let curr = this.root;
		while(curr.value !== value) {
			if (value < curr.value) {
				if (curr.left === null) {
					curr.left = newNode;
					break;
				}
				curr = curr.left;
			} else {
				if (curr.right === null) {
					curr.right = newNode;
					break;
				}
				curr = curr.right;
			}
		}
	}

	// I: a binary search tree
	// O: the height of the BST as an int if balanced or -1 if unbalanced
	// C: none
	// E: an empty tree is balanced
	isBalanced(curr = this.root) {
		if (curr === null) return 0;

		const leftH = this.isBalanced(curr.left);
		if (leftH === -1) return -1;

		const rightH = this.isBalanced(curr.right);
		if (rightH === -1) return -1;

		if (Math.abs(leftH - rightH) > 1) return -1;

		return Math.max(leftH, rightH) + 1;
	}
	// time complexity: O(n)
	// space complexity: O(n)
};

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

const balanced0 = new BST();
[9, 5, 17].forEach(num => balanced0.insert(num));
assertEquals(balanced0.isBalanced() >= 0, true, 'simple balanced BST');

const balanced1 = new BST();
[9, 5, 2, 6, 8, 17, 15, 20, 23].forEach(num => balanced1.insert(num));
assertEquals(balanced1.isBalanced() >= 0, true, 'balanced BST');

const balanced2 = new BST();
assertEquals(balanced2.isBalanced() >= 0, true, 'empty BST');

const unbalanced0 = new BST();
[1, 2, 3, 4].forEach(num => unbalanced0.insert(num));
assertEquals(unbalanced0.isBalanced() >= 0, false, 'simple unbalanced BST');

const unbalanced1 = new BST();
[3, 1, 0, 2, 6, 4, 5].forEach(num => unbalanced1.insert(num));
assertEquals(unbalanced1.isBalanced() >= 0, false, 'unbalanced BST');
