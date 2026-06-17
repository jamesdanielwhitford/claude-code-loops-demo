const express = require('express')
const router = express.Router()

const users = []

router.post('/', (req, res) => {
  const { name, email } = req.body
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'name is required' })
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'valid email is required' })
  }
  const user = { id: users.length + 1, name: name.trim(), email }
  users.push(user)
  res.status(201).json(user)
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) return res.status(400).json({ error: 'id must be a number' })
  const user = users.find(u => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

module.exports = router
