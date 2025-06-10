class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class MaxPriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.queue.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.queue.length - 1;
        const newNode = this.queue[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if(this.queue[parentIdx].priority >= newNode.priority)
                break;

            // Swap the current node with its parent
            this.queue[idx] = this.queue[parentIdx];
            this.queue[parentIdx] = newNode;
            idx = parentIdx;
        }
    }

    dequeue() {
        if(!this.queue.length) return null;
        if(this.queue.length === 1) 
            return this.queue.pop();

        const maxNode = this.queue[0];

        // Move the last element to the root and bubble it down
        const lastNode = this.queue.pop();
        this.queue[0] = lastNode;
        this.bubbleDown();
        return maxNode;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.queue.length;
        const element = this.queue[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.queue[leftChildIdx]
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.queue[rightChildIdx];

                if(
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }
            if(swap === null)
                break;

            // Swap the element with larger child (swap)
            this.queue[idx] = this.queue[swap];
            this.queue[swap] = element;
            idx = swap;
        }
    }

    front() {
        if(!this.queue.length) return null;
        return this.queue[0];
    }

    last() {
        if(!this.queue.length) return null;
        return this.queue[this.queue.length - 1];
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

    peek() {
        return this.front();
    }

}

let maxPQ = new MaxPriorityQueue();
maxPQ.enqueue("Task 1", 1);
maxPQ.enqueue("Task 2", 3);
maxPQ.enqueue("Task 3", 2);
console.log(maxPQ.queue); 

console.log(maxPQ.dequeue()); // Will remove: Task 2 with priority 3
console.log(maxPQ.queue); 

console.log("QUEUE SIZE :: ", maxPQ.size()); // Output: 2

console.log("PEEK :: ", maxPQ.peek()); // Output: Node { value: 'Task 3', priority: 2 }

console.log("FRONT :: ", maxPQ.front()); // Output: Node { value: 'Task 3', priority: 2 }

console.log("LAST :: ", maxPQ.last()); // Output:  Node { value: 'Task 1', priority: 1 }

console.log("CLEARING QUEUE :: ", maxPQ.clear()); 

