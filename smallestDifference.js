function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.

    let closestPair = [arrayOne[0], arrayTwo[0]]
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            let difference = Math.abs(arrayOne[i] - arrayTwo[j]);
            if (difference < Math.abs(closestPair[0] - closestPair[1])) {
                closestPair = [arrayOne[i], arrayTwo[j]]
            }
        }
    }
    return closestPair;
}

function absDifference(num1, num2) {
    return Math.abs(num1 - num2)
}