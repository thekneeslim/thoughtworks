function Hotel(name, rating, weekdayRegular, weekdayRewards, weekendRegular, weekendRewards) {
  this.name = name;
  this.rating = rating;
  this.weekdayRegular = weekdayRegular;
  this.weekdayRewards = weekdayRewards;
  this.weekendRegular = weekendRegular;
  this.weekendRewards = weekendRewards;
  this.price = 0;

}

var lakewood = new Hotel("Lakewood", 3, 110, 80, 90, 80)
var bridgewood = new Hotel ("Bridgewood", 4, 160, 110, 60, 50)
var ridgewood = new Hotel ("Ridgewood", 5, 220, 110, 150, 40)

var hotels = [lakewood, bridgewood, ridgewood]

function checkCheapest(details) {
  details = parseData(details)
  var days = checkDays(details.dates)

  for (var i = 0; i< hotels.length; i++) {
    if (details.user == "Regular") {
      hotels[i].price = (hotels[i].weekdayRegular * days.weekdays) + (hotels[i].weekendRegular * days.weekends)
    } else {
      hotels[i].price = (hotels[i].weekdayRewards * days.weekdays) + (hotels[i].weekendRewards * days.weekends)
    }
  }

  var cheapest = lakewood

  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].price < cheapest.price) {
      cheapest = hotels[i]
    } else if (hotels[i].price == cheapest.price && hotels[i].rating > cheapest.rating) {
      cheapest = hotels[i]
    }
  }

  return hotel[i].name
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

// ======================================================================

module.exports = {
  lakewood: lakewood,
  parseData: parseData,
  checkDays: checkDays
}
