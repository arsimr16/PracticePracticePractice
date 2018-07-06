// Leetcode #236 - following code passes all tests

// design an algorithm and write code to find the first common ancestor of 
// two nodes in a binary tree. Avoid storing additional nodes in a data structure
// NOTE: this is not necessarily a BST

// I: root and two nodes in the binary tree, assume nodes do not have a link to parent 
// O: the first common ancestor
// C: do not store additional nodes in a data structure
// E: one or more nodes is not in tree; the nodes are the same 
// (this code does not handle these edge cases) 
// to handle this I think I would have to first search the tree for both nodes
const lowestCommonAncestor = (root, p, q) => {
    if (root === null) return null;
    
    if (root === p || root === q) return root;
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left !== null && right !== null) return root;
    if (left === null && right === null) return null;
    
    return left !== null ? left : right;
};
// time complexity: O(n)
// space complexity: O(n)
