const request = require('supertest')
const app = require('../src/index')

describe('GET /search', () => {
  it('returns results case-insensitively', async () => {
    const res = await request(app).get('/search?q=widget')
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
    expect(res.body[0].name).toBe('Widget')
  })
})
