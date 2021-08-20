function longestPeak(array) {
    // Write your code here.
    let longest = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - 1; j > i; j--) {
            let subArr = array.slice(i, j + 1);
            if (isPeak(subArr) && subArr.length > longest) {
                longest = subArr.length;
            }
        }
    }
    return longest;
}

function isPeak(array) {
    if (array.length < 3) return false;
    // console.log(array)
    let tip = false;
    for (let i = 1; i < array.length; i++) {
        let prevEl = array[i - 1];
        let curEl = array[i];
        if (prevEl === curEl) return false;
        if (i > 1 && (!tip && prevEl > curEl)) tip = true;
        else if (tip && prevEl < curEl) return false;
        if (!tip && prevEl > curEl) return false;
    }
    if (tip) return true;
}