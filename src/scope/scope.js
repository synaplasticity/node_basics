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


module.exports = Scope;