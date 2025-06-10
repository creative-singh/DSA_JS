# Heap Data Structure 

Heaps are an efficient and versatile data structure for managing ordered data in various applications.

A **Heap** is a specialized tree-based data structure that satisfies the **heap property**:
- In a **Max-Heap**, for any given node `i`, the value of `i` is greater than or equal to its children.
- In a **Min-Heap**, for any given node `i`, the value of `i` is less than or equal to its children.

## Key Characteristics
1. **Complete Binary Tree**: A heap is always a complete binary tree, meaning all levels are fully filled except possibly the last, which is filled from left to right.
2. **Heap Property**: The parent node must satisfy the heap property relative to its children.

## Types of Heaps
1. **Max-Heap**: The root node contains the maximum value.
2. **Min-Heap**: The root node contains the minimum value.

## Common Operations
1. **Insert**: Add a new element to the heap while maintaining the heap property.
2. **Delete (Extract)**: Remove the root element and reheapify to maintain the heap property.
3. **Peek**: Retrieve the root element without removing it.

### Min-Heap Example
To implement a Min-Heap, simply reverse the comparison operators in the `bubbleUp` and `bubbleDown` methods.

## Applications of Heaps
1. **Priority Queues**: Heaps are commonly used to implement priority queues.
2. **Heap Sort**: A sorting algorithm that uses a heap to sort elements.
3. **Graph Algorithms**: Used in algorithms like Dijkstra's and Prim's.

## Complexity
- **Insert**: O(log n)
- **Delete (Extract)**: O(log n)
- **Peek**: O(1)