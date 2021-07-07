// You're given two lists of positive integers: one that contains the speeds of
// riders wearing red shirts and one that contains the speeds of riders wearing
// blue shirts.Each rider is represented by a single positive integer, which is
// the speed that they pedal a tandem bicycle at.Both lists have the same
// length, meaning that there are as many red - shirt riders as there are
// blue - shirt riders.Your goal is to pair every rider wearing a red shirt with a
//   rider wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum
// possible total speed of all of the tandem bicycles being ridden based on an
// input parameter, if fastest === true.

// "Total speed" is defined as the sum of the speeds of all the tandem bicycles
// being ridden.


// {
//     "redShirtSpeeds": [5, 5, 3, 9, 2],
//     "blueShirtSpeeds": [3, 6, 7, 2, 1],
//     "fastest": true
// }

// [2, 3, 5, 5, 9]
// [1, 2, 3, 6, 7]

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    let totalSpeed = 0;

    if (fastest) {
        while (redShirtSpeeds.length >= 1) {
            let fastestRiderIdx = redShirtSpeeds.length - 1;
            // we pair the fastest with the slowest
            if (redShirtSpeeds[fastestRiderIdx] > blueShirtSpeeds[fastestRiderIdx]) {
                blueShirtSpeeds.shift();
                totalSpeed += redShirtSpeeds.pop();
            } else {
                redShirtSpeeds.shift();
                totalSpeed += blueShirtSpeeds.pop();
            }

        }
        return totalSpeed;
    } else {
        while (redShirtSpeeds.length >= 1) {
            // we pair the slowest with the slowest
            if (redShirtSpeeds[0] > blueShirtSpeeds[0]) {
                blueShirtSpeeds.shift();
                totalSpeed += redShirtSpeeds.shift();
            } else {
                redShirtSpeeds.shift();
                totalSpeed += blueShirtSpeeds.shift();
            }

        }
        return totalSpeed;
    }
}