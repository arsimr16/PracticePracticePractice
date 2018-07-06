// you are given a list of projects and a list of dependencies (which is a list of 
// pairs of projects, where the second project is dependent on the first project)
// All of a projects dependencies must be built before the project is. Find a build
// order that will allow the projects to be built. If there is no valid build order,
// return an error.  

// e.g. 
// input: 
// 	 projects: a, b, c, d, e, f
// 	 dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// output:
//   build order: f, e, a, b, d, c

class DirectedGraph {
	constructor() {
		this.nodes = {};
	}

	addNode(value) {
		this.nodes[value] = this.nodes[value] || { edges: {} };
	}

	contains(target) {
		return !!this.nodes[target];
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			this.nodes[fromNode].edges[toNode] = true;
		}
	}

	// I: fromNodes (an array of strings), toNode (a node in the graph)
	// O: return true if toNode does not contain incoming edges from nodes other than those passed in as fromNodes
	// C: none
	// E: assume graph contains all passed in nodes
	incomingEdges(fromNodes, toNode) {
		for (let node in this.nodes) {
			if (!fromNodes.includes(node)) {
				if (this.nodes[node].edges[toNode]) {
					return false;
				}
			}
		}
		return true;
	}
	// time complexity: O(n) - time grows with size of fromNodes argument and the number of nodes in the tree
	// space compelxity: O(1)
};

// I: a list of projects (in an array) and a list of dependencies (an array of tuples)
// O: a valid build order or an error if there is none
// C: none
// E: if no projects, return empty build order
const buildOrder = (projects, dependencies) => {
	const projGraph = new DirectedGraph();
	projects.forEach(project => projGraph.addNode(project));
	dependencies.forEach(dependency => projGraph.addEdge(dependency[0], dependency[1]));

	const built = [];
	const toBuild = projects.slice();
	let i = 0;
	while(i < toBuild.length) {
		if (projGraph.incomingEdges(built, toBuild[i])) {
			built.push(toBuild[i]).toString();
			toBuild.splice(i, 1);
			i = 0;
		} else {
			i++;
		}
	}
	return toBuild.length ? 'no valid build order' : built;
};
// time complexity: worst case is O(n^2)? [O(n) + O(n - 1) + O(n - 2) etc.] where n is the number of projects
// space compelxity: O(n) where n is size of projects array

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

// incoming edges method
const test0 = new DirectedGraph();
test0.addNode(1);
test0.addNode(2);
test0.addNode(3);
test0.addNode(4);
assertDeepEquals(test0.incomingEdges([], 1), true, 'should return true when there are no incoming edges to the passed in node');

test0.addEdge(1, 2);
assertDeepEquals(test0.incomingEdges(['1'], 2), true, 'should return true when only incoming edges are included in first argument');
assertDeepEquals(test0.incomingEdges([], 2), false, 'should return false when node contains incoming edge other than those passed in');

test0.addEdge(3, 2);
test0.addEdge(4, 2);
assertDeepEquals(test0.incomingEdges(['1', '3', '4'], 2), true, 'should return true when multiple incoming edges are passed in');

test0.addEdge(2, 4);
assertDeepEquals(test0.incomingEdges(['1', '2', '3'], 4), true, 'should return true when incoming edge is listed in passed in argument');

// buildOrder function
assertDeepEquals(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]), ['e', 'f', 'a', 'b', 'd', 'c'], 'should return valid build order when possible');
assertDeepEquals(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['c', 'f'], ['d', 'c']]), 'no valid build order', 'should return error message when no valid build order is found');
