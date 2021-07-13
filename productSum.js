// Write a function that takes in a "spcial" array and returns its product sum.

// A "Special" array is a non-empty array that contains either integers or other "spcial" arrays.  The product sum of a "special" array is the sum of its elements, where "special" array inside it are summed themselves and then multiplied by their depth.

// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// output = 5 + 2 + (2 * (7 - 1)) + 3 + (2 * (6 + (3 * (-13 +8)) + 4))

// 2 * (7 - 1) because that array is at a depth of 2.

function productSum(array, level = 1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += productSum(array[i], level + 1);
        } else {
            sum += array[i];
        }
    }
    return sum * level;
}