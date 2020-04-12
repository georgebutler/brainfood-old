/* eslint-disable */

const app = require('../app')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')

const Pantry = require('../models/pantry')

const { before, describe, it } = mocha
const { expect } = chai

chai.use(chaiHttp)

before(function(done) {
	Pantry.deleteMany({}, function(err) {
		if (err) {
			console.error(err)
		}

		done()
	})
})

describe('Pantry', function () {
	describe('POST /pantries', function () {
		it('creates a new pantry', function (done) {
			const token = `${Date.now()}@brainfood.com`

			chai
				.request(app)
				.post('/api/pantries')
				.set("Authorization", token)
				.send({
					name: 'Cereal'
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
