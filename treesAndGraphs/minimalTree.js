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
// O: a BST
// C: BST must have minimal height 
// E: empty arr
const minimalTree = (arr) => {
	const result = new BST();
	// inner recursive fn
	const findNext = (arr) => {
		if (arr.length > 0) {
			const next = Math.floor(arr.length / 2);
			result.insert(arr[next]);
			const before = arr.slice(0, next);
			const after = arr.slice(next);
			findNext(before);
			findNext(after);
		}
	};

	findNext(arr);
	return result;
};
// time complexity:
// space complexity:

// tests