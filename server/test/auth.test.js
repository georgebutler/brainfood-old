/* eslint-disable */

const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')

const User = require('../models/user')

const { before, describe, it } = mocha
const { expect } = chai

chai.use(chaiHttp)

before(function(done) {
	User.deleteMany({}, function(err) {
		if (err) {
			console.error(err)
		}

		done()
	})
})

describe('User', function () {
	describe('POST /register', function () {
		it('registers a new user', function (done) {
			const email = `${Date.now()}@brainfood.com`

			chai
				.request(app)
				.post('/api/auth/register')
				.send({
					name: {
						first: "John",
						last: "Doe"
					},
					email: email,
					password: 'test1234'
				})
				.end((err, res) => {
					expect(err).to.not.exist
					expect(res).to.have.status(201)
					expect(res.body).to.have.property('token')

					done()
				})
		})
	})
})
