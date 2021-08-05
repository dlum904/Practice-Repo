function isMonotonic(array) {
    // Write your code here.
    let ascMono = true;
    let descMono = true;

    let i = 1;
    while (i < array.length) {
        if (array[i - 1] > array[i]) ascMono = false;
        if (array[i - 1] < array[i]) descMono = false;
        i++;
    }

    return ascMono || descMono;
}