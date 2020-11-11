const nodeFetch = require('node-fetch')
const jokeController = require('./joke_regstery')

exports.otherJokes = async function (url) {
    try {
        let result = await nodeFetch('https://' + req.params.site + '.herokuapp.com/api/jokes')
        let json = await result.json()
        return json
    } catch (e) {
        console.log(e)
    }

}

exports.othersjokes = async function (url) {
    let result;
    try {
        if (url.substring(url.length - 1) != '/')
            result = await nodeFetch(url + '/api/jokes')
        else {
            result = await nodeFetch(url + 'api/jokes')
        }
        let json = await result.json();
        return json;
    } catch (e) {
        console.log(e);
    }


}

exports.otherSitesName = async function () {
    try {
        let result = await jokeController.get()

        let names = []
        for (const address of result) {
            names.push({ name: address.name, address: address.address })
        }
        return names
    } catch (e) {
        console.log(e);
    }

}