const reqProm = require('request-promise')
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

reqProm(options)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        process.exit(0)
    })