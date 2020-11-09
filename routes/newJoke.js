const { Router, response } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('../controllers/jokes')

router.get('/', async (req, res) => {
    res.render('newJoke')
})

module.exports = router