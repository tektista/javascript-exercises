const removeFromArray = function (
  numbersArrayParameter,
  ...numbersToRemoveParameter
) {

  const numbersToRemoveArray = numbersToRemoveParameter;
  const numbersArray = numbersArrayParameter;

  for (let i = 0; i < numbersToRemoveArray.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      if (numbersArray[j] === numbersToRemoveArray[i]) {
        numbersArray.splice(j,1);
      }
    }
  }

  return numbersArray;
};

// function remove(array, ...integers) {
//   let integers = integers;
//   console.log(numbers);
// }

// remove([1, 2, 3], 1, 2);

// Do not edit below this line
module.exports = removeFromArray;
