const removeFromArray = function(array, ...params) {

  for (let i=0; i < params.length; i++) {

    array.filter((item, index) => {

      if (item === params[i]) {
        array.splice(index, 1);
      }
    });
  }

  return array;
}

// myTests
//removeFromArray([1, 9, 10, "tacos", "yo"], 9, 10, "tacos", -6);

// Do not edit below this line
module.exports = removeFromArray;

// multiple parameters | https://stackoverflow.com/a/45917018
