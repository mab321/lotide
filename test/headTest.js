const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 when passed [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });
  it("returns Hello when passed ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  it("returns empty array it will return an undefined", () => {
    assert.strictEqual(head([]), undefined); 
  });
  it("returns 9 when passed a single array with [9]", () => {
    assert.strictEqual(head([9]), 9); 
  });

});


