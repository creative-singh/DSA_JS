class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear] = val
    this.rear++
  }

  dequeue() {
    const item = this.queue[this.front]
    delete this.queue[this.front]
    this.front++
    return item
  }

  isEmpty() {
    return this.front - this.rear === 0
  }

  peek() {
    return this.queue[this.front]
  }

  print() {
    console.log(Object.values(this.queue))
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
// queue.dequeue()
// queue.dequeue()
queue.print()
console.log(queue.isEmpty())
console.log(queue.peek())