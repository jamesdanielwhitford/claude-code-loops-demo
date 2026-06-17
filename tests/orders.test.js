const request = require('supertest')
const app = require('../src/index')

describe('GET /orders/:id/total', () => {
  it('returns the correct total based on quantity', async () => {
    await request(app)
      .post('/orders')
      .send({ userId: 1, item: 'Widget', quantity: 3 })

    const res = await request(app).get('/orders/1/total')
    expect(res.status).toBe(200)
    expect(res.body.total).toBeCloseTo(29.97)
  })
})
