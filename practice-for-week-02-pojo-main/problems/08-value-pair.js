/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  //destructure the correspending value from the key of the first obj to a new var
  //destructure the correspending value from the key of the 2nd obj to a new var
  let keyValOfObj1 = obj1[key];
  let keyValOfObj2 = obj2[key];
  //return an array, containing the new values

  return [keyValOfObj1, keyValOfObj2];
}

let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };

console.log(valuePair(object1, object2, 'location'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
