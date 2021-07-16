function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; array[j] < array[j - 1]; j--) {
            let smaller = array[j - 1];
            array[j - 1] = array[j];
            array[j] = smaller;
        }
    }
    return array;
}