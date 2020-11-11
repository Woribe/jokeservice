const nodeFetch = require('node-fetch')
const jokeController = require('./joke_regstery')

exports.otherJokes = async function(url) {
    try {
        let result = await nodeFetch('https://' + req.params.site + '.herokuapp.com/api/jokes')
        let json = await result.json()
        return json
    } catch (e) {
        console.log(e)
    }
    
}

exports.otherSitesName = async function() {
    try {
        let result = await jokeController.get()
        
        let names = []
        for (const adress of result) {
            names.push(adress.name)
        }
        
        return names
    } catch (e) {
        console.log(e);
    }
    
}