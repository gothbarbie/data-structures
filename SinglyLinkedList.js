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
    console.log(current)
    return current
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
      console.log(current.val)
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
// list.push('hello')
// list.push('you!')
// list.traverse()
// list.pop()
// list.pop()
// list.shift()
// list.shift()
list.unshift('argh!')
list.get(0)
// console.log(list)
// console.log(list)

// console.log(list)
