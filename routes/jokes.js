const { Router } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('../controllers/jokes')

router.get('/', async (req, res) => {
  res.write("FISKEFILLET123")
})
//hej
// hvad så mand
module.exports = router