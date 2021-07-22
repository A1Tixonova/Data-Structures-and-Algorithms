function DirectedGraph() {
    this.edges = {}
}

DirectedGraph.prototype.addVertex = function(vertex) {
    this.edges[vertex] = {}
}

DirectedGraph.prototype.addEdge = function(origVertex, destVertex, weight) {
    if (weight === undefined) {
        weight = 0
    }
    this.edges[origVertex][destVertex] = weight
}

DirectedGraph.prototype.removeEdge = function(origVertex, destVertex) {
    if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
        delete this.edges[origVertex][destVertex]
    }
}

DirectedGraph.prototype.removeVertex = function(vertex) {
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex)
    }
    delete this.edges[vertex]
}

DirectedGraph.prototype.traverseBFS = function(vertex, fn) {
    var queue = [],
        visited = {}
    
    queue.push(vertex)

    while (queue.length) {
        vertex = queue.shift()
        if (!visited[vertex]) {
            visited[vertex] = true
            fn(vertex)
            for (var adjacentVertex in this.edges[vertex]) {
                queue.push(adjacentVertex)
            }
        }
    }
    // Time complexity: O(V + E)
}

DirectedGraph.prototype.traverseDFS = function(vertex, fn) {
    var visited = {}
    this._traverseDFS(vertex, visited, fn)
}

DirectedGraph.prototype._traverseDFS = function(vertex, visited, fn) {
    visited[vertex] = true
    fn(vertex)
    for (var adjacentVertex in this.edges[vertex]) {
        if (!visited[adjacentVertex]) {
            this._traverseDFS(adjacentVertex, visited, fn)
        }
    }
    // Time complexity: O(V + E)
}

function _isEmpty(obj) {
    return Object.keys(obj).length === 0
}

function _extractMin(Q, dist) {
    var minimumDistance = Infinity,
        nodeWithMinimumDistance = null
    for (var node in Q) {
        minimumDistance = dist[node]
        nodeWithMinimumDistance = node
    }
    return nodeWithMinimumDistance
}

DirectedGraph.prototype.Dijkstra = function(source) {
    // create vertex set Q
    var Q = {}, dist = {}
    for (var vertex in this.edges) {
        // unknown distances set to Infinity
        dist[vertex] = Infinity
        // add v to Q
        Q[vertex] = this.edges[vertex]
    }
    // Distance from source to source init to 0
    dist[source] = 0

    while (!_isEmpty(Q)) {
        var u = _extractMin(Q, dist) // get the min dist

        // remove u from Q
        delete Q[u]

        // for each neighbor, v, of u
        // where v is still in Q
        for (var neighbor in this.edges[u]) {
            // current distance
            var alt = dist[u] + this.edges[u][neighbor]
            // a shorter path has been found
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt
            }
        }
    }
    return dist
    // Time complexity: O(V^2 + E)
}

var d = new DirectedGraph()
d.addVertex("A")
d.addVertex("B")
d.addVertex("C")
d.addVertex("D")
d.addEdge("A", "B", 1)
d.addEdge("B", "C", 1)
d.addEdge("C", "A", 1)
d.addEdge("A", "D", 1)
console.log(d)

DirectedGraph.prototype.topologicalSortUtil = function(v, visited, stack) {
    visited.add(v)

    for (var item in this.edges[v]) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    stack.unshift(v)
}

DirectedGraph.prototype.topologicalSort = function() {
    var visited = {},
        stack = []
    
    for (var item in this.edges) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    return stack
    //  Time complexitiy: O(V + E)
    //  Space complexitiy: O(V)
}