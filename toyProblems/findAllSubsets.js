//Find all subsets that sum up to k

//subSets([1,2,3,4,5,6], 10) //[ [ 1, 2, 3, 4 ], [ 1, 3, 6 ], [ 1, 4, 5 ], [ 2, 3, 5 ], [ 4, 6 ] ]
//subSets([1,2,1], 3) //[ [ 1, 2 ], [ 2, 1 ] ]

// no subsets => return [];

// I: arr of positive integers, sum (k)
// O: arr of arrays, each arr is individula ints that add up to k
// C: none 
// E: if no subsets, return []; order of addition matters

// result = []
// get rid of any integers above k 
// if sum of all values < k, return result

// iterate through arr (i)
  // curr subSet = arr
  // curr total = 0
  // remaining = [set - curr value]
  // while remaining len > 0
    // iterate through remaining
      // add curr value to subSet and total
      // if total === k
        // add curr subSet to result arr
      // else if total < k
        // keep iterating
      // else if total > k 
        // stop, not valid subset
      // remove remaining[0]
      
  // return result;