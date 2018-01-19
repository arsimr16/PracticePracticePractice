// leetcode # 136 - single number

/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

// passes all tests on leetcode
var singleNumber = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen.hasOwnProperty(nums[i])) {
            delete seen[nums[i]];
        } else {
            seen[nums[i]] = nums[i];
        }
    }
    return Object.values(seen)[0];
};
// this implementation has O(n) time complexity and O(n) space complexity
// I could avoid using extra space by sorting nums, but then the time would be O(n log n)






// leetcode # 137 - single number III

/*
Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

// passes all tests on leetcode
var singleNumber = function(nums) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            if (seen[nums[i]] === 2) {
                delete seen[nums[i]];
            } else {
                seen[nums[i]]++;
            }
        } else {
            seen[nums[i]] = 1;
        }
    }
    return parseInt(Object.keys(seen)[0]);
};
// this implementation has O(n) time complexity and O(n) space complexity
// I could avoid using extra space by sorting nums, but then the time would be O(n log n)






// leetcode # 260 - single number III

/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

// passes all tests on leetcode
var singleNumber = function(nums) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen.hasOwnProperty(nums[i])) {
            delete seen[nums[i]];
        } else {
            seen[nums[i]] = nums[i];
        }
    }
    return Object.values(seen);
};
// this implementation has O(n) time complexity and O(n) space complexity
// I could avoid using extra space by sorting nums, but then the time would be O(n log n)





// leet code # 
