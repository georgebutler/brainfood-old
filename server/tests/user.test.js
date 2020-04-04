/* eslint-disable */

const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')

const User = require('../models/user')

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
})

describe('Register a new user',() => {
  test('It should return a status code of 201',(done) => {
    return request(app)
      .post('/users/')
      .send({
        email: 'admin@brainfood.com',
        password: 'test1234'
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
      })
      .finally(() => {
        done()
      })
  })
})

afterAll(async () => {
  await User.deleteMany()
  await mongoose.connection.close()
})
