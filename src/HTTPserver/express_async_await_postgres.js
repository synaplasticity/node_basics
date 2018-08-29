'use strict'

const express = require('express')
const {Pool, Client} = require('pg')

const connStr = 'postgresql://postgres:psql@localhost:5432/node_tut'
const port = 3000

const app = express()

const pool = Pool ({
    connectionString: connStr
})

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

    app.get('/users', asyncErrHandlerWrapper(async(req, res, next) => {
        console.log('Processing for URI /')
        await getData(req, res)
    }))
    
    function getData(req, res) {
        pool.query('SELECT * FROM users;', (err, results) => {
            if (err) {
                throw err
            }
            console.log(results)
            // pool.end()
            return res.json(results.rows)
        })
    
    }

function errHandler(err, req, res, next) {
    const errMsg = `Something unplesant occured. We are investigating. \n ${err}`
    console.error(errMsg)
    res.status(500).send(errMsg)
}

app.use(errHandler)

app.listen(port, (err) => console.log(`Listening on ${port} ... Now with postgres.`))