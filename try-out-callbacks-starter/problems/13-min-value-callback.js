/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (arr, cb) {
    //the result to return
    let res;

    // reduce cb func
    const getMinVal = function (currVal, nextVal) {
        if (currVal < nextVal) {
            return currVal
        } else {
            return nextVal;
        }
    }

    //determine if cb is undefined
    if (cb === undefined) {
        // if it is, reduce arr to smallest val via reduce method
        //return that reduced val
        res = arr.reduce(getMinVal);
    } else {
        // if a call back is supplied
        //then map each elem to that cb function
        // and reduce that new arr via the reduce method and its cb function
        res = arr.map((elem) => cb(elem)).reduce(getMinVal);
    }

    //finally you return the res
    return res;
};

console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
