const reqProm = require('request-promise')
const request = require('request')
const express = require('express')
const port = 3000
const app = express()
const apiUrl = 'http://dataservice.accuweather.com/locations/v1/cities/IN/search'

const options = {
    method: 'GET',
    uri: apiUrl,
    qs: {
        q: 'Bangalore',
        apikey: 'CqYzGhxxdiSBH83ehfMrGX5rDYVs09FW'
    },
    json: true
}

const asyncErrHandlerWrapper = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next)
    }

app.get('/:city', asyncErrHandlerWrapper(async(req, res, next) => {
    user_city = options.qs.q = req.params.city
    console.log(`Processing /:city...${user_city}`)

    await getCity(req, res)
    
    const city_key = res.city[0].Key
    console.log(`City key : ${city_key}`)

    res.send(res.city)
}))

function getCity(req, res) {
    return reqProm(options).then((data) => {
        console.log(data)
        res.city = data
    })
}

function errHandler(err, req, res, next) {
    const errMsg = `Something unplesant occured. We are investigating. \n ${err}`
    console.error(errMsg)
    res.status(500).send(errMsg)
}

app.use(errHandler)

app.listen(port, (err) => console.log(`Listening on ${port} ... Now with AccuWeather.`))

// reqProm(options)
//     .then((data) => {
//         console.log(`City key : ${data[0].Key}`)
//         console.log(data)
//     })
//     .catch((err) => {
//         console.error(err)
//     })
//     .finally(() => {
//         process.exit(0)
//     })