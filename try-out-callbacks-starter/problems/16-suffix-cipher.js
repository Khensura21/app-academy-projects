/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sentence, obj) {

    let newSentence = sentence.split(' ');
    const SUFFIXES = Object.keys(obj);
    // iterate through each word

    newSentence.forEach(function (word, idx, array) {

        for (let i = 0; i < SUFFIXES.length; i++) {
            // get the suffixes of the obj
            //check if any of the suffixes ends with the word
            // if so, transform that word with the correspon. suffix cb
            // and assign it to its curr position
            let suffix = SUFFIXES[i];
            let suffixCB = obj[suffix];

            if (word.endsWith(suffix)) {
                let newWord = suffixCB(word);
                array[idx] = newWord;
            }
            // if it doesnt, just continue to next word
        }
    });

    // join and  return new sentence
    return newSentence.join(' ');

};



let cipher2 = {
    tal: function (word) {
        return word.toUpperCase();
    },
    s: function (word) {
        return word + 'th';
    }
};

console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
