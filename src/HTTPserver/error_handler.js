function errorHandler(err, req, res, next) {
    console.log(`Something bad happened - ${err}`);
    res.status(500).send(`Something went worng - ${err}`);
}

exports.errorHandler = errorHandler;