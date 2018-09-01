const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello from NodeJS server.')
}

const server = http.createServer(requestHandler)


function startServer() {
    server.listen(port, (err) => {
        if (err) {
            return console.log('Error ', err);
        }
        console.log(`Server is running on ${port} ...`);
    });
}

function stopServer() {
    console.log('closing ...')
    server.close((err) => {
        console.error(err)
    })
    setImmediate(() => server.emit('close'))
}

module.exports = { startServer, stopServer }

startServer()
