/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * Checks if binary tree is symmetric
 * Traverse through the left and right sides of the BST via BFS at the same time and compare their left and right values.
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    const leftQueue = [root.left];
    const rightQueue = [root.right];

    while (leftQueue.length && rightQueue.length) {

        let currentLeft = leftQueue.shift();
        let currentRight = rightQueue.shift();

				// If 1 side does not have a node and the other mirrored side does, than they are not symmetric.
        if (
            (currentLeft && !currentRight) ||
            (currentRight && !currentLeft)
        ) return false;

				// If both sides do not have a node, skip this iteration b/c we cant compare their values and they dont have a left/right
        if (!currentLeft && !currentRight) continue;

        if (currentLeft.val !== currentRight.val) return false

        leftQueue.push(currentLeft.left);
        leftQueue.push(currentLeft.right);

        rightQueue.push(currentRight.right);
        rightQueue.push(currentRight.left);

    }

	return true;


};