/* eslint-disable */

const request = require('supertest')
const app = require('../app')
const db = require('../database')

describe('Register a new user',() => {
  test('It should return a status code of 201',() => {
    return request(app)
      .post('/users/')
      .send({
        email: 'admin@brainfood.com',
        password: 'test1234'
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
      })
  })
})

afterAll(done => {
  db.close()
  done()
});
