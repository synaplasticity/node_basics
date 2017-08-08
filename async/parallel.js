'use strict';
/**
* Source : https://shinesolutions.com/2011/08/26/asynchronous-code-design-with-node-js/
*/

var fs = require('fs')

function Parallel() {}


    Parallel.prototype.syncFileCount = function(dirName) {
        var totalBytes = 0,
            i,
            filenames,
            stats;

        filenames = fs.readdirSync(dirName);
        for(i = 0; i < filenames.length; i++) {
            stats = fs.statSync(dirName + "/" + filenames[i]);
            totalBytes += stats.size;
        }

        console.log(dirName + " : total file size in bytes is : " + totalBytes);
        return totalBytes;
    };


    Parallel.prototype.asyncFileCount = function() {
        var totalBytes = 0,
            count = 0;

            fs.readdir(".", function(err, filenames) {
                var i;
                count = filenames.length;

                for(i = 0; i < filenames.length; i++) {
                    fs.stat("./" + filenames[i], function(err, stats) {
                        totalBytes += stats.size;
                        count--;
                        if (count === 0) {
                            console.log("Total file size - async : " + totalBytes);
                        }
                    });
                }
            });

            console.log("Passed of to calculate dir size.");
    };

    new Parallel().asyncFileCount(".");

module.exports = Parallel;
