'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

var fs = require('fs');

var FileOps = require("../file-ops");

describe("FileOps tests", function() {
    var fileOps = new FileOps();

   beforeEach(function() {
        fs.appendFileSync("./processId.txt", "test");
    });

    afterEach(function() {
        fs.unlinkSync("./processIdOld.txt");
    })



    // it("Sync file ops", function() {
    //     fileOps.syncFileOp();
    // });

    it("Async file ops", function() {
        fileOps.asyncFileOp();
    })
});