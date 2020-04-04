const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')

const { describe, it } = mocha
const { expect } = chai

chai.use(chaiHttp)

describe('server', () => {
  it('welcomes user to the api', done => {
    chai
      .request(app)
      .get('/')
    // eslint-disable-next-line handle-callback-err
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
})
