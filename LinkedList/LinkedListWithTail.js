class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty() {
        return !this.size
    }
    
    getSize() {
        return this.size
    }
    
    print() {
        if(this.isEmpty()){
            return "List is Empty"
        }
        let prev = this.head;
        let returnedValue = ""
        while(prev){
            returnedValue += `${prev.value} `
            prev = prev.next
        
        }
        return returnedValue
    }
    
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }else {
            this.tail.next = node
            this.tail = node
        }
        
        this.size++
    }
    
    removeFromFront() {
        if(this.isEmpty()) {
            return "List is empty"
        }
        let deletedValue = this.head.value
        this.head = this.head.next
        
        this.size--
        return deletedValue
    }
    
    removeFromEnd() {
        if(this.isEmpty()) {
            return "List is Empty"
        }
        let deletedValue = this.tail.value
        if(this.size === 1) {
            this.head = null
            this.tail = null
        }else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        
        this.size--
        return deletedValue
    }
}

const list = new LinkedList();
console.log(list.isEmpty()) 
console.log(list.getSize())
console.log(list.print())
list.prepend(10)
list.prepend(20)
console.log(list.print())
list.append(30)
console.log(list.print())
console.log(list.isEmpty()) 
console.log(list.getSize())
console.log(list.removeFromFront())
console.log(list.print())
console.log(list.getSize())
console.log(list.removeFromEnd())
console.log(list.print())
console.log(list.getSize())
console.log(list.removeFromEnd())
console.log(list.print())
console.log(list.getSize())

