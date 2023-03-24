/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

const posPow = (b, n) => {
    // for the positive power, pass the base and power to the pos helper function
    //bc: when the power is 1
    // return the num
    //rc: the power > 1
    // rcs step is decrementing the power on each recurrence

    if (n === 1) {
        return b;
    }

    return b * posPow(b, n - 1);

}

const negPow = (b, n) => {
    // for the neg power
    //bc: when the power is 0
    // return 1
    //rc: the power < 1
    // rcs step is incrementing the power on each recurrence


    if (n === 0) {
        return 1;
    }

    return ((1 / b) * negPow(b, n + 1));

}

function exponent(b, n) {
    // your code here
    // return a num res
    // there are 3 conditions:  zero, pos or neg powers
    let res;
    // if power (n) === 0 return 1
    if (n === 0) return 1;

    else if (n < 0) {
        res = negPow(b, n);
    } else {
        res = posPow(b, n);

    }
    // return the res
    return res;

}


console.log(exponent(2, -2)); // 9)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}