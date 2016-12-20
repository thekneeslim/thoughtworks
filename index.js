//var Hotel = require('./hotel')

var lakewood = new Hotel("Lakewood", 3, 110, 80, 90, 80)
var bridgewood = new Hotel ("Bridgewood", 4, 160, 110, 60, 50)
var ridgewood = new Hotel ("Ridgewood", 5, 220, 100, 150, 40)

var hotels = [lakewood, bridgewood, ridgewood]

function checkCheapest(details) {
  details = parseData(details)
  var days = checkDays(details.dates)

  hotels.sort(function(a,b) {
    return (a.price(details.user, days) == b.price(details.user, days))
    ? (b.rating - a.rating)
    : a.price(details.user, days) - b.price(details.user, days)
  })

  return hotels[0].name
}

function checkDays(data) {
  var daysTracker = {
    weekdays: 0,
    weekends: 0
  }

  for (var i = 0; i < data.length; i++) {
    var givenDate = new Date (data[i]).getDay()
    if (givenDate == 0 || givenDate == 6) {
      daysTracker.weekends++
    } else {
      daysTracker.weekdays++
    }
  }
  return daysTracker
}

function parseData(booking) {
  var parseBooking = {
    user: "",
    dates: []
  }
  parseBooking.user = booking.split(": ")[0]
  var tempDates = booking.split(": ")[1]
  tempDates = tempDates.split(", ")

  for (var i = 0; i < tempDates.length; i++) {
    tempDates[i] = tempDates[i].split("(")[0].split("")
    tempDates[i].splice(2, 0, " ")
    tempDates[i].splice(tempDates[i].length - 4, 0, " ")
    tempDates[i] = tempDates[i].join("")
    parseBooking.dates.push(tempDates[i])
  }
  return parseBooking
}


module.exports = {
  lakewood: lakewood,
  parseData: parseData,
  checkDays: checkDays,
  checkCheapest: checkCheapest
}
