/*
A binary search tree was created by traversing through 
an array from left to right and inserting each element.  
Given a binary serach tree with distinct elements, 
print all possible arrays that could have led to this tree.

e.g.    2					output: [2, 1, 3], [2, 3, 1]
      /   \
     1     3
*/

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
};

// I: a binary search tree
// O: log all possible sequences that could have created the input BST
// C: none
// E: if the input had duplicates there would be repeated sequences, but there are no duplicates, empty tree
const BSTSequence = node => {
	// root must come first
	// find all possible sequences of left subtree
	// find all possible sequences of right subtree
	// as long as the left nodes are ordered with respect to each other
	// and the right nodes are ordered with respect to each other
	// the left and right nodes can appear in any order
	// use helper function to merge all left and right subtree sequences in all possible ways
};
// time complexity:
// space complexity: 

/*************************************************************************************
 Both functions can be improved by storing sequences as linked lists instead of arrays
**************************************************************************************/

// I: ordered left and right sequences and an array to store the final merged sequences
// O: all possible sequences of merging left and right while keeping left and right in order
// C: none
// E: there can't be duplicates between left and right, empty left and right
const getAllSequences = (left, right) => {
	const result = [];
	const mergeOrderedSequences = (left, right, merged = []) => {
		if (left.length === 0) {
			merged = merged.concat(right);
			result.push(merged);
		} else if (right.length === 0) {
			merged = merged.concat(left);
			result.push(merged);
		} else {
			const nextLeft = left.splice(0, 1);
			merged.push(nextLeft[0]);
			mergeOrderedSequences(left, right, merged);
			left.unshift(nextLeft[0]);
			const nextRight = right.splice(0, 1);
			merged.splice(merged.length - 1, 1, nextRight[0]);
			mergeOrderedSequences(left, right, merged);
			right.unshift(nextRight[0]);
			merged.pop();
		}
	}
	mergeOrderedSequences(left, right);
	return result;
}
// time complexity:
// space complexity:

// tests:
console.log(getAllSequences([1, 2], [3, 4]));
/* logs:
[ 1, 2, 3, 4 ]
[ 1, 3, 2, 4 ]
[ 1, 3, 4, 2 ]
[ 3, 1, 2, 4 ]
[ 3, 1, 4, 2 ]
[ 3, 4, 1, 2 ]
*/
