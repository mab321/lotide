const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !==  ${expected}`);
  }

};
const countLetters = function(sentence) {

  const result = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
 
};


/*
const letters = countLetters("lighthouse in the house");
assertEqual(letters["h"],4);
assertEqual(letters["e"],3);
console.log(letters);
*/
module.exports = countLetters;