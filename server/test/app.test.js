/* eslint-disable */

const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')

const { describe, it } = mocha
const { expect } = chai

chai.use(chaiHttp)

describe('server', () => {
  it('returns a json object', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.not.exist
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('version')
        expect(res.body).to.have.property('online').to.equal(true)
        done()
      })
  })
})
