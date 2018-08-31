// Find children: (index * 2) + 1 || (index * 2) + 2
// Find parent: (index - 1) / 2 (floored)

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if (parent >= element) break

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
        if (leftChild > element) {
          swapIndex = leftChildIndex
        }
      }

      // Check right side
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
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

  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
maxBinaryHeap.insert(55)
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
// console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap)
