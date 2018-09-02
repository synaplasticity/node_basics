function simpleLogger(req, res, next) {
    console.log('Logged...');
    next();
}
exports.simpleLogger = simpleLogger;