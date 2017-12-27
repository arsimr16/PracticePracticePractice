// implement a function to check whether a binary tree is a binary search tree

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

	inOrder(cb, curr = this.root) {
    if (curr) {
      this.inOrder(cb, curr.left);
      cb(curr.value);
      this.inOrder(cb, curr.right);
    }
  }
}

// I: a tree
// O: a boolean - whether or not the input is a BST
// C: none
// E: if the tree contains duplicates, it cannot be a BST; an empty tree is valid;
const validateBST = (tree) => {
	const values = [];
	if (!tree.root) {
		return true;
	}
	const curr = this.root;
	tree.inOrder(x => values.push(x));
  let i = 0;
  while(i < values.length - 2) {
  	if (values[i] > values[i + 1]) {
  		return false;
  	}
  	i += 1;
  }
  return true;
};
// time complexity: O(n)
// space complexity: O(n)

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const validBST = new BST();
validBST.insert(9);
validBST.insert(5);
validBST.insert(17);
validBST.insert(6);
validBST.insert(0);
validBST.insert(10);
validBST.insert(19);
validBST.insert(6);
validBST.insert(4);

assertEquals(validateBST(validBST), true, 'should return true for a valid BST');

const emptyBST = new BST();
assertEquals(validateBST(emptyBST), true, 'should count an empty tree as valid');

const invalidBST = new BST();
invalidBST.insert(10);
invalidBST.insert(5);
invalidBST.insert(0);
invalidBST.insert(15);
invalidBST.insert(25);
invalidBST.insert(14);

invalidBST.root.right.left.value = 20;
assertEquals(validateBST(invalidBST), false, 'should return false when BST is invalid');
