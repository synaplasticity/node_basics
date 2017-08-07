'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var DirRead = require('../dir-read');

describe("Async tests", function() {
    var dirSync = new DirRead();

    it("Should return...", function() {
        dirSync.syncRead();
        // expect('a').to.equal('a');
    });

    it("Should read async", function() {
        dirSync.asyncRead();
    })

});