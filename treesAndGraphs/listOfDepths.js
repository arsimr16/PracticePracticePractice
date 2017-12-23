// given a binary tree, design an algorithm which creates a linked list of all
// the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists)

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return { value, next: null };
	}

	addToTail(value) {
		const newTail = this.makeNode(value);
		if (!this.head) {
			this.head = newTail;
		}
		if (this.tail) {
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}
}

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

	// preOrder depth first traversal through BST, tracking curr depth
	preOrder(cb, curr = this.root, depth = 0) {
		if (curr) {
			cb(curr, depth);
			depth += 1;
			this.preOrder(cb, curr.left, depth);
			this.preOrder(cb, curr.right, depth);
		}
	}

	// I: none (method called on BST)
	// O: a linked list for each depth/level of the BST
	// since the linked lists have to be separate, I'll return an array of linked lists
	// C: none
	// E: none
	listOfDepths() {
		const result = [];
		this.preOrder((curr, depth) => {
			if (!result[depth]) {
				result[depth] = new LinkedList();
			}
			result[depth].addToTail(curr.value);
		});
		return result;
	}
	// time complexity: O(n) (traverse through all values once)
	// space complexity: O(n) (copy all values from BST into linked lists)
}

// tests:
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

const BST0 = new BST();
BST0.insert(9);
BST0.insert(5);
BST0.insert(2);
BST0.insert(6);
BST0.insert(8);
BST0.insert(17);
BST0.insert(15);
BST0.insert(20);
BST0.insert(23);

const test0 = BST0.listOfDepths();
assertEquals(test0.length, 4, 'should output correct number of linked lists');
assertEquals(test0[0].head.value, 9, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[1].head.value, 5, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[1].tail.value, 17, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[2].head.value, 2, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[2].head.next.value, 6, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[2].head.next.next.value, 15, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[2].tail.value, 20, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[3].head.value, 8, 'linked lists should contain correct BST values from left to right');
assertEquals(test0[3].tail.value, 23, 'linked lists should contain correct BST values from left to right');
