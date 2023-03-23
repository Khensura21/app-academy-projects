/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here


let sumArray = (intArr, currSum = 0) => {
    // since we need a way to store intermediate vals,
    // let set a default parameter sum, to store the sum at any given state

    // base case: when the arr len is zero
    // return the intermediate  of sum
    // recursive case: arr len is greater than zero, still have elem to process
    // add the first elem to sum;
    // recursive step: arr.slice, will allow us to process each elem  in array while also implicit decreasing its length

    if (intArr.length === 0) {
        return currSum;
    }

    currSum = currSum + intArr[0];
    let runningSum = sumArray(intArr.slice(1), currSum);
    return runningSum;



}

console.log(sumArray([1, 2, 3, 4, 5])); //  6)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sumArray;
} catch (e) {
    module.exports = null;
}