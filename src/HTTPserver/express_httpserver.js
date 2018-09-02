const express = require('express')
const port = 3000
const app = express()
var server

app.get('/', (request, response) => {
    console.log(app.request.url)
    response.send('Greetings from ExpressJS')
})


function startServer(port) {
    server = app.listen(port, (err) => {
        if (err) {
            return console.log('Duh... ', err);
        }
        console.log(`ExpressJS server is listening on ${port}`);
    });
    return server
}

function stopServer(server) {
    server.close()
}

module.exports = {startServer, stopServer}

// startServer() 
// stopServer(server)
