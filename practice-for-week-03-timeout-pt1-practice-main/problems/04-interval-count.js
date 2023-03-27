/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  // Your code here
  // create a var to hold the nested setInterval function so that we have access to its id when it's time to cancel it
  // within the setInterval function, create a annonymous that
  // originals calls the cb at delay time
  // and countimes to do so until amount equals zero

  const INTERVAL = setInterval(function () {

    cb();

    amount--;

    if (amount === 0) {

      clearInterval(INTERVAL);

    }

  }, delay);

}

intervalCount(function () {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
