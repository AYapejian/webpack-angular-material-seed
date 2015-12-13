import angular from 'angular';

const views = angular.module('app.views', []);

let currentRequire = null;
function requireAll(module, r) {
    r.keys().forEach(function _requireing(req) {
        currentRequire = require(req).default;
        module(currentRequire.name, currentRequire.fn);
    });
}

requireAll(views.controller, require.context('./', true, /ctrl\.js$/));
requireAll(views.service, require.context('./', true, /service\.js$/));
