const sumAll = function (int1, int2) {
  let total = int1;

  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  }

  if (typeof int1 !== "number" || typeof int2 !== "number") {
    return "ERROR";
  }

  if (int2 > int1) {
    for (let i = int1 + 1; i < int2 + 1; i++) {
      total = total + i;
    }
  }

  for (let i = int1 - 1; i > 0; i--) {
    total = total + i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
