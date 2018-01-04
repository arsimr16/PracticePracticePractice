// you are given a binary tree in which each node contains an integer value (which might be positive or negative)
// design an algorithm to count the number of paths that sum to a given value. the path does not need to start
// or end at the root leaf, but it must go downward (traveling from parent nodes to child nodes)

// I: a binary tree and a target sum
// O: arr of arrays, each containing the path that add up to the given sum
// C: none
// E: no paths equal sum, return []; since there are negative numbers, check the whole path
// a path might reach the sum, keep going and reach the sum again
const pathsWithSum = (binTree, sum) => {
	const results = [];

	// depth first search through tree
	// track current path and current sum
	// whenever sum equals target sum, push curr path to results

	// repeat above for each node in tree

	return results;
};
// time complexity: dfs from each node in tree O(n^2)?
// space complexity:

// tests
