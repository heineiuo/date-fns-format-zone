var timezoneJSON = require('./timezone.json')
var map = {}
var timezoneOffset = new Date().getTimezoneOffset()
Object.entries(timezoneJSON).map(([key, value]) => {
  var minuteOffset = 0
  if (value != 'UTC') {
    var pp = key.substring(4, 5)
    var h = Number(key.substring(5, 7))
    var m = Number(key.substring(8, 10)) / 60
    var time = (h + m) * (pp === '+' ? 1 : -1)
    minuteOffset = time * 60
  }
  map[value] = (minuteOffset + timezoneOffset) * 1000 * 60
})

module.exports = map