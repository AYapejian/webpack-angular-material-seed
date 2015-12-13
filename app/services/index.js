import angular from 'angular';

const globalServices = angular.module('app.services', []);

let currentRequire = null;
function requireAll(module, r) {
    r.keys().forEach(function _requireing(req) {
        currentRequire = require(req).default;
        module(currentRequire.name, currentRequire.fn);
    });
}

requireAll(globalServices.service, require.context('./', true, /service\.js$/));
