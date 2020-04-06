/* eslint-disable */

const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')

const { describe, it, after } = mocha
const { expect } = chai

chai.use(chaiHttp)

describe('GET /', () => {
  it('returns a json object with online, and version', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.not.exist
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('online').to.equal(true)
        expect(res.body).to.have.property('version').to.equal(`${process.env.npm_package_version}`)
        done()
      })
  })
})

after(async () => {
  mongoose.connection.close()
})
