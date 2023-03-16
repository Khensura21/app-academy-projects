/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function (word) {
    // Your code here

    const vowels = "aeiou";
    let wordChars = word.split('');

    for (let idx = wordChars.length - 1; idx > -1; idx--) {
        let letter = wordChars[idx];

        if (vowels.includes(letter)) {

            wordChars[idx] = '';
            break;

        }
    }

    return wordChars.join('');

};

let hipsterfy = function (sentence) {
    // Your code here

    let words = sentence.split(' ');

    const newWords = words.map(removeLastVowel);

    return newWords.join(' ');
};


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
