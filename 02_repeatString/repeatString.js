const repeatString = function(string, number) {

  let stringMultlplier = '';

  for (let i = 0; i < number; ++i) {
    stringMultlplier += string;
  }
  return stringMultlplier;
};

// positive numbers
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);

// Do not edit below this line
module.exports = repeatString;
