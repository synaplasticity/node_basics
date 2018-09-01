const reqProm = require('request-promise')
const request = require('request')
const express = require('express')
const port = 3010
const app = express()
const searchURI = 'https://dataservice.accuweather.com/locations/v1/cities/IN/search'
const forecastURI = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/'
const acc_api_key = 'XZAoJMN1MEkhWGxdnIiFKtqfFW7MM4Q6'

const options = {
    method: 'GET',
    uri: searchURI,
    qs: {
        q: 'Mumbai',
        apikey: acc_api_key
    },
    json: true
}

const forecast_options = {
    method: 'GET',
    uri: forecastURI,
    qs: {
        q: '204842',
        apikey: acc_api_key
    },
    json: true
}

const asyncErrHandlerWrapper = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next)
    }

app.get('/:location', asyncErrHandlerWrapper(async(req, res, next) => {
    user_loc = options.qs.q = req.params.Location
    console.log(`Processing /:location...${user_loc}`)

    await getLocation(req, res)
    const loc_key = res.location[0].Key
    console.log(`Location key : ${loc_key}`)

    await getWeather4Location(loc_key)

    res.send(res.forecast_data)
}))

function getLocation(req, res) {
    return reqProm(options).then((data) => {
        console.log(data)
        res.location = data
    })
}
 
function getWeather4Location(loc_key, req, res) {
    forecast_options.qs.q = loc_key
    return reqProm(forecast_options)
        .then((data) => {
            console.log(data)
            res.forecast_data = data
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
//         console.log(`Location key : ${data[0].Key}`)
//         console.log(data)
//     })
//     .catch((err) => {
//         console.error(err)
//     })
//     .finally(() => {
//         process.exit(0)
//     })