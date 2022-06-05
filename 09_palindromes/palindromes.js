const palindromes = function (string) {
  //lowercase
  const stringLowerCase = string.toLowerCase();

  //into array
  const stringArray = stringLowerCase.split("");

  const filteredArray = stringArray.filter(function (char) {
    return char !== "!" && char !== "," && char !== "." && char !== " ";
  });

  //copy array by value
  let filterArrayOriginal = [...filteredArray];

  //reversed array
  const reversedArray = filteredArray.reverse();

  //into string
  const filterArrayOriginals = filterArrayOriginal.join("");
  const filteredString = filteredArray.join("");

  if (filteredString == filterArrayOriginals) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
