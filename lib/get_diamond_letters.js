const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

module.exports = endLetter => {
  const letterIndex = alphabet.indexOf(endLetter)
  return alphabet.substring(0, letterIndex + 1).split('')
}
