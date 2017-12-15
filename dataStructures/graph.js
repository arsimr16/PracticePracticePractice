// graph implementation using JS objects to store edges and vertices
class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	makeNode(value) {
		return { value, prev: null, next: null };
	}

	// add item to end of queue
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

	// remove item from front of queue
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

	// return item at front of queue
	peek() {
		return this.head ? this.head.value : null;
	}

	// return true if queue is empty
	isEmpty() {
		return this.size === 0;
	}
}

class Graph {
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
			for (let targetNode in this.nodes[value].edges) {
				this.removeEdge(value, targetNode);
			}
			delete this.nodes[value];
		}
	}

	hasEdge(fromNode, toNode) {
		if (!this.contains(fromNode)) {
			return false;
		}
		return !!this.nodes[fromNode].edges[toNode];
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			this.nodes[fromNode].edges[toNode] = toNode;
			this.nodes[toNode].edges[fromNode] = fromNode;
		}
	}

	removeEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			delete this.nodes[fromNode].edges[toNode];
			delete this.nodes[toNode].edges[fromNode];
		}
	}

	forEachNode(cb) {
		for (var node in this.nodes) {
			cb(node);
		}
	}

	depthFirst() {
		// TODO
	}

	breadthFirst(node, cb) {
		if (this.contains(node)) {
			const visited = {};
			const toVisit = new Queue();
			toVisit.add(node);
			while(!toVisit.isEmpty) {
				let nextInQueue = toVisit.head;
				// add direct neighbors that are not in queue or visited
				this.nodes[node].edges.forEach(edge => {
					if (!visited[edge] && !toVisit.contains(edge)) {
						toVisit.add(edge);
					}
				})
				// invoke callback on node
				cb(nextInQueue);
				// add node at front of queue to visited
				visited[nextInQueue] = nextInQueue;
				// remove node from queue
				toVisit.remove();
			}
		}
	}
}

// graph implementation using adjacency matrix
class GraphAM {
	constructor() {
		this.nodes = [];
	}

	addNode(value)  {
		this.nodes[value] = this.nodes[value] || [];
	}

	contains(value) {
		return !!this.nodes[value];
	}

	removeNode(value) {
		if (this.contains(value)) {
			for (let i in this.nodes[value]) {
				this.removeEdge(node, i);
			}
			this.nodes[value] = undefined;
		}
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contians(toNode)) {
			this.nodes[fromNode][toNode] = true;
			this.nodes[toNode][fromNode] = true;
		}
	}

	removeEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			this.nodes[fromNode][toNode] = undefined;
			this.nodes[toNode][fromNode] = undefined;
		}
	}

	hasEdge(fromNode, toNode) {
		if (!this.contains(fromNode)) {
			return false;
		}
		return !!this.nodes[fromNode][toNode];
	}

	forEachNode(cb) {
		for (let node in this.nodes) {
			cb(node);
		}
	}
}

// tests
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
};

// Graph
console.log('TESTS FOR Graph');
const graph0 = new Graph();
graph0.addNode(1);
assertDeepEquals(graph0.contains(1), true, 'contains should return true when graph contains target value');
assertDeepEquals(graph0.contains(2), false, 'contains should return false when graph does not contain target');

graph0.addNode(2);
graph0.addNode(3);
graph0.addEdge(1, 2);
assertDeepEquals(graph0.hasEdge(1, 2), true, 'hasEdge should return true when edge exists between two inputs');
assertDeepEquals(graph0.hasEdge(2, 1), true, 'addEdge should add an undirected connection between nodes');

const graphValues = [];
graph0.forEachNode(x => graphValues.push(x * 2));
assertDeepEquals(graphValues, [2, 4, 6], 'forEachNode should invoke passed in callback on each node');

graph0.removeNode(2);
assertDeepEquals(graph0.contains(2), false, 'contains should return false after node has been removed');
assertDeepEquals(graph0.hasEdge(1, 2), false, 'should remove edge if one of nodes was removed');

graph0.addEdge(1, 3);
graph0.addNode(4);
graph0.removeEdge(3, 1);
assertDeepEquals(graph0.hasEdge(1, 3), false, 'removeEdge should remove edge between input nodes');

const breadthFirstValues = [];
breadthFirstValues.push(graph0.breadthFirst(1, x => breadthFirstValues.push(x)));
console.log(breadthFirstValues);

// GraphAM
console.log('');
console.log('TESTS FOR GraphAM');
