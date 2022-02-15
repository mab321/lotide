
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const head = function(myArray) {

  if (myArray.length <= 0) {
    return undefined;
  } else {
    return myArray[0];
  }
}

// TEST CODE moved to test folder headTest.js

module.exports = head;
