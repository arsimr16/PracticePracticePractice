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
			for (targetNode in this.nodes[value].edges) {
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
		if (!this.contains(fromNode) || !this.contains(toNode)) {
			return;
		}
		this.nodes[fromNode].edges[toNode] = toNode;
		this.nodes[toNode].edges[fromNode] = fromNode;
	}

	removeEdge(fromNode, toNode) {
		if (!this.contains(fromNode) || this.contains(toNode)) {
			return;
		}
		delete this.nodes[fromNode].edges[toNode];
		delete this.nodes[toNode].edges[fromNode];
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

}