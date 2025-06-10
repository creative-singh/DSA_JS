class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(value);
    }

    bubbleUp(value) {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= value) break;

            // Swap the current node with its parent
            this.heap[idx] = this.heap[parentIdx]
            this.heap[parentIdx] = value
            idx = parentIdx;
        }
    }

    extractMin() {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];

        // Move the last element to the root and bubble it down
        const last = this.heap.pop();
        this.heap[0] = last;
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            
            // Swap the element with the smaller child
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    peek() {
        return this.heap[0] || null;
    }

    isEmpty() {
        return !this.heap.length;
    }

    size() {
        return this.heap.length;
    }

    clear() {
        this.heap = [];
    }
}

let minHeap = new MinHeap();
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12);
minHeap.insert(39);
minHeap.insert(41);
console.log(minHeap.heap); // Output: [12, 18, 27, 33, 39, 41]

minHeap.insert(55);
console.log(minHeap.heap); // Output: [12, 18, 27, 33, 39, 41, 55]

minHeap.insert(15);
console.log(minHeap.heap); // Output: [12, 15, 27, 18, 39, 41, 55, 33]

minHeap.insert(2);
console.log(minHeap.heap); // Output: [2, 12, 27, 15, 39, 41, 55, 33, 18]

console.log("REMOVED VAL :: ", minHeap.extractMin()); // Output: 2
console.log(minHeap.heap); // Output: [12, 15, 27, 18, 39, 41, 55, 33]


console.log("HEAP SIZE :: ", minHeap.size()); // Output: 8  

console.log("PEEK :: ", minHeap.peek()); // Output: 12

console.log("IS EMPTY :: ", minHeap.isEmpty()); // Output: false    

console.log("CLEARING HEAP :: ", minHeap.clear()); 

console.log("IS EMPTY :: ", minHeap.isEmpty()); // Output: true    

