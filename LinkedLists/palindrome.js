// implement a function to check whether a linked list is a palindrome

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	makeNode(value) {
		return { value, 'next': null };
	}

	addToTail(value) {
		const newTail = this.makeNode(value);
		if (this.head === null) {
			this.head = newTail;
		}
		if (this.tail !== null) {
			this.tail.next = newTail;
		}
		this.tail = newTail;
	}

	forEach(cb) {
		let curr = this.head;
		while(curr !== null) {
			curr.value = cb(curr.value);
			curr = curr.next;
		}
	}
};

// I: a lined list, each value is an alphabetic char
// O: boolean indicating if word is palindrome
// C: none (assume singly-linked list)
// E: handle even and odd lengths; case-sensitive; 
const isPalindrome = list => {
	const letters = [];
	list.forEach(letter => letters.push(letter));
	return letters.join('') === letters.reverse().join('');
};
// time complexity: O(n) ? maybe O(n^2), I'm not sure about the time complexity of reverse()
// space complexity: O(n)

// more efficient, but less clean solution:
// const isPalindrome = list => {
// 	const letters = [];
// 	list.forEach(letter => letters.push(letter));
// 	let i = 0;
// 	while (i < Math.floor(letters.length / 2)) {
//     if (letters[i] === letters[letters.length - 1 - i]) {
//   	   i += 1;
//     } else {
//       return false;
//     }
// 	}
// 	return true;
// };

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
