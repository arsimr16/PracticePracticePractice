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
// E: if the tree contains duplicates, it cannot be a BST; an empty tree is balanced;
const validateBST = (tree) => {
	const values = [];
	if (!tree.root) {
		return true;
	}
	const curr = this.root;
	tree.inOrder(x => values.push(x));
  const i = 0;
  while(i < values.length - 2) {
  	if (values[i] > values[i + 1]) {
  		return false;
  	}
  }
  return true;
};
// time complexity: O(n)
// space complexity: O(n)

// tests
