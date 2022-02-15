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

const assertArraysEqual = function(arrayList1, arrayList2) {

  if (Array.isArray(arrayList1) && Array.isArray(arrayList2)){
    
    eqArrays(arrayList1,arrayList2) === true ? console.log(`💚💚💚 Assertion Passed: ${arrayList1} === ${arrayList2}`) : console.log(`🔴🔴🔴 Assertion Failed: ${arrayList1} !==  ${arrayList2}`);
      
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length ; i++) {

    if(sentence[i] !== " ") {

      if(results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

/*
letterPositions("lighthouse test");

assertArraysEqual(letterPositions("lighthouse").h,[3,5]);
assertArraysEqual(letterPositions("hello").e,[1]);
*/
module.exports = letterPositions;
