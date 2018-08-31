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

const er = new PriorityQueue()
er.enqueue('common cold', 5)
er.enqueue('gunshot wound', 1)
er.enqueue('high fever', 4)
er.enqueue('broken arm', 2)
er.enqueue('glass in foot', 3)
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())
