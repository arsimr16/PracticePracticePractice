// given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height

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
		} else {
			while (curr.value !== value) {
				let curr = this.root;
				if (value < curr.value) {
					if (!this.left) {
						this.left = newNode;
						break;
					}
					curr = curr.left;
				} else if (value > curr.value) {
					if (!this.right) {
						this.right = newNode;
						break;
					}
					curr = curr.right;
				}	
			}
		}
	}
}

// I: a sorted array (increasing) of unique integers
// O: a BST with minimal height
// C: none
// E: empty arr
const minimalTree = (arr) => {

};
// time complexity:
// space complexity:

// tests