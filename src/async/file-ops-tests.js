'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

var FileOps = require("../file-ops");

describe("FileOps tests", function() {
    var fileOps = new FileOps();

    it("Sync file ops", function() {
        fileOps.syncFileOp();
    });

});