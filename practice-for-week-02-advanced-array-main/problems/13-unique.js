/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

*/

let unique = function (array) {
    // Your code here
    //sort your input array
    array.sort();

    // filter out the elems that equals it's prev elem
    let uniqueElems = array.map(function (ele, idx, array) {
        if (idx === array.length - 1) {
            if (ele >= array[idx - 1]) {
                return ele;
            }
        } else {
            if (ele != array[idx + 1]) {
                return ele;
            }
        }
    }).filter((elem) => elem !== undefined);

    return uniqueElems;
};

// function unique(arr) {
//     const uniqueMap = new Map();
//     return arr.map(element => {
//         if (!uniqueMap.has(element)) {
//             uniqueMap.set(element, true);
//             return element;
//         }
//     }).filter(element => element !== undefined);
// }

console.log(unique([1, 9, 2, 4, 3, 2, 1, 25, 1, 2, 3, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'b', 'c', 'x', 'z', 'k', 'n',])); // ['a', 'b', 'c']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
