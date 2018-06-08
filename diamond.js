const getDiamondLetters = require('./lib/get_diamond_letters')
const getDiamondFirstHalfLines = require('./lib/get_diamond_first_half_lines')
const getDiamondSecondHalfLines = require('./lib/get_diamond_second_half_lines')

module.exports = endLetter => {
  const diamondLetters = getDiamondLetters(endLetter)
  const diamondFirstHalfLines = getDiamondFirstHalfLines(diamondLetters)
  return diamondFirstHalfLines
    .concat(getDiamondSecondHalfLines(diamondFirstHalfLines))
    .join('\n')
}
