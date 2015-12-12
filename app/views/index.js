import angular from 'angular';

const views = angular.module('app.views', []);

import HomeCtrl from './home/home-ctrl.js';
import HomeService from './home/home-service.js';
import SettingsCtrl from './settings/settings-ctrl.js';
import SettingsService from './settings/settings-service.js';

// TODO: Look into webpack's dynamic requires
views.controller(HomeCtrl.name, HomeCtrl.fn);
views.service(HomeService.name, HomeService.fn);

views.controller(SettingsCtrl.name, SettingsCtrl.fn);
views.service(SettingsService.name, SettingsService.fn);
