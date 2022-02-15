const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2,3] when passed [1, 2, 3, 4] even array ", () => {

    assert.deepEqual(middle([1, 2, 3, 4]),[2,3]);

  });

  it("returns [3,4] when passed [1, 2, 3, 4, 5, 6] even array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
    
  });

  it("returns [] when passed single element array", () => {

    assert.deepEqual(middle([1]),[]);
  });

});


