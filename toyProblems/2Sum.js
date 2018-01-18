// Leetcode #1 - Two Sum

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// passes all tests on leetcode
var twoSum = function(nums, target) {
		// store number and index of each item in nums
    pairs = {};
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
    		// match is the number needed to get to the target
        const match = target - nums[i];
        // if it exists in pairs object, return the indices of the both numbers
        if (pairs.hasOwnProperty(match)) {
            return [pairs[match], i];
        // else add the number and index to pairs
        } else {
            pairs[nums[i]] = i;
        }
    }
    return 'error, no match found';
};

// Leetcode #167 - Two Sum II - input array is sorted

/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

// passes all tests on leetcode
var twoSum = function(numbers, target) {
		// store pointers to beginning and end of numbers array
    let firstIndex = 0;
    let secondIndex = numbers.length - 1;
    // assuming there is always a valid solution and numbers is sorted, this will always work
    while(true) {
        let sum = numbers[firstIndex] + numbers[secondIndex];
        if (sum === target) {
        		// this problem states that the indices should not be 0-indexed
            return [firstIndex + 1, secondIndex + 1];
        // if sum is too small, try next largest number
        } else if (sum < target) {
            firstIndex++;
        // if sum is too large, try next smallest number
        } else if (sum > target) {
            secondIndex--;
        }
    }
};

// Leetcode #170 - Two Sum III - data structure design

/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
*/

// passes all tests on leetcode
var TwoSum = function() {
    this.nums = [];
};

TwoSum.prototype.add = function(number) {
    this.nums.push(number);
};

TwoSum.prototype.find = function(value) {
    pairs = {};
    for (let i = 0; i < this.nums.length; i++) {
        const match = value - this.nums[i];
        if (pairs[match]) {
            return true;
        } else {
            pairs[this.nums[i]] = true;
        }
    }
    return false;
};
