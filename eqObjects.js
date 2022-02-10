const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !==  ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  if ( Object.keys(object1).length !== Object.keys(object2).length) {
      return  false;
  }


  for (const item of Object.keys(object1)){ 
     if(object1[item] === object2[item]){
       return equality = true;
     }
  } 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(abc,ab),false);