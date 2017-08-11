'use strict';
/**
* src : https://shinesolutions.com/2011/08/26/asynchronous-code-design-with-node-js/
*/

var chai = require('chai');
var mocha = require('mocha');

var CodeReuse = require('../../src/async/code-reuse');

var logCount = function(err, path, count) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(count + " for files in " + path);
}

describe("Code reuse tests", function() {
    var cr = new CodeReuse();
    var path1 = ".",
        path2 = "../.";

    it('should count files synchronously', function() {
            console.log("For " + path1 + ": " + cr.countFilesSync(path1));
            console.log("For " + path2 + ": " + cr.countFilesSync(path2));
    });

    it('should count files asynchronously', function() {
        cr.countFilesAsync(path1, logCount);
        cr.countFilesAsync(path2, logCount);
    });
});
