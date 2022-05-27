const ftoc = function (no) {
  //  	Deduct 32, then multiply by 5, then divide by 9

  let answer = (5 * (no - 32)) / 9;

  if (answer % 1 == 0) {
    return Number(answer);
  }

  return Number(answer.toFixed(1));
};

const ctof = function (no) {
  // Divide by 5, then multiply by 9, then add 32

  let answer = (no / 5) * 9 + 32;

  if (answer % 1 == 0) {
    return Number(answer);
  }

  return Number(answer.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
