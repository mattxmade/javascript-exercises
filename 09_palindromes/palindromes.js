const palindromes = function (string) {

string = string.match(/[^_\W]+/g).join("");             // 1)
string = string.toLowerCase();

const stringArray = [];

for (let i = 0; i < string.length; i++) {
  stringArray.push([string.slice(i, i+1)]);
}

const reverseString = (stringArray.reverse().join(""));

return reverseString === string ? true : false;
};

// store characters in reverse order
// letters only using regex
// compare strings
// return true if match

// 1) https://stackoverflow.com/a/31047727

// Do not edit below this line
module.exports = palindromes;
