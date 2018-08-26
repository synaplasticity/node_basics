const express = require('express')
const port = 3000
const app = express()

function simpleLogger(req, res, next) {
    console.log(`Logged ...`)
    next()
}

app.use(simpleLogger)

app.get('/', async(req, res, next) => {
    try {
        return res.send('Hello from expressJS. Using async/await now.')
    } catch (err) {
        next(err)
    }
})

function errorHandler(err, req, res, next) {
    console.log(err)
    res.status(500).send(`Something terrible has occured, please call support.\n ${err}`)
}

app.use(errorHandler)

app.listen(port, (err) => console.log(`Listening on ${port}`))