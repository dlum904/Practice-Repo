/**
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x/2);

    // We only need to work with numbers between left and right, b/c values higher than that
    // will exceed the square root.

    while (left <= right) {

        // Every iteration, we redefine the mid value with the new left and right.
        // Eventually, the mid value should be the value we're looking for.
        let mid = Math.floor((left + right) / 2);

        let squared = mid * mid;

        if (squared === x) {

					return mid;

        } else if (squared < x) {
            
					left = mid + 1;
					// left++
        } else {

					right = mid - 1;
					// right--;
        }

    }

    return right;
};