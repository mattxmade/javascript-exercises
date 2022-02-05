const repeatString = function(string, number) {

  let stringMultlplier = '';

  if (number < 0) {
    stringMultlplier = 'ERROR';
  }

  else {
    for (let i = 0; i < number; ++i) {
      stringMultlplier += string;
    }
  }

  return stringMultlplier;
};

// positive numbers         | PASS
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);

// negative numbers         | PASS
repeatString('hey', -1);

// random                   | Pass
// blank string             | Pass

// ALL PASSED


// Do not edit below this line
module.exports = repeatString;
