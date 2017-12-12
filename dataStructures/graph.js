// graph implementation using JS objects to store edges and vertices
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

	}

	breadthFirst() {

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
