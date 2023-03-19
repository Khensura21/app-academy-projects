/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

let mySome = function (arr, cb) {
    // iterate thru the arr
    // pass each elem and its idx to the cb funtion
    // if the cb evals to true once, immediately return true
    //otherwise , return false
    for (let idx = 0; idx < arr.length; idx++) {

        let elem = arr[idx];
        let res = cb(elem, idx)

        if (res === true) {
            return true;
        }
    }

    return false;
};


let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function (ele) {
    return ele.length === 4;
});
console.log(result3); // true

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySome;
