/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
let subsets = (arr, res = [
    [], arr
]) => {
    //1. intial add the argument arr into the results arr

    //2. check if the arr is empty
    //bc: arr is empty:
    if (arr.length === 0) {
        return res;
    }
    //3. for ever elem in the arr
    // add it to the res arr [elem]
    // and add the remainder elem and the curr elem to the result arr
    let elem = arr[0]; // 1, 2
    let currSubset = [elem]; // [1] , [2]
    res.push(currSubset); // [[], [1], [1, 2], [2]]
    let lastSubsetIdx = res.length - 1; //2

    for (let i = 1; i < arr.length; i++) { // i = 1, i < 1, arr = [2]
        let newSubset = [...res[lastSubsetIdx]]; // [1]
        newSubset.push(arr[i]); //[1, 2]
        res.push(newSubset); //[[], [1], [1,2]]
    }

    let getNextSub = subsets(arr.slice(1), res);
    return getNextSub.sort((a, b) => a.length - b.length);

    // then recursive call the function on the next elem
    // recursive case: we still have remaining elems
    // recursive step: arr.slice to process next elem in array
}

console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = subsets;
} catch (e) {
    module.exports = null;
}