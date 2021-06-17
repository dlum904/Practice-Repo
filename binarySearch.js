// // Binary Search searches through a SORTED array for the target value and returns its index.
// // If the target is not found, it returns -1.

// // Start by looking at the middle item of the array. If it matches the target,
// // return its index. Otherwise, recursively search either the left or the right
// // half of the array until the target is found or the base case (empty array) is
// // reached.

function binarySearch(arr, target) {
    if (arr.length === 0) return -1;

    const midpoint = Math.floor(arr.length / 2);
    if (target < arr[midpoint]) {
        return binarySearch(arr.slice(0, midpoint), target);
    } else if (arr[midpoint] < target) {
        const subResult = binarySearch(arr.slice(midpoint + 1), target);
        return subResult === -1 ? -1 : subResult + midpoint + 1;
    } else {
        return midpoint;
    }
}

// function binarySearch(arr, target) {
//     // if the array length is 0, then the target is not there
//     if (arr.length === 0) return -1;

//     // establish the midpoint with Math.floor(); need whole numbers no floats
//     const midpoint = Math.floor(arr.length / 2);
//     // if the the target is less than the midpoint
//     if (target < arr[midpoint]) {
//         // call binarySearch on that side of the array
//         return binarySearch(arr.slice(0, midpoint), target);
//     // if the target is greater than the midpoint
//     } else if (arr[midpoint] < target) {
//         // call binarySearch on that side the array
//         const subResult = binarySearch(arr.slice(midpoint + 1), target);
//         // if the target is found, we need to combine the previous index value
//         // with the result of the binarySearch in order to get the actual index value
//         return subResult === -1 ? -1 : subResult + midpoint + 1;
//     } else {
//         // only other scenario left is if the target is eq to the midpoint
//         return midpoint;
//     }
// }

// [0,1,2,3,4,5] target = 3
// [0,1,2] 3 [4,5]
