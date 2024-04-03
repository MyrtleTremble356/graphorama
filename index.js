const capitalizeFirstLetter = require('./capitalizeFirstLetter')
const capitalizeString = require('./capitalizeString')
const toUpperCase = require('./toUpperCase')
const isOdd = require('./isOdd')
const numberArrayToString = require('./numberArrayToString')

module.exports = (arr) => {
    return Math.min(...arr);
  }