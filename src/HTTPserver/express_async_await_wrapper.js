'use strict'

const { errorHandler } = require("./error_handler");

const { simpleLogger } = require("./simple_logger");

const util = require('./express_utils')

const express = require('express')
const port = 3000
const app = express()

app.use(simpleLogger)


/**
 * Use the wrapper to encapsulate error handling.
 * 
 */
function getApp() {
    app.get('/', util.asyncErrHandlerWrapper(async (req, res, next) => {
        console.log('Processing for URI /');
        // TYPICALLY, we wil have a await call here. e.g.: call db
        return res.send('ExpressJS is in the house. Now with async wrapper.');
    }));

    return app
}

app.use(errorHandler)

// app.listen(port, (err) => console.log(`Listening on ${port}`))

module.exports = { getApp }

// getApp()
// util.startServer(app, port)
