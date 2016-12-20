var assert = require('chai').assert
var test = require('../index')

describe("Files link up", function() {
  it("should return Hello World", function() {
    assert.equal(test.intro(), "Hello World!")
  })
})
