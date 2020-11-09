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

let port = process.env.PORT || 8080

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(config.mongoDBHost, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true
})

/*
mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
        useUnifiedTopology: true
    });
    */


//Dummy data

initJokes()
function initJokes() {
    /*
    let testJoke = Joke({setup: "Hvad er forskellen på et maleri og jesus?", punchline: "Det kræver kun et søm at hænge et maleri op"})
    testJoke.save()
    testJoke = Joke({setup: "Hvad kalder man en jøde der rager i et askebæger?", punchline: "Slægtsforsker"})
    testJoke.save()
    testJoke = Joke({setup: "Hvad er forskellen på sardiner og døde babies?", punchline: "Jeg vil ikke have sardiner på min pizza"})
    testJoke.save()
    testJoke = Joke({setup: "Hvad er klammere end en bunke med døde babies?", punchline: "Den levende babie i midten der spiser sig ud af bunken"})
    testJoke.save()
    */
    console.log("Der er lagt data i local MongoDB");
}




// Routes
/*
const jokeRouter = require('./routes/jokes')
app.use('/jokes', jokeRouter)
*/

app.get('/', async (req, res) => {
    const jokes = await controller.getJokes()
    console.log(jokes.length)
    res.render('jokes',{jokes:jokes})
})

app.get('/newJoke', (req, res) => {
    res.render('newJoke')
})

app.listen(port, () => {
    console.log('Serveren kører');
})

