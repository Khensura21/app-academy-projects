function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddElements = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddElements.push(arr[i])
    }

    return oddElements;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let reverseElems = [];
    let endOfArr = arr.length % 2 == 0 ? arr.length - 1 : arr.length - 2;
    for (let idx = endOfArr; idx >= 0; idx = idx - 2) {
        reverseElems.push(arr[idx]);
    }

    return reverseElems;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let elemsAtPowerOfTwoIdxs = [];

    for (let i = 1; i < arr.length; i *= 2) {
        elemsAtPowerOfTwoIdxs.push(arr[i])
    }
    console.log(arr)
    return elemsAtPowerOfTwoIdxs;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let elemsAtPowerOfNIdxs = [];

    for (let i = 1; i < arr.length; i *= n) {
        elemsAtPowerOfNIdxs.push(arr[i])
    }
    return elemsAtPowerOfNIdxs;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let mid = Math.ceil(arr.length / 2)
    let firstHalfElems = [];

    for (let i = 0; i < mid; i++) {
        firstHalfElems.push(arr[i]);
    }

    return firstHalfElems;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

    let mid = Math.ceil(arr.length / 2)
    let secondHalfElems = [];

    for (let i = mid; i < arr.length; i++) {
        secondHalfElems.push(arr[i]);
    }

    return secondHalfElems;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
