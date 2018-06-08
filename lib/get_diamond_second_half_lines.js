const { reverseArray } = require('./helpers')

module.exports = diamondFirstHalfLines => {
  return reverseArray(diamondFirstHalfLines).slice(1)
}
