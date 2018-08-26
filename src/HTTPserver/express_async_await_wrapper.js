const express = require('express')
const port = 3000
const app = express()

function simpleLogger(req, res, next) {
    console.log('Logged...')
    next()
}

app.use(simpleLogger)

/**
 * As asyn/await is syntatic sugar for Promises, we can
 * wrap the promise and use catch to delegate any errors
 * that occur to the downstream error handler.
 * 
 * Use this to wrpa any asyn calls.
 * 
 * This will help us in avoiding having try/catch blocks
 * all over the place
 * 
 * @param {*} fn 
 */
const asyncErrHandlerWrapper = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next)
    }

/**
 * Use the wrpapper to encapsulate error handling.
 * 
 */
app.get('/', asyncErrHandlerWrapper(async(req, res, next) => {
    console.log('Processing for URI /')
    // TYPICALLY, we wil have a await call here. e.g.: call db
    return res.send('ExpressJS is in the house. Now with async wrapper.')
}))

function errorHandler(err, req, res, next) {
    console.log(`Something bad happened - ${err}`)
    res.status(500).send(`Something went worng - ${err}`)
}

app.use(errorHandler)

app.listen(port, (err) => console.log(`Listening on ${port}`))