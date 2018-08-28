class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    let removed = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }
    this.length--
    return removed
  }

  shift() {
    if (!this.head) return undefined

    let remove = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = remove.next
      this.head.prev = null
      remove.next = null
    }
    this.length--
    return remove
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined

    let current
    let count

    if (index <= this.length / 2) {
      console.log('From beginning')
      count = 0
      current = this.head

      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      console.log('From end')
      count = this.length - 1
      current = this.tail

      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, val) {
    const foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    const nextNode = prevNode.next

    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length) return this.pop()

    const remove = this.get(index)

    remove.prev.next = remove.next
    remove.next.prev = remove.prev
    remove.next = null
    remove.prev = null

    this.length--
    return remove
  }
}

const list = new DoublyLinkedList()
list.push('Harry')
list.push('Ron')
list.push('Hermione')
list.push('Hagrid')
list.insert(3, 'Baltazar')
console.log(list.remove(1), list)
