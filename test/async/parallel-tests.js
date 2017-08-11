'use strict';

var chai = require('chai');
var mocha = require('mocha');
var sinon = require('sinon');

var Parallel = require('../../src/async/parallel');

describe('Parallel tests', function() {
    var par = new Parallel();

    it("should return x total size of files in a dir in bytes", function() {
        par.syncFileCount(".");
    });

    it("should return total fie size in a dir asynchronouslly", function() {
        par.asyncFileCount();
    });
});