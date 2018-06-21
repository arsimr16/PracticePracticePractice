/*
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support 'get' and 'put' operations.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

cache = new LRUCache(2); // param is capacity of cache

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

// simple implementation using arrays is not very efficient, but fast to implement
// get and put are both O(n) which is not ideal
class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = [];
	}

	// I: positive integer key
	// O: value assoc. with key or -1 if not in cache
	// C: none 
	// E: ignore handling bad inputs, return newest if duplicate keys
	get(key) {
		for (let i = 0; i < this.cache.length; i++) {
			let curr = this.cache[i];
			if (curr[0] === key) {
				this.cache.splice(i, 1);
				this.cache.unshift(curr)
				return this.cache[0][1];
			}
		}
		return -1;
	}
	// time complexity: O(n)
	// space complexity: O(1)

	// I: key (pos int), value pair to be inserted
	// O: none - invalidates oldest item in cache if full
	// C: none
	// E: duplicate keys could exist
	put(key, value) {
		this.cache.unshift([key, value]);
		if (this.cache.length > this.capacity) {
			this.cache.pop();
		}
	}
	// time complexity: O(n)
	// space complexity: O(1)
};

const assertEquals = (actual, expected, testName) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected "${expected}", but got "${actual}"`);
	}
}

const testCache0 = new LRUCache(2);
testCache0.put(1, 1);
testCache0.put(2, 2);
assertEquals(testCache0.get(1), 1, 'test0');
testCache0.put(3, 3);
assertEquals(testCache0.get(2), -1, 'test1');
testCache0.put(4, 4);
assertEquals(testCache0.get(1), -1, 'test2');
assertEquals(testCache0.get(3), 3, 'test3');
assertEquals(testCache0.get(4), 4, 'test4');
