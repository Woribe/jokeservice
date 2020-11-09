const express = require('express')
const router = express.Router()
const controller = require('../controllers/jokes')

router.get('/jokes', async (req, res) => {
    const jokes = await controller.getJokes()
    res.json(jokes)    
})

module.exports = router