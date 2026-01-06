function bfs(root) {
    if (!root) return [];

    let queue = [];
    let result = [];

    queue.push(root);

    while (queue.length) {
        let size = queue.length;   // number of nodes in current level
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level); // store one complete level
    }

    return result;
}

// TreeNode definition
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Example usage
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const levels = bfs(root);
console.log("Level Order BFS:", levels);
