const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(myArray) {
  let midArray = [];
  if(myArray.length < 3) {
    return midArray;
  }

  if (myArray.length % 2 === 0) {
    let mid = myArray.length / 2;

    midArray.push(myArray[mid-1], myArray[mid]);
    return midArray;
  } else {
    let mid = Math.ceil(myArray.length / 2);
    midArray.push(myArray[mid]);
    return midArray;
  }

}


module.exports = middle;
