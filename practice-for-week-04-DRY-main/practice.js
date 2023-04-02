const getGreaterElem = (elem1, elem2, FLAG = 'smallest') => {
  let target;
  if (elem1 > elem2) {
    target = elem1;
  } else {
    target = elem2;
  }
  return target;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = getGreaterElem(num1, num2);
  return bigNum * 2;

}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = getGreaterElem(num1, num2);
  return bigNum / 3;

}

function eatMostTacos(sum1, sum2) {
  let mostTacosCount = getGreaterElem(sum1, sum2);
  return `I ate ${mostTacosCount} tacos.`;
}
//   1         2
function adoptSmallerDog(weight1, weight2) {
  let smallerDog = Math.min(getGreaterElem(weight2, weight1), weight1, weight2);
  return `I adopted a dog that weighs ${smallerDog} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
