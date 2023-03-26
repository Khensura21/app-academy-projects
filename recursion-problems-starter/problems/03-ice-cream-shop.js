/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


// your code here
let iceCreamShop = (flavors, favFlavor, hasFlavor = false) => {

    // base case: when flavors arr len is empty
    // return our current flag val

    // recursive case: flavors.len > 0,
    // check if curr flavor equal to fav flar
    // if so change flag to true, return  true
    // otherwise return  the boolean val of the next flavor check

    // recursive step: for every recursive call, slice the arr from next elem to end of arr

    if (flavors.length === 0) {
        return hasFlavor;
    }

    return flavors[0] === favFlavor ? true : iceCreamShop(flavors.slice(1), favFlavor, hasFlavor);


}
console.log(iceCreamShop([], 'honey lavender'));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = iceCreamShop;
} catch (e) {
    module.exports = null;
}