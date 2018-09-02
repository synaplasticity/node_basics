
function startServer(app, port) {
    server = app.listen(port, (err) => {
        if (err) {
            return console.log('Duh... ', err);
        }
        console.log(`ExpressJS server is listening on ${port}`);
    });
    return server;
}

function stopServer(server) {
    server.close();
}

module.exports = {startServer, stopServer}
