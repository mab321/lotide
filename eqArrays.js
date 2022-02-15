const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;


