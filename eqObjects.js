const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !==  ${expected}`);
  }

};
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(abc,ab),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
*/
module.exports = eqObjects;