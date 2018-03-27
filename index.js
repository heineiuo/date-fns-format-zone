const zoneMap = require('./timezone-parse')

const format = function (_format) {
  return function (_date, fmt, options) {
    var date = _date
    if (options.zone) {
      date = new Date(_date)
      date = new Date(date.getTime() + zoneMap[options.zone])
      delete options.zone
    }
    return _format(date, fmt, options)
  }
}

module.exports = module.exports.default = format