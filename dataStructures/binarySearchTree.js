// implementation of binary search tree with contains and depth-first traversal methods;

class BST {
	constructor () {
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
		while(curr.value !== value) { // do not allow dups
			if (value < curr.value) {
				if (curr.left === null) {
					curr.left = newNode;
					break;
				}
				curr = curr.left;
			} else if (value > curr.value) {
				if (curr.right === null) {
					curr.right = newNode;
					break;
				}
				curr = curr.right;
			}
		}
	}

	contains(target) {
		let curr = this.root;
		while(curr !== null) {
			if (curr.value === target) {
				return true;
			} else if (target < curr.value) {
				curr = curr.left;
			} else {
				curr = curr.right;
			}
		}
		return false;
	}

	// left, curr, right
	inOrder(cb, curr = this.root) {
		if (curr !== null) {
			this.inOrder(cb, curr.left);
			cb(curr.value);
			this.inOrder(cb, curr.right);
		}
	}

	// curr, left, right
	preOrder(cb, curr = this.root) {
		if (curr !== null) {
			cb(curr.value);
			this.preOrder(cb, curr.left);
			this.preOrder(cb, curr.right);
		}
	}

	// left, right, curr
	postOrder(cb, curr = this.root) {
		if (curr !== null) {
			this.postOrder(cb, curr.left);
			this.postOrder(cb, curr.right);
			cb(curr.value);
		}
	}
};

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
}

let testBST = new BST();
testBST.insert(10);
testBST.insert(5);
testBST.insert(8);
testBST.insert(12);
testBST.insert(11);
testBST.insert(1);
testBST.insert(3);
testBST.insert(15);
testBST.insert(14);

assertDeepEquals(testBST.contains(11), true, 'contains should return true when bst contains passed in target');
assertDeepEquals(testBST.contains(13), false, 'contains should return false when bst does not contain passed in target');

const valuesInOrder = [];
testBST.inOrder(x => valuesInOrder.push(x));
assertDeepEquals(valuesInOrder, [1, 3, 5, 8, 10, 11, 12, 14, 15], 'should traverse bst in order');

const valuesPreOrder = [];
testBST.preOrder(x => valuesPreOrder.push(x));
assertDeepEquals(valuesPreOrder, [10, 5, 1, 3, 8, 12, 11, 15, 14], 'should traverse bst in preOrder');

const valuesPostOrder = [];
testBST.postOrder(x => valuesPostOrder.push(x));
assertDeepEquals(valuesPostOrder, [3, 1, 8, 5, 11, 14, 15, 12, 10], 'should traverse bst in postOrder');

