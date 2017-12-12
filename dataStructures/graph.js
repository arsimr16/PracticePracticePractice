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

	remove() {
		if (!this.isEmpty) {
			const removed = this.head;
			this.size -= 1;
			this.head = this.head.next;
			this.head.prev = null;
			return removed;
		}
	}

	contains(target) {
		let curr = this.head;
		while (curr) {
			if (curr.value === target) {
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
		//TODO
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
