# Doubly Linked List

A **Doubly Linked List (DLL)** is a special type of linked list in which each node contains references to both the next and the previous node in the sequence. This structure allows for efficient traversal in both forward and backward directions.

---

## Table of Contents

- [Introduction](#introduction)
- [Structure](#structure)
- [Operations](#operations)
- [Advantages](#advantages)
- [Disadvantages](#disadvantages)
- [Use Cases](#use-cases)
- [Implementation (JavaScript Example)](#implementation-javascript-example)

---

## Introduction

A Doubly Linked List consists of nodes where each node contains three parts:
- Data (the value stored in the node)
- Pointer to the next node (`next`)
- Pointer to the previous node (`prev`)

This makes navigation possible in both directions, unlike a singly linked list.

---

## Structure

```
NULL <- [prev | data | next] <-> [prev | data | next] <-> [prev | data | next] -> NULL
```

Each node:
- `prev`: references the previous node or `null` if it's the head
- `data`: stores the node's value
- `next`: references the next node or `null` if it's the tail

---

## Operations

### 1. Insertion
- **At the beginning (head)**
- **At the end (tail)**
- **At a given position**

### 2. Deletion
- **From the beginning (head)**
- **From the end (tail)**
- **By value or at a given position**

### 3. Traversal
- **Forward traversal** (using `next`)
- **Backward traversal** (using `prev`)

### 4. Search
- Find if a value exists in the list

---

## Advantages

- **Bidirectional Traversal:** Can traverse forwards and backwards easily.
- **Easy Deletion:** Deleting a node is easier as you have access to the previous node.
- **Flexibility:** More flexible than singly linked lists for certain operations.

---

## Disadvantages

- **Extra Memory:** Each node needs extra space for the `prev` pointer.
- **Complexity:** More complex to implement and handle edge cases (like insertion/deletion at head/tail).
- **Performance:** Slightly slower due to the need to update two pointers during insertion and deletion.

---

## Use Cases

- Navigating backward and forward (e.g., browser history, undo/redo functionality).
- Implementation of complex data structures (e.g., LRU cache).
- Any scenario where traversal in both directions is beneficial.

---

## Implementation (JavaScript Example)

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Insert at beginning
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Delete from end
  removeLast() {
    if (!this.tail) return null;
    const removed = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return removed.data;
  }

  // Delete from beginning
  removeFirst() {
    if (!this.head) return null;
    const removed = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return removed.data;
  }

  // Traverse forward
  printForward() {
    let curr = this.head;
    let result = [];
    while (curr) {
      result.push(curr.data);
      curr = curr.next;
    }
    console.log(result.join(" <-> "));
  }

  // Traverse backward
  printBackward() {
    let curr = this.tail;
    let result = [];
    while (curr) {
      result.push(curr.data);
      curr = curr.prev;
    }
    console.log(result.reverse().join(" <-> "));
  }
}
```

---
