class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined

    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    const newNode = new Node(value)
    const previous = this.get(index - 1)
    const temp = previous.next
    previous.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const previous = this.get(index - 1)
    const removed = previous.next
    previous.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let previous = null
    let next = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = previous
      previous = node
      node = next
    }

    return this
  }

  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  shift() {
    if (!this.head) return undefined

    let removeHead = this.head
    this.head = removeHead.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return removeHead
  }

  traverse() {
    let current = this.head
    while (current) {
      current = current.next
    }
  }

  unshift(val) {
    let newHead = new Node(val)

    if (!this.head) {
      this.head = newHead
      this.tail = newHead
    } else {
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }
}

const list = new SinglyLinkedList()
list.unshift('argh!')
list.set(1, 'arguh?')
list.insert(1, 'araghah!')
list.push('bhruugh!')
console.log(list)
list.reverse()
console.log(list)
