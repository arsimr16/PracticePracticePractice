// design an algorithm and write code to find the first common ancestor of 
// two nodes in a binary tree. Avoid storing additional nodes in a data structure
// NOTE: this is not necessarily a BST

// I: two nodes, assume nodes do not have a link to parent 
// O: the first common ancestor or null
// C: do not store additional nodes in a data structure
// E: one or more nodes is not in tree; the nodes are the same
const firstCommonAncestor = (tree, node1, node2) => {
	// if either node is not in the tree, return null
	if (!tree.contains(node1) || !tree.contains(node2)) {
		return null;
	}
	// if nodes are same, return that node
	if (node1 === node2) {
		return node1;
	}
	// 
};
// time complexity:
// space complexity:

// tests