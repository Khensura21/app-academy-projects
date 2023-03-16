/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/




let twoDimensionalProduct = function (arr) {

  const productOfArr = function (accum, currVal) {
    return accum * currVal;
  }

  const getProduct = function (array) {
    const initialVal = 1;
    return array.reduce(productOfArr, initialVal);

  };

  let arrayOfProducts = arr.map(getProduct);
  let productOfArrayOfProducts = arrayOfProducts.reduce(productOfArr);

  return productOfArrayOfProducts
}

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360


let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = twoDimensionalProduct;
} catch (e) {
  module.exports = null;
}
