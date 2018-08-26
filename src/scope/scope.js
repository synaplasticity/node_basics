'use strict';

var name = 'Hartfield';

    function Scope() {}

    Scope.prototype.showName = function() {
        return name;
    };

    Scope.prototype.getIdiotsName = function() {
        // This will override the global name as was not declared with *var*
        name = 'Idiot';
        return name;
    };

    Scope.prototype.getLocalName = function() {
        // Always declar the var
        var name = 'local name';
       return name;
    };

// While function name declaration override var declaration of the same name,
// it's not true for assignments.
var myName = 'Foo';
    Scope.prototype.myName = function() {
        return  'Bar';
    };
    console.log(typeof(myName)); // String




module.exports = Scope;