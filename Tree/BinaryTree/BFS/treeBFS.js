function bfs(root) {
    if(!root) return null
    let queue = [];
    let result = []
    let node = root
    queue.push(root)

    while(queue.length) {
        node = queue.shift()

        result.push(node.val)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)

    }
    return result
}


// Example usage (for testing):
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const testBFS = bfs(root);
console.log("Return BFS Val: ", testBFS);
