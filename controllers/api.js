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
        const reqex = /\/([a-zA-Z0-9-_]+)/g
        let result = await jokeController.get()
        
        let names = []
        for (const address of result) {
            names.push({name:address.name, address:reqex.exec(address.address)[1]})
        }
        
        return names
    } catch (e) {
        console.log(e);
    }
    
}