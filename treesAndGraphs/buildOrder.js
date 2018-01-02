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

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	makeNode(value) {
		return { value, prev: null, next: null };
	}

	add(value) {
		const newTail = this.makeNode(value);
		if (!this.head) {
			this.head = newTail;
		} 
		if (this.tail) {
			newTail.prev = this.tail;
			this.tail.next = newTail;
		}
		this.tail = newTail;
		this.size += 1;
	}

	remove() {
		if (!this.isEmpty()) {
			const removed = this.peek();
			this.size -= 1;
			if (this.size === 0) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
			return removed;
		}
	}

	peek() {
		return this.head ? this.head.value : null;
	}

	isEmpty() {
		return this.size === 0;
	}

	contains(target) {
		let curr = this.head;
		while(curr) {
			if (curr.value === target) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}
}

/********************************************************/

class DirectedGraph {
	constructor() {
		this.nodes = {};
	}

	addNode(value) {
		this.nodes[value] = this.nodes[value] || { edges: {} };
	}

	contains(value) {
		return !!this.nodes[value];
	}

	removeNode(value) {
		if (this.contains(value)) {
			delete this.nodes[value];
			for (let node in this.nodes) {
				if (this.nodes[node].edges[value]) {
					delete this.nodes[node].edges[value];
				}
			}
		}
	}

	hasEdge(fromNode, toNode) {
		if (!this.contains([fromNode])) {
			return false;
		}
		return !!this.nodes[fromNode].edges[toNode];
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			this.nodes[fromNode].edges[toNode] = toNode;
		}
	}

	removeEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			delete this.nodes[fromNode].edges[toNode];
		}
	}

	forEachNode(cb) {
		for (let node in this.nodes) {
			cb(node);
		}
	}

	areConnected(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			if (fromNode === toNode) {
				return true;
			}
			const visited = {};
			const toVisit = new Queue();
			toVisit.add(fromNode);
			while(!toVisit.isEmpty()) {
				let nextInQueue = toVisit.head.value;
				for (let edge in this.nodes[nextInQueue].edges) {
					if (edge.toString() === toNode.toString()) {
						return true;
					}
					if (!visited[edge] && !toVisit.contains(edge)) {
						toVisit.add(edge);
					}
				}
				visited[nextInQueue] = nextInQueue;
				toVisit.remove();
			}
		}
		return false;
	}

	// I: fromNodes (an array of strings), toNode (a node in the graph)
	// O: return true if toNode does not contain incoming edges from nodes other than those passed in as fromNodes
	// C: none
	// E: assume graph contains all passed in nodes
	incomingEdges(fromNodes, toNode) {
		// for each node in the graph
		for (let node in this.nodes) {
			// if curr node is not part of the fromNodes list
			if (fromNodes.indexOf(node) === -1) {
				// if curr node has an edge to toNode
				if (this.nodes[node].edges[toNode]) {
					return false;
				}
			}
		}
		return true;
	}
	// time complexity: O(n) - time grows with size of fromNodes argument and the number of nodes in the tree
	// space compelxity: O(1)
}

// I: a list of projects (in an array) and a list of dependencies (an array of tuples)
// O: a valid build order or an error if there is none
// C: none
// E: if no projects, return empty build order
const buildOrder = (projects, dependencies) => {
	// track build status of each project
	const toBuild = projects;
	const buildOrder = [];
	// create a directed graph - each project is a node and each dependency is an edge
	const projGraph = new DirectedGraph();
	projects.forEach(project => projGraph.addNode(project));
	dependencies.forEach(dependency => projGraph.addEdge(dependency[0], dependency[1]));
	let i = 0;
	// repeat until all projects that can be built are built
	while (i < toBuild.length) {
		// if the project can be built, add it to buildOrder and remove from toBuild
		if (projGraph.incomingEdges(buildOrder, toBuild[i])) {
			buildOrder.push(toBuild[i].toString());
			toBuild.splice(i, 1);
			// reset i to 0 because new projects might now be able to be built
			i = 0;
		}
		// increment i if project cannot currently be built
		i += 1;
	}
	// when the while loop is over no more projects can be built
	// if any projects did not get built, return an error
	if (toBuild.length) {
		return 'no valid build order';
	}
	// otherwise the build was successful, return the valid build order
	return buildOrder;
};
// time complexity: 
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
