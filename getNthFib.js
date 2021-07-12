function getNthFib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    let result = [0, 1];

    while (result.length < n) {
        let lastIdx = result.length - 1;
        result.push(result[lastIdx - 1] + result[lastIdx]);
    }
    return result[result.length - 1];
}

function getNthFib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        // these will eventually evaluated to the base cases ( n === 1 / n === 2), which will add up to our Nth number.
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}