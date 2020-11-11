// Middleware todo
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const body = require("body-parser")
app.use(body.json())
app.use(body.urlencoded({ extended: false }))

const config = require('./config')
const Joke = require('./models/jokes')

const controller = require('./controllers/jokes')
const apiC = require('./controllers/api')

// const popup = require('popups');

let port = process.env.PORT || 8080

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(config.mongoDBHost, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true
})

// Routes
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.get('/', async (req, res) => {
    const jokes = await controller.getJokes()
    const urls = await apiC.otherSitesName()
    res.render('jokes', { jokes: jokes, urls: urls })
})

const valider = /[a-zA-Z0-9]+/

app.post('/newJoke', (req, res) => {
    const setup = req.body.setup
    const punchline = req.body.punchline
    if (valider.test(setup) && valider.test(punchline)) {
        controller.writeJoke(setup, punchline)
    } else {
        // popup.alert({
        //     content: 'Niks makker'
        // })
    }
    res.redirect('/')
})

app.post('/', async (req, res) => {
    const value = req.body.dropdown
    const jokes = await controller.getJokes()
    const urls = await apiC.otherSitesName()
    const dropdownjokes = await apiC.othersjokes(value)
    res.render('jokes', { jokes: jokes, urls: urls, dropdownlist: dropdownjokes })
})

app.delete('/deleteJoke', (req, res) => {

})



app.listen(port, () => {
    console.log('Serveren kører');
})
