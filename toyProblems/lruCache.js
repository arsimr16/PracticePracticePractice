/*
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support 'get' and 'put' operations.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?
*/

// array implementation - get and put are both O(n) which is not ideal
/*
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
*/

// a more efficient implementation using JS Map object
class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key) {
		const value = this.cache.get(key);
		if (value === undefined) return -1;
		this.cache.delete(key);
		this.cache.set(key, value);
		return value;
	}

	// duplicates are not allowed
	put(key, value) {
		if (this.cache.has(key)) this.cache.delete(key);
		this.cache.set(key, value);
		while(this.cache.size > this.capacity) {
			this.cache.delete(this.cache.keys().next().value);
		}
	}
}
// time complexity: O(1) for get and put
// space complexity: O(1)

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
