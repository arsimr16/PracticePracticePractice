// implementation of binary search tree with depth-first and breadth-first traversal methods;

class BST {
	constructor() {
		this.root = null;
	}

	makeNode(value) {
		return { value, left: null, right: null };
	}

	insert(value) {
		const newNode = this.makeNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}

		let curr = this.root;
		// do nothing if the value already exists in the tree
		while(value !== curr.value) {
			if (value < curr.value) {
				if (!curr.left) {
					curr.left = newNode;
					break;
				}
				curr = curr.left;
			} else if (value > curr.value) {
				if (!curr.right) {
					curr.right = newNode;
					break;
				}
				curr = curr.right;
			}
		}
	}

	contains(target) {
		if (!this.root) {
			return;
		}
		let curr = this.root;
		while(curr) {
			if (curr.value === target) {
				return true;
			} else if (target < curr.value) {
				curr = curr.left;
			} else if (target > curr.value) {
				curr = curr.right;
			}
		}
		return false;
	}

	inOrder(cb, curr = this.root) {
    if (curr) {
      this.inOrder(cb, curr.left);
      cb(curr.value);
      this.inOrder(cb, curr.right);
    }
  }
}

const preOrderTraversal = (node, cb) => {
	// value, left, right
};

const postOrderTraversal = (node, cb) => {
	// left, right, value
}

const readthFirstTraversal = (node, cb) => {
	// root, all direct children, all children of direct children, etc.
}

// tests

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

console.log(testBST);
// inOrderTraversal(testBST, x => console.log(x));

console.log(testBST.contains(11));
console.log(testBST.contains(13));

testBST.inOrder(x => console.log(x));
