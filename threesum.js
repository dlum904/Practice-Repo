// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.
// The number in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the number they hold.
// If no three numbers sum m up to the target sum, the function should return an empty array.

// array = [12, 3, 1, 2, -6, 5, -8, 6]
// targetSum = 0

// threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
// output = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
    // sort our array in ascending order
    array.sort((a, b) => a - b);
    const output = [];
    for (let i = 0; i < array.length - 2; i++) {
        // left is the idx directly after our current idx, and right is the last idx.
        // b/c we sorted our array, left will be the smallest value, and right is the highest value
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];
            // if our currentSum eq our targetSum, we push them into our output array and move on to the next possible combinations by decrimenting/incrimenting our left and right.
            if (currentSum === targetSum) {
                output.push([array[i], array[left], array[right]]);
                left++;
                right--;
            }
            // if our currentSum is less than the target, then we increase our left idx for a higher left idx
            else if (currentSum < targetSum) left++
            // if our currentSum is more than the target, then we decrement our right idx for a lower value
            else right--
        }
    }
    return output;
}