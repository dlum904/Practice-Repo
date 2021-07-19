function selectionSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        let subArr = array.slice(i);
        let min = Math.min(...subArr);
        let minIdx = subArr.indexOf(min) + i;   // get the minimum index of the min val by adding the length of our subArr index to our i / bc it was sliced that way.
        let temp = array[i];
        array[i] = min;
        array[minIdx] = temp;
    }
    return array
}