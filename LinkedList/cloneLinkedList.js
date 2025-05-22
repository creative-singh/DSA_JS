class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  
  isEmpty() {
    return !this.size
  }
  
  add(val) {
    let node = new Node(val)
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let ptr = this.head;
      while (ptr.next) {
        ptr = ptr.next;
      }
      ptr.next = node;
    }

    this.size++;
    
  }
  
  print(head = this.head) {
    console.log(head)
    let arr = []
    let ptr = head
    while(ptr){
      arr.push(ptr.value)
      ptr = ptr.next
    }
    return arr
  }
  
  getCloneList() {
    let ptr = this.head
    let dummy = new Node(-1, null)
    let dummyTail = dummy
    while(ptr) {
      
      dummyTail.next = new Node(ptr.value, null)
      dummyTail = dummyTail.next
      
      ptr = ptr.next
    }
    return this.print(dummy)
  }
  
}


let list = new LinkedList()
list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
console.log(list.print())
console.log(list.getCloneList())

