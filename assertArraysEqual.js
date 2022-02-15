const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayList1, arrayList2) {

  if (Array.isArray(arrayList1) && Array.isArray(arrayList2)){
    
    eqArrays(arrayList1,arrayList2) === true ? console.log(`💚💚💚 Assertion Passed: ${arrayList1} === ${arrayList2}`) : console.log(`🔴🔴🔴 Assertion Failed: ${arrayList1} !==  ${arrayList2}`);
      
  }
};

module.exports = assertArraysEqual;

