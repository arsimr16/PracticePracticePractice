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
			return;
		}

		let curr = this.root;
		while (value !== curr.value) {
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
}



// I: a sorted array (increasing) of unique integers
// O: a BST
// C: BST must have minimal height 
// E: empty arr
const minimalTree = (arr) => {
	const result = new BST();
	// inner recursive fn
	const findNext = (arr) => {
		const next = Math.floor((arr.length - 1) / 2);
		result.insert(arr[next]);
		const before = arr.slice(0, next);
		const after = arr.slice(next + 1);
		before.length ? findNext(before) : null;
		after.length ? findNext(after) : null;
	};

	findNext(arr);
	return result;
};
// time complexity: O(n)? I'm not sure about the time complexity of slice, 
// but this might make it O(n^2) if each slice call is linear [(l) + (l - 1) + (l - 2)...]
// space complexity: slice makes a copy of the array, so I think the time complexity is O(n^2)

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

// TODO: write a function that returns the depth of a BST to make testing more efficient;
const mt0 = minimalTree([2, 5, 6, 8, 9, 15, 17, 20, 23]);
/*
										9
									/		\									
								 /		 \
							  5      17
							 / \     / \
						  2   6   15  20   
									 \       \
										8      23
*/
assertEquals(mt0.root.value, 9, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.left.value, 5, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.right.value, 17, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.left.left.value, 2, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.left.right.value, 6, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.right.left.value, 15, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.right.right.value, 20, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.left.right.right.value, 8, 'minimalTree contains correct values in correct positions');
assertEquals(mt0.root.right.right.right.value, 23, 'minimalTree contains correct values in correct positions');
