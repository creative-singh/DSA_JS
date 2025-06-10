class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(value);
    }

    bubbleUp(value) {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.heap[parentIdx] >= value) break;

            // Swap the current node with its parent
            this.heap[idx] = this.heap[parentIdx];
            this.heap[parentIdx] = value;
            idx = parentIdx;
        }
    }

    extractMax() {
        if(!this.heap.length) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];

        // Move the last element to the root and bubble it down
        const last = this.heap.pop();
        this.heap[0] = last;
        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx]
                if(leftChild > element) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx]
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }
            if(swap === null) break;

            // Swap the element with the larger child (swap)
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

let maxHeap = new MaxHeap();
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(39);
maxHeap.insert(41);
console.log(maxHeap.heap); // Output: [ 41, 33, 39, 12, 18, 27 ]
maxHeap.insert(55);
console.log(maxHeap.heap); // Output: [55, 33, 41, 12, 18, 29, 39]
maxHeap.insert(60); // Output: [60, 55, 41, 33, 18, 27, 39, 12]
console.log(maxHeap.heap);
maxHeap.insert(36); // Output: [60, 55, 41, 36, 18, 27, 39, 12, 33]
console.log(maxHeap.heap);

console.log("REMOVED VAL :: ", maxHeap.extractMax()); // Output: 60
console.log("AFTER DELETION :: ", maxHeap.heap); // Output: [55, 36, 41, 33, 18, 27, 39, 12]

console.log("REMOVED VAL :: ", maxHeap.extractMax()); // Output: 55
console.log("AFTER DELETION :: ", maxHeap.heap); // Output: [41, 36, 39, 33, 18, 27, 12]

console.log("HEAP SIZE :: ", maxHeap.size()); // Output: 7  

console.log("PEEK :: ", maxHeap.peek()); // Output: 41

console.log("IS EMPTY :: ", maxHeap.isEmpty()); // Output: false    

console.log("CLEARING HEAP :: ", maxHeap.clear()); 

console.log("IS EMPTY :: ", maxHeap.isEmpty()); // Output: true    