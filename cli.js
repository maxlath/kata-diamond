#!/usr/bin/env node
const diamond = require('./diamond.js')

const [ letter ] = process.argv.slice(2)
console.log(diamond(letter))
