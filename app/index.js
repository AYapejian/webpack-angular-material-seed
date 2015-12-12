import angular     from 'angular';

import onConfig    from './_config/on-config';
import onRun       from './_config/on-run';
import onConstants from './_config/constants';

import './views';
import './directives';
import './services';

import '../node_modules/angular-material/angular-material.css';
import './assets/styles/main.scss';

const angularModuleRequires = [
    require('angular-animate'),
    require('angular-ui-router'),
    require('angular-material'),
    'app.views',
    'app.directives',
    'app.services'
];

angular.module('app', angularModuleRequires);

angular.module('app').constant('AppSettings', onConstants);
angular.module('app').config(onConfig);
angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
