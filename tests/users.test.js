const request = require('supertest')
const app = require('../src/index')

describe('POST /users', () => {
  it('returns 201 when a user is created', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Alice', email: 'alice@example.com' })
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Alice')
  })
})
