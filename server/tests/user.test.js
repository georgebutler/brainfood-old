/* eslint-disable */

const app = require('../app')
const request = require('supertest')
const mongoose = require('mongoose')

const User = require('../models/user')

let id = ''

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
})

describe('POST /users', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'foo@bar.com',
        password: 'foobar123'
      })

    id = response.body._id

    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('pantries')
  })
})

describe('GET /users/:id', () => {
  it('should get a user by id', async () => {
    const response = await request(app)
      .get(`/users/${id}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('_id')
  })
})

afterAll (async () => {
  await User.deleteMany()
  await mongoose.connection.close()
})
