/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
const addToTwelve = array => {
    //should return a boolean

    //1. bc: if array <= return false

    //2. rc: 2 or more elems
    //3. rcstep: slice array to look at next elem - end of arr

    // check for the base case
    if (array.length <= 1) {
        return false;
    }

    // calculate adjacent sums
    let adjacentSum = array[0] + array[1];

    // if we dont hit the base case return true if adj elem are equal
    // otherwise return the res of the next recurrence (recursive call)
    return adjacentSum === 12 ? true : addToTwelve(array.slice(1));
}

console.log(addToTwelve([1, 12, 4, 7, 6])); // true

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = addToTwelve;
} catch (e) {
    module.exports = null;
}