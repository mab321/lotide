// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !==  ${expected}`);
  }

};

const tail = function(myArray) {
  if (myArray.length <= 1) {
    return [];
  } else {
    return myArray.slice(1);

  }
  
};

// Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWords = tail(words); // no need to capture the return value since we are not checking it
const emptyWords = tail([]);

//Test case 1 original array length unmodified and first element is still the same
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words[0], "Yo Yo");

// test case 2 check return tail array length and elements
assertEqual(newWords.length,2); // returned array is 2 elements in length
assertEqual(newWords[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(newWords[1], "Labs"); // ensure second element is "Labs"

// test case 3 check empty array returned when empty array is passed to tail
assertEqual(emptyWords.length,0); // empty array returns empty array length is 0