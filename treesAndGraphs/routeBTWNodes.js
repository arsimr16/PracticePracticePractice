// given a directed graph, design an algorithm to find out whether there is a route between two nodes
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

	contains(target) {
		return !!this.nodes[target];
	}

	hasEdge(fromNode, toNode) {
		if (this.contains(fromNode)) {
			return !!this.nodes[fromNode].edges[toNode];
		}
		return false;
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode) && this.contains(toNode)) {
			this.nodes[fromNode].edges[toNode] = true;
		}
	}

	removeNode(target) {
		delete this.nodes[target];
		for (let node in this.nodes) {
			delete this.nodes[node].edges[target];
		}
	}

	removeEdge(fromNode, toNode) {
		if (this.hasEdge(fromNode, toNode)) {
			delete this.nodes[fromNode].edges[toNode];
		}
	}

	forEachNode(cb) {
		for (let node in this.nodes) {
			cb(node);
		}
	}

	// I: two nodes in a directed graph
	// O: a boolean: whether there is a path between two nodes
	// C: none
	// E: either node is not in graph, both nodes are same
	areConnected(startNode, endNode) {
		if (!this.contains(startNode) || !this.contains(endNode)) {
			return false;
		}
		if (startNode === endNode) return true;
		const visited = {};
		const toVisit = new Queue();
		toVisit.add(startNode);
		while(!toVisit.isEmpty()) {
			let queueHead = toVisit.peek();
			for (let edge in this.nodes[queueHead].edges) {
				if (edge.toString() === endNode.toString()) return true;
				if (!visited[edge] && !toVisit.contains(edge)) {
					toVisit.add(edge);
				}
			}
			visited[queueHead] = true;
			toVisit.remove();
		}
		return false;
	}
};

/**************************************************************/

// tests:
const assertDeepEquals = (actual, expected, testname) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(`passed ${testname}`);
	} else {
		console.log(`FAILED ${testname}: expected "${expected}", but got "${actual}"`);
	}
}

// tests for directed graph
const graph0 = new DirectedGraph();
graph0.addNode(2);
assertDeepEquals(graph0.contains(2), true, 'contains should return true when value is in graph');
assertDeepEquals(graph0.contains(3), false, 'contains should return false when value is not in graph');

graph0.addNode(3);
graph0.addNode(4);
graph0.addEdge(2, 3);
graph0.addEdge(2, 4);
assertDeepEquals(graph0.hasEdge(3, 4), false, 'hasEdge should return false when no edge exists between nodes');
assertDeepEquals(graph0.hasEdge(2, 3), true, 'hasEdge should return true when edge exists between nodes');
assertDeepEquals(graph0.hasEdge(3, 2), false, 'addEdge should add a directed edge');

graph0.addNode(5);
const doubles = [];
graph0.forEachNode(x => doubles.push(x * 2));
assertDeepEquals(doubles, [4, 6, 8, 10], 'should invoke callback on each node in graph');

graph0.removeEdge(2, 3);
assertDeepEquals(graph0.hasEdge(2, 3), false, 'should remove edge between nodes');

graph0.removeNode(4);
assertDeepEquals(graph0.contains(4), false, 'should not contain removed node');
assertDeepEquals(graph0.hasEdge(2, 4), false, 'should remove edges to removed node');

const graph1 = new DirectedGraph();
graph1.addNode(1);
graph1.addNode(2);
graph1.addNode(3);
graph1.addNode(4);
graph1.addNode(5);
graph1.addNode(6);
graph1.addEdge(1, 2);
graph1.addEdge(1, 3);
graph1.addEdge(2, 3);
graph1.addEdge(2, 4);
graph1.addEdge(4, 6);
graph1.addEdge(5, 6);

assertDeepEquals(graph1.areConnected(1, 5), false, 'should return false when there is no path between nodes');
assertDeepEquals(graph1.areConnected(1, 2), true, 'should return true when there is an edge between nodes');
assertDeepEquals(graph1.areConnected(2, 1), false, 'should not find path when directed edges point the wrong way');
assertDeepEquals(graph1.areConnected(1, 4), true, 'should find path when separated by two edges');
assertDeepEquals(graph1.areConnected(1, 6), true, 'should find path when separated by multiple edges');
