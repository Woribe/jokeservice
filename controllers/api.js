const nodeFetch = require('node-fetch')

exports.otherJokes = async function(url) {
    try {
        let result = await nodeFetch('https://' + req.params.site + '.herokuapp.com/api/jokes')
        let json = await result.json()
        return json
    } catch (e) {
        console.log(e)
    }
    
}