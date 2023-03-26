/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
let isSorted = (arr, FLAG = false) => {

    //basecase: array len is less than 2
    if (arr.length < 2) {
        return FLAG;
    }
    // return flag

    let currElem = arr[0];
    let nextElem = arr[1];
    if (currElem > nextElem) {
        return false;
    } else {
        FLAG = true;
        //recursive case: array.length >= 2
        // recursive step: Arr.slice
        return isSorted(arr.slice(1), FLAG)
    }

}

console.log(isSorted([5, 4, 3, 2, 1])); // true
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = isSorted;
} catch (e) {
    module.exports = null;
}