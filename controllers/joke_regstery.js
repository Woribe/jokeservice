const fetch = require('node-fetch');
let registryUrl = 'https://krdo-joke-registry.herokuapp.com/api/services';

exports.get = async function() {
    const respons = await fetch(registryUrl);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

const post = async function(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK
    // if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

const deLete =  async function(url, objekt) {
    let respons = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function mainGet(url) {
    try {
        let respons = await get(url);
        console.log(respons);
        console.log(respons.length);
    } catch (fejl) {
        console.log(fejl);
    }
}

async function mainPost(url) {
    try {
        let respons = await post(url,
            {
                "name": "BabyJokes",
                "address": "babyjokes.herokuapp.com",
                "secret": "dødebabyer123",
            }
        );
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}

async function mainDelete(url) {
    try {
        let respons = await deLete(url,
            {
                "name": "BabyJokes",
                "address": "babyjokes.herokuapp.com",
                "secret": "dødebabyer123",
            }
        );
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}