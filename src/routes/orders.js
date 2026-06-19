const express = require('express')
const router = express.Router()

const orders = []

router.post('/', (req, res) => {
  const { userId, item, quantity } = req.body
  if (typeof item !== 'string' || item.trim() === '') {
    return res.status(400).json({ error: 'item is required' })
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'quantity must be a positive integer' })
  }
  const order = { id: orders.length + 1, userId, item, quantity }
  orders.push(order)
  res.status(201).json(order)
})

router.get('/:id/total', (req, res) => {
  const id = parseInt(req.params.id)
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'invalid id' })
  }
  const order = orders.find(o => o.id === id)
  if (!order) return res.status(404).json({ error: 'Order not found' })
  const pricePerItem = 9.99
  const total = pricePerItem * order.quantity
  res.json({ total })
})

module.exports = router
