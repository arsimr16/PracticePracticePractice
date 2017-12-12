// given a directed graph, design an algorithm to find out whether there is a route between two nodes
class Queue() {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	makeNode(value) {
		return { value, prev: null, next: null };
	}

	add(value) {
		const newNode = this.makeNode(value);
		if (!this.head) {
			this.head = newNode;
		}
		if (this.tail) {
			newNode.prev = this.tail;
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.size += 1;
	}

	remove(value) {
		if (!this.isEmpty) {
			const removed = this.head;
			this.head = this.head.next;
			this.head.prev = null;
			this.size -= 1;
			return removed;
		}
	}

	contains(value) {
		let curr = this.head;
		while(curr) {
			if (curr.value === value) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}

	isEmpty() {
		return this.size === 0;
	}
}


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
				if (node.edges[value]) {
					delete node.edges[value];
				}
			}
		}
	}

	hasEdge(fromNode, toNode) {
		return !!this.nodes[fromNode].edges[toNode];
	}

	addEdge(fromNode, toNode) {
		if (this.contains(fromNode)) {
			this.nodes[fromNode].edges[toNode] = toNode;
		}
	}

	removeEdge(fromNode, toNode) {
		if (this.contains(fromNode)) {
			delete this.nodes[fromNode].edges[toNode];
		}
	}

	forEachNode(cb) {
		for (let node in this.nodes) {
			cb(node);
		}
	}

	// I: start node, end node
	// O: a boolean
	// C: none (the graph is directed so we must traverse from start to end)
	// E: either node does not exist; both nodes are the same;
	areConnected(fromNode, toNode) {
		// check that both nodes exist
		if (this.contains(fromNode) && this.contains(toNode)) {
			// quick check whether nodes are the same
			if (this.fromNode === this.toNode) {
				return true;
			}
			const visited = {};
			const toVisit = new Queue();
			toVisit.add(fromNode);
			while(!toVisit.isEmpty) {
				let nextInQueue = toVisit.head;
				for (let edge in this.nodes[nextInQueue].edges) {
					if (edge === toNode) {
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
	// time complexity: O(n)
	// space complexity: O(n)
}

// tests:
