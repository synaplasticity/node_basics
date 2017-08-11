'use strict';

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var Scope = require('../../src/scope/scope');

describe('Scope tests', function() {

    var scope = new Scope();

    it('should return defined global name - Hartfield', function() {
        expect(scope.showName() === 'Hartfield');
    });

    it('should return *Idiot* as the function level variable was not defined with var', function() {
        expect(scope.getIdiotsName() === 'Idiot');
    });

    it('should return *local name* as the function var is defined with var', function() {
        expect(scope.getLocalName() === 'local name');
    });

});

