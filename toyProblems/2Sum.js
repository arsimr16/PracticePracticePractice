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


