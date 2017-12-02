// implement a function to check whether a linked list is a palindrome

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return {value, next: null };
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

// I: a linked list
// O: a boolean
// C: none
// E: even and odd numbered lists, empty lists, case-sensitive
const isPalindrome = (list) => {

};
// time complexity:
// space complexity:

// tests
const assertEquals = (actual, expected, testname) => {
	if (actual === expected) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

let oddPalindrome = new LinkedList();
oddPalindrome.addToTail('a');
oddPalindrome.addToTail('b');
oddPalindrome.addToTail('c');
oddPalindrome.addToTail('b');
oddPalindrome.addToTail('a');

assertEquals(isPalindrome(oddPalindrome), true, 'should return true for odd length palindrome');

let evenPalindrome = new LinkedList();
evenPalindrome.addToTail('a');
evenPalindrome.addToTail('b');
evenPalindrome.addToTail('b');
evenPalindrome.addToTail('a');

assertEquals(isPalindrome(evenPalindrome), true, 'should return true for even length palindrome');

let notPalindrome = new LinkedList();
notPalindrome.addToTail('a');
notPalindrome.addToTail('b');
notPalindrome.addToTail('c');

assertEquals(isPalindrome(notPalindrome), false, 'should return false for non-palindromes');

let caseSensitive = new LinkedList();
caseSensitive.addToTail('A');
caseSensitive.addToTail('B');
caseSensitive.addToTail('b');
caseSensitive.addToTail('a');

assertEquals(isPalindrome(caseSensitive), false, 'should be case-sensitive');

let emptyList = new LinkedList();

assertEquals(isPalindrome(emptyList), true, 'should return true when passed an empty list');
