/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
  // Your code here

  // iterate through each each key of obj
  for (let objKey in obj) {
    // check if curr key is equal to match
    // return true if so
    if (objKey === key) {
      return true;
    }
  }

  //return false if we dont find a match
  return false;
}

let obj1 = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
