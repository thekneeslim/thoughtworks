var assert = require('chai').assert
var test = require('../index')

describe("Hotel Constructor - Creating hotel objects", function() {
  it("should return an object for Lakewood", function() {
    assert.isObject(test.lakewood)
  })

  it("should return rating of 3 for Lakewood", function() {
    assert.equal(test.lakewood.rating, 3)
  })
})

describe("parseData - refining customer input", function() {
  it("should return an object", function() {
    assert.isObject(test.parseData("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"))
  })

  it("should return Regular", function() {
    assert.equal(test.parseData("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)").user, "Regular")
  })

  it("should return array length of 3", function() {
    assert.equal(test.parseData("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)").dates.length, 3)
  })

  it("should return date of 17 Mar 2009", function() {
    assert.equal(test.parseData("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)").dates[1], "17 Mar 2009")
  })
})

describe("checkDays - updating weekdays & weekends", function() {
  it("should return an object", function() {
    assert.isObject(test.checkDays(["16 Mar 2009", "17 Mar 2009", "18 Mar 2009"]))
  })

  it("should return 3 weekdays", function() {
    assert.equal(test.checkDays(["16 Mar 2009", "17 Mar 2009", "18 Mar 2009"]).weekdays, 3)
  })

  it("should return 0 weekend", function() {
    assert.equal(test.checkDays(["16 Mar 2009", "17 Mar 2009", "18 Mar 2009"]).weekends, 0)
  })

  it("should return 1 weekdays", function() {
    assert.equal(test.checkDays(["20 Mar 2009", "21 Mar 2009", "22 Mar 2009"]).weekdays, 1)
  })

  it("should return 2 weekends", function() {
    assert.equal(test.checkDays(["20 Mar 2009", "21 Mar 2009", "22 Mar 2009"]).weekends, 2)
  })
})

describe("checkCheapest - check cheapest hotel", function() {
  it("should return Lakewood", function() {
    assert.isObject(test.checkDays("Regular: 17Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)", "Lakewood"))
  })

  it("should return Bridgewood", function() {
    assert.isObject(test.checkDays("Regular: 20Mar2009(fri). 21Mar2009(sat), 22Mar2009(sun)", "Bridgewood"))
  })

  it("should return Ridgewood", function() {
    assert.isObject(test.checkDays("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)", "Ridgewood"))
  })
})

// "Regular: 17Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)" => Lakewood
// "Regular: 20Mar2009(fri). 21Mar2009(sat), 22Mar2009(sun)" => Bridgewood
// "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)" => Ridgewood
