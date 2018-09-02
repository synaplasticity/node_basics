'use strict'

const express = require('express')
const { Pool, Client } = require('pg')
const { simpleLogger } = require('./simple_logger')
const { errorHandler } = require('./error_handler')
const util = require('./express_utils')
const connStr = 'postgresql://postgres:psql@localhost:5432/node_tut'
const port = 3000
const app = express()


const pool = Pool({
    connectionString: connStr
})

app.use(simpleLogger)



function getApp() {
    app.get('/users', util.asyncErrHandlerWrapper(async (req, res, next) => {
        console.log('Processing for URI /');
        await getData(req, res);
    }));
    return app
}

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


app.use(errorHandler)

// app.listen(port, (err) => console.log(`Listening on ${port} ... Now with postgres.`))

module.exports = { getApp }