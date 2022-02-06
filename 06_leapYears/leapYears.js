const leapYears = function(year) {

  if ( year % 400 === 0 && (year % 100 === 0) ) {
    console.log(`${year} is leap year!`);
    return true;
  }
  
  else if ( year % 100 === 0 ) {
    console.log(`${year} is not leap year!`);
    return false;
  }

  else if ( year % 4 === 0 ) {
    console.log(`${year} is a leap year!`);
    return true;
  }

  else { return false; }

};

// Do not edit below this line
module.exports = leapYears;
