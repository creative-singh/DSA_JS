class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }

  // Adding an element to the start of the List
  // Constant Time Complexity O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Adds a new node at end of the List
  // Linear Time Complexity O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  // Insert the element at given index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log('Wrong Index Supplied!');
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      console.log('Wront Index Supplied to Remove!');
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  // Linear Time Complexity O(n)
  removeValue(value) {
    if (this.isEmpty()) return 'List is empty';
    let removedValue;
    if (this.head.value === value) {
      removedValue = this.head.value;
      this.head = this.head.next;
    } else {
      let prev = this.head.next
      // while(prev) {
      //   if(prev.value === value) {
      //     removedValue = prev.value
      //   }
      //   prev = prev.next 

      // }
      while(prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if(prev.next) {
        removedValue = prev.next
        prev.next = removedValue.next
      }
    }

    this.size--;
    return removedValue || "Element not found";
  }

  print() {
    if (this.isEmpty()) {
      console.log('The list is empty.');
    } else {
      let current = this.head;
      let listValues = '';
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log('Is List Empty ? ', list.isEmpty());
console.log('Total Size of List: ', list.getSize());
list.print();
list.append(10);
list.print();
list.append(20);
// list.append(30);
console.log('Total Size of List: ', list.getSize());
list.print();
list.append(40);
list.print();
list.insert(30, 2);
list.print();
console.log(list.remove(0));
list.print();
list.insert(10, 0);
list.print();
console.log(list.remove(2));
list.print();
list.insert(30, 2);
list.print();
console.log(list.removeValue(10));
list.print();
console.log(list.removeValue(20));
list.print();
