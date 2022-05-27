const reverseString = function (string) {
  const stringArray = Array.from(string);
  const reversedStringAray = stringArray.reverse();
  const reversedString = reversedStringAray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
