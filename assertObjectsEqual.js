
const eqArrays = function(myArray1, myArray2) {

  let comparison = true;

  if(myArray1.length !== myArray2.length){
    return comparison = false;
  }

  for (let i = 0; i < myArray1.length; i++) {
    myArray1[i] === myArray2[i] ? comparison = true : comparison =false;
  }
  return comparison;
};

const eqObjects = function(object1, object2) {
  let equality = true;
 if ( Object.keys(object1).length !== Object.keys(object2).length) {
     return  equality = false;
 }


 for (const item of Object.keys(object1)){ 
   
   if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
       equality = eqArrays(object1[item], object2[item]) === true ? true : false;
   } else {
    if(object1[item] !== object2[item]){
       return equality = false;
    } 
   } 
    
 } 
 return equality;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if(actual instanceof Object === true && expected instanceof Object === true) {

    eqObjects(actual,expected) === true ? console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log("Please make sure to pass objects");
  }
};
/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd,dc);
*/

module.exports = assertObjectsEqual;