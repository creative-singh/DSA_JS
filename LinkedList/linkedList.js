class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null  // if list empty, head points to null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  // Constant Time Complexity O(1)
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  // Linear Time Complexity O(n)
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("INVALID OPERATION")
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let curr = this.head
      let listValue = ''
      while (curr) {
        listValue += `${curr.value} `
        curr = curr.next
      }
      console.log(listValue)
    }
  }



}

const list = new LinkedList()
console.log("List is empty: ", list.isEmpty())
console.log("List size: ", list.getSize())
list.print()
list.prepend(30)
list.print()

list.prepend(20)
list.prepend(10)
list.print()
list.append(40)
list.print()
console.log("List size: ", list.getSize())
list.insert(25, 2)
list.print()
console.log("List size: ", list.getSize())
