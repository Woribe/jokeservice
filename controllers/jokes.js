const Joke = require('../models/cat')

exports.writeJoke = async function (setup, punchline) {
    const joke = Joke({
        setup: setup,
        punchline: punchline
    })
    return await joke.save()
}