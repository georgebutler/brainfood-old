/* eslint-disable */

const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')

const { describe, it } = mocha
const { expect } = chai

chai.use(chaiHttp)

describe('POST /users', () => {
	it('registers a new user', done => {
		chai
			.request(app)
			.post('/users')
			.send({
				name: {
					first: "John",
					last: "Doe"
				},
				email: 'johndoe@brainfood.com',
				password: 'test1234'
			})
			.end((err, res) => {
				expect(err).to.not.exist
				expect(res).to.have.status(201)
				expect(res.body).to.have.property('email').to.equal('johndoe@brainfood.com')
				expect(res.body).to.have.property('pantries').to.be.empty
				expect(res.body).to.have.property('name')
				expect(res.body.name).to.have.property('first')
				expect(res.body.name).to.have.property('last')
				done()
			})
	})
})
