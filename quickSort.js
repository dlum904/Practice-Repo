// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    let left = arr.slice(1).filter((el) => el < pivot);
    let right = arr.slice(1).filter((el) => el >= pivot);
    
    left = quickSort(left);
    right = quickSort(right);

    return left.concat(pivot).concat(right);
}


console.log(quickSort([4, 2, 1, 3, 5]));
console.log(quickSort([4, 5]));