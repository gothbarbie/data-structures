class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

// Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if (parent.priority <= element.priority) break

      // Swap values
      this.values[parentIndex] = element
      this.values[index] = parent
      // Update index
      index = parentIndex
    }
  }

  sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let swapIndex = null
      let leftChild, rightChild

      // Check left side first
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex
        }
      }

      // Check right side
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex
        }
      }

      // Nothing to swap, break
      if (swapIndex === null) break

      this.values[index] = this.values[swapIndex]
      this.values[swapIndex] = element
      index = swapIndex
    }
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []

    let smallest

    // Initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    // Prioritize
    while (nodes.values.length) {
      smallest = nodes.dequeue().value
      // console.log('smallest', smallest)

      if (smallest === finish) {
        // Done!
        // console.log('distances', distances)
        // console.log('previous', previous)
        while (previous[smallest]) {
          // We build the path-array backwards, pushing to the end
          path.push(smallest)
          smallest = previous[smallest]
        }
        // Break out when there are no more "smallest"
        break
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor]

          // calculate distance to node
          const sum = distances[smallest] + nextNode.weight
          const nextNeighbor = nextNode.node

          if (sum < distances[nextNeighbor]) {
            // Update new smallest distance to neighbor
            distances[nextNeighbor] = sum

            // Update previous, how we got to neighbor
            previous[nextNeighbor] = smallest

            // Enqueue in PriorityQueue with new priority
            nodes.enqueue(nextNeighbor, sum)
          }
        }
      }
    }
    // Return result in proper order
    return path.concat(smallest).reverse()
  }
}

const graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.shortestPath('A', 'E'))
