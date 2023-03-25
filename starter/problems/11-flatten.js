/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([ 1,  [ 2, [3] ] ]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = (nestedArr, flatArr = []) => {

    // bc:when the array is empty
    // return the intermediate flatArray we've been building up
    if (nestedArr.length === 0) {
        return flatArr;
    }

    //get elem  to process
    let elem = nestedArr[0];

    // if the elem is an array type, we immediately,  recursively call flatten on the elem
    if (Array.isArray(elem)) {
        // rc1: if at any point during our process, we see a nested arr, we call flatten to process that arr
        flatten(elem, flatArr);

    } else {
        // otherwise the elem is not an array,  and we add it to intermed. flat arr
        flatArr.push(elem);
    }

    // rc2 : we process the next elem at a time until we get to end of original arr
    // rcstep : Arr.slice  steps us closer to our base case
    flatten(nestedArr.slice(1), flatArr);

    //return the res arr that we were building thru each recurrence at the end
    return flatArr;
}

console.log(flatten([
    [1],
    [
        [2, [3]]
    ],
    [24, 3, 4, 5, 6789, 5]
]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = flatten;
} catch (e) {
    module.exports = null;
}