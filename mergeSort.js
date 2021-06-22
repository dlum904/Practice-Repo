// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.


function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = arr.length / 2;

    let sortedLeft = mergeSort(arr.slice(0, mid));
    let sortedRight = mergeSort(arr.slice(mid));

    return merge(sortedLeft, sortedRight);
};

function merge(left, right) {
    const merged = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) merged.push(left.shift());
        else merged.push(right.shift());
    }

    return merged.concat(left, right);
};


console.log(mergeSort([4, 2, 1, 3, 5, 2]));
console.log(mergeSort([5, 4]));
console.log(mergeSort([4, 5]));