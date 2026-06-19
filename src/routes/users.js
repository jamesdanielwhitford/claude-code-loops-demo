const express = require('express')
const router = express.Router()

const users = []

router.post('/', (req, res) => {
  const { name, email } = req.body
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'name is required' })
  }
  if (typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ error: 'email is required' })
  }
  const user = { id: users.length + 1, name, email }
  users.push(user)
  res.status(201).json(user)
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'invalid id' })
  }
  const user = users.find(u => u.id === id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

module.exports = router
