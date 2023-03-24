/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
const reverse = (str) => {

    //version 1
    //basecase : when the curr str we are processing is empty
    let currChar = str[0];
    if (currChar === undefined) {
        return "";
    }
    //recursive case: we still have more non-empty strs to process
    // recursive step: slicing through str until we reach an empty str via str.slice
    let nextStr = reverse(str.slice(1));
    // Our reversed str is eqaul to the  return of the next str + our curr char
    return nextStr + currChar;


    // version 2
    // if (str.slice(1) === '') {
    //     return str;
    // }

    // return reverse(str.slice(1)) + str[0];


}

// version 3: one liner
// const reverse = str => str.slice(1) === "" ? str : reverse(str.slice(1)) + str.slice(0, 1);
console.log(reverse("")); // "esuoh")
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverse;
} catch (e) {
    module.exports = null;
}