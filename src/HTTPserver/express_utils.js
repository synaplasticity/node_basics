
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
module.exports = {startServer, stopServer, asyncErrHandlerWrapper}
