// write an algorithm to find the "next" node (i.e. in-order successor) of a given BST
// you may assume that each node has a link to its parent

// I: a node in a BST in which each node has link to its parent
// O: the next node according to in-order traversal
// C: none
// E: if there isn't a next node, return null
const successor = (node) => {
	// in-order travesal: left, current, right
	// if node has a right child !== null, that is always the next node
	// parent = node's parent
	// else if node < parent, it is the left node and the next is it's parent
	// else if node > parent, it is the right child
		// while parent exists
		  // check parent of parent and so on until you get to root
		  // if root > node
		  	// value was on the left side of one of the tree's branches and the root of that branch is the next node
		 	// else the root was on the ride side and there is no next node
		 		// return null
};
// time complexity: the size of the input never changes (it is always one node),
// but as the size of the BST grows, the worst case grows with the depth of the current node in the tree
// space complexity: O(1) (although I guess the call stack does increase in the while loop, but I don't think that counts)

// tests

