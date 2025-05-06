class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) { // Insert at Left
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {                         // Insert at Right
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } 
        if(root.value === value) {
            return root;        // Just to get the root
            return true;
        }
        if(value < root.value) {  // Check Left Subtrees
            return this.search(root.left, value);
        } else {                            // Check Right Subtrees
            return this.search(root.right, value);
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        // Use the optimized queue implementation
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) { 
        if(!root.left) {
            return root.value
        }
        else {
           return this.min(root.left)
        } 
    }

    max(root) {
        if(!root.right) return root.value
        else return this.max(root.right)
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty())

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);

console.log(bst.search(bst.root, 3))
console.log(bst.search(bst.root, 30))
console.log(bst.search(bst.root, 5))

console.log("- - BFS - -")
console.log("- - PRE-ORDER - -");
bst.preOrder(bst.root)
console.log("- - PRE-ORDER END - -");

console.log("- - IN-ORDER - -");
bst.inOrder(bst.root);
console.log("- - IN-ORDER END - -");

console.log("- - POST-ORDER - -");
bst.postOrder(bst.root);
console.log("- - POST-ORDER END - -");
console.log("- - BFS END - -")

console.log("- - DFS - -")
bst.levelOrder(bst.root);
console.log("- - DFS END - -")

console.log("MIN :: ", bst.min(bst.root));
console.log("MAX :: ", bst.max(bst.root));


