const sumAll = function(numX, numY) {

  if (numX < 0 || numY < 0) {
    return 'ERROR';
  }

  if (typeof numX === 'number' && typeof numY === 'number') {

    let highestNumber = 0;
    let lowestNumber  = 0;

    if (numX >= numY) {
      highestNumber = numX;
      lowestNumber = numY;
    }
    else {
      highestNumber = numY;
      lowestNumber = numX;
    }

    let summedUp = 0;

    for (let i = 0; i < highestNumber;) {

      summedUp += lowestNumber + i;
      highestNumber > 0 ? i++ : i--; 

    }

    return summedUp;
  }

  else { return 'ERROR'; }
};

// Do not edit below this line
module.exports = sumAll;
