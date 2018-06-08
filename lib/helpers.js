const cloneArray = array => array.slice()

const range = n => Array.from(Array(n).keys())

module.exports = {
  getSpaces: numberOfSpaces => range(numberOfSpaces).map(() => ' ').join(''),

  reverseString: str => str.split('').reverse().join(''),

  reverseArray: array => cloneArray(array).reverse(),

  trimEnd: str => str.replace(/\s+$/, '')
}
