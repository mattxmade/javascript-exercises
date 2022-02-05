const reverseString = function(string) {
  let stringReverse = [];

  for (let i = 0; i < string.length; i++) {
    stringReverse.unshift(string[i]);
  }
  stringReverse = stringReverse.join('').toString();
  return stringReverse;
};

// log test
//console.log(reverseString('This is the same but backwards!'));

// Do not edit below this line
module.exports = reverseString;

//join() array method :: https://stackoverflow.com/a/12132212
