class Hotel {
  constructor (name, rating, weekdayRegular, weekdayRewards, weekendRegular, weekendRewards) {
    this.name = name;
    this.rating = rating;
    this.weekdayRegular = weekdayRegular;
    this.weekdayRewards = weekdayRewards;
    this.weekendRegular = weekendRegular;
    this.weekendRewards = weekendRewards;
    this.price = function(userType, days) {
      var pricing;
      var weekdayRate;
      var weekendRate;
      if (userType == "Regular") {
        weekdayRate = this.weekdayRegular
        weekendRate = this.weekendRegular
      } else {
        weekdayRate = this.weekdayRewards
        weekendRate = this.weekendRewards
      }
      pricing = (weekdayRate * days.weekdays) + (weekendRate * days.weekends)
      return pricing
    }
  };
}

module.exports = Hotel
