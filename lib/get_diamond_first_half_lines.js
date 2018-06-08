const { getSpaces, reverseString, trimEnd } = require('./helpers')

module.exports = diamondLetters => {
  return diamondLetters.map(getLine(diamondLetters))
}

const getLine = diamondLetters => letter => {
  const lineFirstHalf = getLineFirstHalf(diamondLetters, letter)
  const lineSecondHalf = reverseString(lineFirstHalf).substring(1)
  return trimEnd(lineFirstHalf + lineSecondHalf)
}

const getLineFirstHalf = (diamondLetters, letter) => {
  const letterIndex = diamondLetters.indexOf(letter)
  const numberOfSpacesBefore = diamondLetters.length - letterIndex - 1
  const numberOfSpacesUntilMiddle = diamondLetters.length - numberOfSpacesBefore - 1
  const lineUntilLetter = getSpaces(numberOfSpacesBefore) + letter
  const lineAfterLetter = getSpaces(numberOfSpacesUntilMiddle)
  return lineUntilLetter + lineAfterLetter
}
