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
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false

assertEqual(eqArrays([1], [1, 2, 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
