const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns empty array when passed an empty aray", () => {

    assert.deepEqual(tail([]),[]);

  });

  it("returns tail array starting at index 1 when passed three element array", () => {

    assert.deepEqual(tail(words),["Lighthouse","Labs"]);

  });
  
  it("returns array with length 2 when pass an array with length 3", () => {
    let newWords = tail(words);
    assert.strictEqual(newWords.length,2);

  });

});
