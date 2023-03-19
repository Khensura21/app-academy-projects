/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

let reject = function (arr, cb) {
    //initialize a new arr
    let newArr = [];

    // iterate through arr argument
    // pass each elem to te callback function
    // push the elem to the new arr if its return value from the cb is false
    for (let i = 0; i < arr.length; i++) {

        let elem = arr[i];
        let res = cb(elem);

        if (res === false) {
            newArr.push(elem);
        }
    }

    return newArr;

};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
