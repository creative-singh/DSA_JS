class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elem) {
    this.items.push(elem);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items?.[0]
  }

  isEmpty() {
    return !this.items.length
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty())

console.log(queue.size())
console.log(queue.peek())

console.log(queue.dequeue())

queue.print()
