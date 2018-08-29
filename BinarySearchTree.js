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
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(15)
console.log(tree.find(6))
