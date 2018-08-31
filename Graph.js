class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2)
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1)
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return false

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )

    if (!this.adjacencyList[vertex2]) return false

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

const graph = new Graph()

graph.addVertex('Dallas')
graph.addVertex('Tokyo')
graph.addVertex('Aspen')

graph.addEdge('Dallas', 'Aspen')
graph.addEdge('Dallas', 'Tokyo')

// graph.removeVertex('Aspen')

console.log(graph)
