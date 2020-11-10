const express = require('express')
const get = require('../controllers/joke_regstery')
const nodeFetch = require('node-fetch')
const router = express.Router()
const controller = require('../controllers/jokes')
const { json } = require('body-parser')

router.get('/jokes', async (req, res) => {
    const jokes = await controller.getJokes()
    res.json(jokes)    
})

router.get('/othersites', async (req, res) => {
    const services = await get.get()
    res.json(services)
})

router.get('/otherjokes/:site', async (req, res) => {
    try {
        let result = await nodeFetch('https://' + req.params.site + '.herokuapp.com/api/jokes')
        res.json(await result.json())
    } catch (e) {
        console.log(e);
    }
})

module.exports = router