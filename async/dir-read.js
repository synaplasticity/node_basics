'use strict';

var fs  = require('fs');


function DirRead() {}

    DirRead.prototype.syncRead = function() {
        var dirNames,
            i;

        dirNames = fs.readdirSync(".");
        for(i = 0; i < dirNames.length; i++) {
            console.log(dirNames[i]);
        };

        console.log("Ready");

    };

    DirRead.prototype.asyncRead = function() {
        var dirNames;

        fs.readdir(".", function(err, dirNames) {
            var i;
            if (err) {
                console.error(err);
            }
            for(i = 0; i < dirNames.length; i++) {
                console.log(dirNames[i]);
            };

        });

        console.log("Ready");
    };

module.exports = DirRead;