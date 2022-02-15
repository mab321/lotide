// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(myArray) {
  if (myArray.length <= 1) {
    return [];
  } else {
    return myArray.slice(1);

  }
  
};

// Test cases moved to test folder, under tailTest.js

module.exports = tail;