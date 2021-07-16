function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let largerVal = array[i + 1]
                array[i + 1] = array[i];
                array[i] = largerVal;
                sorted = false;
            }
        }
    }
    return array;
}