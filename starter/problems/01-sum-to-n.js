/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
let sumToN = (num) => {
    //edge case num < 0
    // just return null

    if (num < 0) {
        return null;
    }
    //base case: num === 0
    // return 0
    if (num === 0) return 0;

    // recursive case: num > 0
    // recursive step: we decrement num (num--) for each recurrence
    // the sum of a num n = n + sum(n-1)
    // so we just return n + the sum of n -1
    return num + sumToN(num - 1);

}


console.log(sumToN(-8));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sumToN;
} catch (e) {
    module.exports = null;
}