/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
let range = (start, end, arr = []) => {

    // base case: start val is >= to end val
    if (start >= end) { // s =1, e = 5, arr = [1]
        return arr;
    }

    // add the val to intermediate arr
    arr.push(start);
    // recursive step: incrmeent start val for every recursive call
    let builtArr = range(start + 1, end, arr);

    // return the built up arr from the recursive calls theat will eventual hit its base case
    return builtArr;
}


console.log(range(1, 4));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = range;
} catch (e) {
    module.exports = null;
}