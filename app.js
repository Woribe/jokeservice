let http = require("http")

let port = process.env.PORT || 8080

/*
http.createServer(function(request, response) {
        response.writeHead(200);
        response.write("Der ændres!!");
        response.end();}).listen(port);
    
        console.log("Listeningon port " + port + "...");
        // MongoDB og Mongoose setup
*/

/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
        useUnifiedTopology: true
    });
    */



// Middleware todo
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const body = require("body-parser")
app.use(body.json())
app.use(body.urlencoded({ extended: false }))

const config = require('./config')

// Routes
/*
const jokeRouter = require('./routes/jokes')
app.use('/jokes', jokeRouter)
*/

app.get('/', (req, res) => {
    res.send("LOL")
})


app.listen(port, () => {
    console.log('Serveren kører');
})

