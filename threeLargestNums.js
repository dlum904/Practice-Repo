// Find the 3 largest integers in an array without using sort.

function findThreeLargestNumbers(array) {
    const largestInts = [null, null, null];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= largestInts[2] || largestInts[2] === null) {
            largestInts[0] = largestInts[1];
            largestInts[1] = largestInts[2];
            largestInts[2] = array[i];
        } else if (array[i] >= largestInts[1] || largestInts[1] === null) {
            largestInts[0] = largestInts[1];
            largestInts[1] = array[i];
        } else if (array[i] >= largestInts[0] || largestInts[0] === null) {
            largestInts[0] = array[i];
        }
    }
    return largestInts;
}