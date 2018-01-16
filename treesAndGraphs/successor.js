/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
		// if inputNode has a right child
		// successor is leftmost node of right subtree
    if (inputNode.right !== null) {
    	return findMinKeyWithinTree(inputNode.right);
    }
    // traverse up through tree until reaching the first parent of a left child
    // this parent is the successor
    // if this doesn't happen, return null
    let result = null;
    let currentNode = inputNode;
    while (currentNode.parent !== null) {
    	if (currentNode.parent.key > inputNode.key) {
    		result = currentNode.parent;
    		break;
    	}
    	currentNode = currentNode.parent;
    }
    return result;
}

const findMinKeyWithinTree = (inputNode) => {
	while (inputNode.left !== null) {
		inputNode = inputNode.left;
	}
	return inputNode;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

    var root = this.root;

    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while(currentNode) {
        if(key === currentNode.key) {
            return currentNode;
        }

        if(key < currentNode.key) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

// tests:

const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected ${expected}, but got ${actual}`);
	}
};

var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

const test0 = bst.getNodeByKey(9);
const result0 = bst.findInOrderSuccessor(test0);
assertEquals(result0.key, 11, 'should return leftmost node in right subtree when input node has right child');

const test1 = bst.getNodeByKey(5);
const result1 = bst.findInOrderSuccessor(test1);
assertEquals(result1.key, 9, 'should return parent when inputNode has no right child and is left child of parent');

const test2 = bst.getNodeByKey(14);
const result2 = bst.findInOrderSuccessor(test2);
assertEquals(result2.key, 20, 'should return first parent of a left child in ancestry tree when input node has no right child and is a right child');

const test3 = bst.getNodeByKey(25);
const result3 = bst.findInOrderSuccessor(test3);
assertEquals(result3, null, 'should return null when there is no inOrderSuccessor');
