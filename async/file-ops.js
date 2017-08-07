'use strict';

var fs = require('fs');

function FileOps() {}

    FileOps.prototype.syncFileOp = function(){
        var oldFilename,
            newFilename,
            isSymbLnk;

        oldFilename = "./processId.txt";
        newFilename = "./processIdOld.txt";

        fs.chmodSync(oldFilename, 777);
        fs.renameSync(oldFilename, newFilename);

        isSymbLnk = fs.lstatSync(newFilename).isSymbolicLink();
    };

    FileOps.prototype.asyncFileOp = function() {
        var oldFilename,
            newFilename;

        oldFilename = "./processId.txt";
        newFilename = "./processIdOld.txt";

        // fs.chmod(oldFilename, 777, function(err) {
        //     fs.rename(oldFilename, newFilename, function(err) {
        //         fs.lstat(newFilename, function(err, stats) {
        //             var isSymbLnk = stats.isSymbolicLink();
        //         });
        //     });
        // });

        fs.chmod(oldFilename, 777, function (err) {
            fs.rename(oldFilename, newFilename, function (err) {
                fs.lstat(newFilename, function (err, stats) {
                    var isSymLink = stats.isSymbolicLink();
                });
            });
        });
    };

module.exports = FileOps;