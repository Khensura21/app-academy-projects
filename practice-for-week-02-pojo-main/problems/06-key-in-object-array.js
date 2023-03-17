/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // Your code here
  // iterate through each object
  // for each obj
  // check if obj has key
  // if so immediate return true
  // return false if no key was found

  // for (let obj of objArray) {
  //   for (let key in obj) {
  //     if (key === keyString) {
  //       return true;
  //     }
  //   }
  // }

  //v2
  for (let obj of objArray) {
    if (Object.hasOwn(obj, keyString)) {
      return true;
    }
  }

  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
