//Find all subsets that sum up to k

//subSets([1,2,1], 3) => [ [ 2, 1 ], [ 1, 2 ] ]
//subSets([1,2,3,4,5,6], 10) => [ [ 4, 6 ], [ 2, 3, 5 ], [ 1, 4, 5 ], [ 1, 3, 6 ], [ 1, 2, 3, 4 ] ]

// I: arr of integers, sum (k)
// O: arr of arrays, each arr is individula ints that add up to k
// C: none 
// E: if no subsets, return []; [1, 2] and [2, 1] count as different sets; 
// repeated numbers are allowed, but not distinguished in unique subsets 
// e.g. [2, and the first 1] is not different from [2, and the second 1]
const findAllSubsets = (integers, k) => {
  const results = [];
  const findSubset = (i = 0, currSubset = [], sum = 0) => {
    // if k === 0, the curr subset is valid
    if (sum === k) {
      return results.push(currSubset);
    }
    // if sum > k, the subset is invalid
    // if i >= integers.length, end recursive calls
    if (sum > k || i >= integers.length) {
      return;
    }
    // exclude current int
    findSubset(i + 1, currSubset.slice(), sum);
    // include current int
    currSubset.push(integers[i]);
    findSubset(i + 1, currSubset.slice(), sum += integers[i]);
  };
  findSubset();
  return results;
};
// time complexity: O(2^n) - exponential, each recursive call has two more possibilities
// space complexity: O(2^n) - store all potential subsets

// tests
const assertDeepEquals = (actual, expected, testname) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`passed ${testname}`);
  } else {
    console.log(`FAILED ${testname}: expected ${expected}, but got ${actual}`);
  }
};

assertDeepEquals(findAllSubsets([1, 2, 1], 3), [[2, 1], [1, 2]], 'should return all valid subsets');
assertDeepEquals(findAllSubsets([1, 2, 3, 4, 5, 6], 10), [[4, 6], [2, 3, 5], [1, 4, 5], [1, 3, 6], [1, 2, 3, 4]], 'should return all valid subsets');
assertDeepEquals(findAllSubsets([1, 2, 3], 10), [], 'should return empty array when there are no subsets');
assertDeepEquals(findAllSubsets([2, 5, 9, 0], 3), [], 'should return empty array when there are no subsets');
