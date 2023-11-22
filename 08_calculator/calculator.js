const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
  let sum = 0;

  array.forEach(element => {
    sum += element;
  });

  return sum;
};

const multiply = function(array) {
  let product = 1;

  array.forEach(element => {
    product *= element;
  });

  return product;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(factorial) {
  let result = 1;

	for (let i = 1; i <= factorial; i++) {
    result *= i;
  }
  
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};