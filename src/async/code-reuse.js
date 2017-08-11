'use strict';

var fs = require('fs');

function CodeReuse() {}


    CodeReuse.prototype.countFilesSync = function(path) {
        var filenames = fs.readdirSync(path);
        return filenames.length;
    };


    CodeReuse.prototype.countFilesAsync = function(path, callback) {
        // fs.readdir(path, funtion(err, filenames) {
        //     callback(err, path, filenames.length);
        // });
    };


module.exports = CodeReuse