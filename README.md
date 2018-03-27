# date-fns-format-zone

Extend date-fns/format to support format with timezone

## Install

```
npm i date-fns-format-zone 
```


## Usage

All params are like `date-fns/format`, the only difference is `formatZone` has
an extra `zone` option.

```js
var format = require('date-fns/format')
var formatZone = require('date-fns-format-zone')(format)

formatZone(new Date(), 'LL', {
  zone: 'America/Los_Angeles' // this is the only difference
})
```

## Example

Look example.js in root folder:

```
➜ date-fns-format-zone $ node example.js
Asia/Shanghai:
    Tuesday, March 27 2018 12:16 p.m.
America/Los_Angeles:
    Monday, March 26 2018 8:16 p.m.
Asia/Tokyo:
    Tuesday, March 27 2018 1:16 p.m.
```

## License

MIT License