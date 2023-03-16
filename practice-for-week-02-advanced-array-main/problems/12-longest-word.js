/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function (sentence) {
    // Your code here

    if (sentence === '') return '';

    let biggestWordIdx = 0; // 0
    let biggestWord = '';
    let words = sentence.split(' ');

    words.forEach(function (word, idx) {
        if (word.length > biggestWord.length) {
            biggestWord = word;
            biggestWordIdx = idx;
        }
    });

    return words[biggestWordIdx];

};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
