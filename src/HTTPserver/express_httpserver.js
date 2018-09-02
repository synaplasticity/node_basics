const express = require('express')
const util = require('./express_utils')
const port = 3000
const app = express();
exports.app = app;
var server;

function getApp() {
    app.get('/', (request, response) => {
        console.log(app.request.url);
        response.send('Greetings from ExpressJS');
    });
    return app
}

module.exports = {getApp}

// const h_app = getApp()
// server = util.startServer(h_app, port) 
// util.stopServer(server)
