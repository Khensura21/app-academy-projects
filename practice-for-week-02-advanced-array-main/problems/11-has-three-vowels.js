/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
    // Your code here
    let chars = string.split('');
    let initialVal = 0;

    const isVowel = function (letter) {
        const vowels = 'aeiou';

        if (vowels.includes(letter)) {
            return 1;
        } else {
            return 0;
        }
    }

    const count = function (accum, currVal) {
        return accum + currVal
    }

    const countVowels = chars.map(isVowel);
    const numberOfVowels = countVowels.reduce(count, initialVal);

    return numberOfVowels > 3;


};

console.log(hasThreeVowels('delicious')); //  true
console.log(hasThreeVowels('bootcamp prep')); //  true
console.log(hasThreeVowels('bootcamp')); //  false
console.log(hasThreeVowels('dog')); //  false
console.log(hasThreeVowels('go home')); //  false

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
