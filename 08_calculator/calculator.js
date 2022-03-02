const add = function(numX, numY) {
	return numX + numY;
};

const subtract = function(numX, numY) {
	return numX - numY;
};

const sum = function(array) {
	return array.length > 0 ? array.reduce((prevVal, currVal) => prevVal + currVal) : 0;
};

const multiply = function(array) {
	return array.reduce((numX, numY) => numX * numY);
};

const power = function(numX, numY) {
  const powerOf = [];

  for (let i = 0; i < numY; i++) {
    powerOf.push(numX);
  }

  return powerOf.reduce((prevVal, currVal) => prevVal * currVal);
  
};

const factorial = function(num) {

  const factorialOf = [];

  for(let i = num; i > 0; i--) {
    factorialOf.push(i);
  }

  return factorialOf.reduce((numX, numY) => numX * numY, 1);
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
