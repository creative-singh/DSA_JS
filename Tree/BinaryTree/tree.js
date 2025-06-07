function inorder(root) {
    if(!root) return null
    
    let arr = []
    
    function helper(root) {
        if(!root) return null
        
        helper(root.left)
        arr.push(root.val)
        helper(root.right)
    }
    
    helper(root)
    return arr
}

function preorder(root) {
    if(!root) return null
    
    let arr = []
    
    function helper(root) {
        if(!root) return null
        
        arr.push(root.val)
        helper(root.left)
        helper(root.right)
    }
    
    helper(root)
    return arr
}

function postorder(root) {
    if(!root) return null
    
    let arr = []
    
    function helper(root) {
        if(!root) return null
        
        helper(root.left)
        helper(root.right)
        arr.push(root.val)
    }
    
    helper(root)
    return arr
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

const testInorder = inorder(root);
console.log("Return In-Order Val:", testInorder);

const testPreorder = preorder(root);
console.log("Return Pre-Order Val:", testPreorder);


const testPostorder = postorder(root);
console.log("Return Post-Order Val:", testPostorder);
