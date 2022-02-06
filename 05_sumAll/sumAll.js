const sumAll = function(numX, numY) {

  if ( numX < 0 || numY < 0 ) {
    return 'ERROR';
  }

  if (typeof numX === 'number' && typeof numY === 'number') {

    let hiNumber = 0;
    let loNumber  = 0;

    if (numX >= numY) {
      hiNumber = numX;
      loNumber = numY;
    }
    else {
      hiNumber = numY;
      loNumber = numX;
    }

    let summedUp = 0;

    for (let i = 0; i < hiNumber; i++) {

      summedUp += loNumber + i;

    }

    return summedUp;
  }

  else { return 'ERROR'; }
};

// Do not edit below this line
module.exports = sumAll;
