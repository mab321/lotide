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
const assertArraysEqual = function(arrayList1, arrayList2) {

  if (Array.isArray(arrayList1) && Array.isArray(arrayList2)){
    
    eqArrays(arrayList1,arrayList2) === true ? console.log(`💚💚💚 Assertion Passed: ${arrayList1} === ${arrayList2}`) : console.log(`🔴🔴🔴 Assertion Failed: ${arrayList1} !==  ${arrayList2}`);
      
  }
}
const without = function(originalArray, removables) {
  
  let filteredArray =[];

  for (let i = 0; i < originalArray.length; i++) {

    if (!(removables.includes(originalArray[i]))) {
      filteredArray.push(originalArray[i]);
    }
    
  }

  return filteredArray;
}
/*
// Test Cases
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
module.exports = without;