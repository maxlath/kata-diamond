const should = require('should')
const diamond = require('../diamond.js')
const { B, C, D, W } = require('./assets/diamonds_per_letter')

describe('diamond', () => {
  it('A', done => {
    diamond('A').should.equal('A')
    done()
  })

  it('B', done => {
    diamond('B').should.equal(B)
    done()
  })

  it('C', done => {
    diamond('C').should.equal(C)
    done()
  })

  it('D', done => {
    diamond('D').should.equal(D)
    done()
  })

  it('W', done => {
    diamond('W').should.equal(W)
    done()
  })
})
