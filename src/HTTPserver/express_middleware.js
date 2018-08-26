const express = require('express')
const port = 3000
const app = express()

function simpleLogger(req, res, next) {
    console.log(`Logged...`)
    next()
}

app.use(simpleLogger)

app.get('/', (req, res, next) => {
    return res.send('Hello from ExpressJS middleware. Now with logging.')
    // throw new Error('Duh')
})

function errHandler(err, req, res, next) {
    console.log(err)
    res.status(500).send(`Internal server error : ${err}`)
}

app.use(errHandler)

app.listen(port, (err) => console.log(`Listening on ${port}`))
