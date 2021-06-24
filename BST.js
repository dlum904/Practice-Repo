// BINARY SEARCH TREE

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    };

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;

        let newNode = new Node(value);

            // search the BST if the node has a value, and if it doesnt, creates it
            const searchTree = (node) => {
                // if value < node.value, go left
                if (value < node.value) {
                    // if node.left does not exist, create it
                    if (!node.left) node.left = newNode;
                    // if left child exist, check for next node
                    else searchTree(node.left);
                }
                // if value > node.value, go right
                else if (value > node.value) {
                    // if node.right does not exist, create it
                    if (!node.right) node.right = newNode;
                    // if right child exist, check for next node
                    else searchTree(node.right);
                }
            }
        searchTree(this.root);
    }

    min() {
        // we start at the root node
        let currentNode = this.root;
        // while the current node is not null, we keep setting it to it's left child node.
        while (currentNode.left) currentNode = currentNode.left;
        return currentNode.value;
    }

    max() {
        // we start at the root node
        let currentNode = this.root;
        // while the current node is not null, we keep setting it to it's right child node.
        while (currentNode.right) currentNode = currentNode.right;
        return currentNode.value;
    }

    contains(value) {
        let currentNode = this.root;
        // while the current node is not null
        while (currentNode) {
            // if the value is eq to the current node's value return it
            if (value === currentNode.value) return true;
            // if the value is less than the currentNode's value go left
            else if (value < currentNode.value) currentNode = currentNode.left;
            // if the value is greater than the currentNode's value, go right
            else currentNode = currentNode.right;
        }
        return false;
    }


    // pre-order
    // root, left, right
    dfsPreOrder() {
        let result = [];

        const traverse = (node) => {
            // push value into result
            result.push(node.value);
            // if there's a left child node, go left
            if (node.left) traverse(node.left);
            // if there's a right child node, go right
            if (node.right) traverse(node.right);
        }

        traverse(this.root)
        
        return result;
    }

    // post-order
    // left, right, root
    dfsPostOrder() {
        let result = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }

        traverse(this.root)
        
        return result;
    }

    bfs() {
        let result = [];
        let queue = [];

        queue.push(this.root);

        // while there's a queue. FIFO
        while (queue.length) {
            // set current node to eq first in queue
            let currentNode = queue.shift();
            result.push(currentNode.value);
            // if there's a left child node, add it to the queue
            if (currentNode.left) queue.push(currentNode.left);
            // if there's a right child node, add it to the queue
            if (currentNode.right) queue.push(currentNode.right);
        }

        return result;
    }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);
// console.log(bst.min());

console.log(`maximum value is: ${bst.min()}`);
console.log(`minimum value is: ${bst.max()}`);

console.log(`contains 1?: ${bst.contains(1)}`);
console.log(`contains 39?: ${bst.contains(39)}`);

console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.bfs());