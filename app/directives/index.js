import angular from 'angular';

const directives = angular.module('app.directives', []);

let currentRequire = null;
function requireAll(module, r) {
    r.keys().forEach(function _requireing(req) {
        currentRequire = require(req).default;
        module(currentRequire.name, currentRequire.fn);
    });
}

requireAll(directives.directive, require.context('./', true, /directive\.js$/));
