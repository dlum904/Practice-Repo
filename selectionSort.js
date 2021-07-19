function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let subArr = array.slice(i);
        let min = Math.min(...subArr);
        let minIdx = subArr.indexOf(min) + i;
        let temp = array[i];
        if (array[i] !== min) {
            array[i] = min;
            array[minIdx] = temp;
        }
    }
    return array
}