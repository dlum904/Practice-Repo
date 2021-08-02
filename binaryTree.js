class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
};

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    traverseBFS() {
        let queue = [this.root];
        let result = [];

        while (queue.length) {
            let current = queue.shift();
            result.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }

    traverseDFS() {
        let stack = [this.root];
        let result = [];

        while (stack.length) {
            let current = stack.pop();
            result.push(current);
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
        return result;
    }

    traverseRecurseDFS(tree, result = []) {
        result.push(tree.value);
        if (tree.left) traverseRecurseDFS(tree.left, array);
        else this.traverseRecurseDFS(tree.right, array);
        
        return result
    }
}

