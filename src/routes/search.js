const express = require('express')
const router = express.Router()

const products = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 24.99 },
  { id: 3, name: 'Doohickey', price: 4.99 },
]

router.get('/', (req, res) => {
  const { q } = req.query
  if (typeof q !== 'string' || q.trim() === '') {
    return res.status(400).json({ error: 'q query parameter is required' })
  }
  const needle = q.toLowerCase()
  const results = products.filter(p => p.name.toLowerCase().includes(needle))
  res.json(results)
})

module.exports = router
