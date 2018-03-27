var _format = require("date-fns/format")
var format = require('./index')(_format)

const targetZones = [
  'Asia/Shanghai',
  'America/Los_Angeles',
  "Asia/Tokyo",
]

const date = new Date()

targetZones.forEach(zone => {
  console.log(
    zone+':\n   ', 
    format(date, 'LLLL', { zone })
  )
})
