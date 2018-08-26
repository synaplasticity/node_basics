const express = require('express')
const port = 3000
const app = express()

app.get('/', (request, response) => {
    console.log(app.request.url)
    response.send('Greetings from ExpressJS')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Duh... ', err)
    }

    console.log(`ExpressJS server is listening on ${port}`)
})