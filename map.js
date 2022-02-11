const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
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





const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map (words,words => words[1])
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,['r','o','o','a','o']);