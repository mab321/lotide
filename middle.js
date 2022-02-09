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

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1]),[]);
