import angular from 'angular';

const globalServices = angular.module('app.services', []);

import AppService from './app-service.js';

// TODO: Look into webpack's dynamic requires
globalServices.service(AppService.name, AppService.fn);
