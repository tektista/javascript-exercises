const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let total = 0;

  for (const element of array) {
    total = total + element;
  }
  return total;
};

const multiply = function (array) {
  let total = 1;

  for (const element of array) {
    total = total * element;
  }

  return total;
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  let total = 1;

  for (let i = 1; i < x + 1; i++) {
    total = total * i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
