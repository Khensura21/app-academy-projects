/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/

let maxWithReduce = function (nums) {
  // Your code here
  let initialVal = 0;

  const getMaxVal = function (currVal, nextVal) {
    if (currVal > nextVal) {
      return currVal;
    } else {
      return nextVal;
    }
  }

  let maxVal = nums.reduce(getMaxVal, initialVal);

  return maxVal;
};

console.log(maxWithReduce([4, 6, 3, 5, 42, 4]));
console.log(maxWithReduce([-2, -3, -7, 3])); // 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
