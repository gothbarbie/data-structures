class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if (this.root && value === this.root.value) return false

    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          }
          current = current.left
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined

    let found = false
    let current = this.root

    while (!found && current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }

  breadthFirstSearch() {
    const data = []
    const queue = []
    let node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

  depthFirstSearchPreOrder() {
    const data = []

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  depthFirstSearchPostOrder() {
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  depthFirstSearchInOrder() {
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.depthFirstSearchInOrder())
