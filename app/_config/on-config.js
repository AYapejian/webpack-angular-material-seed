import homeView from '../views/home/home-view.html';
import settingsView from '../views/settings/settings-view.html';

/* @ngInject */
function OnConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('Home', {
            url:         '/',
            controller:  'HomeCtrl as vm',
            templateUrl: homeView,
            title:       'Home'
        });

    $stateProvider
        .state('Settings', {
            url:         '/settings',
            controller:  'SettingsCtrl as vm',
            templateUrl: settingsView,
            title:       'Settings'
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

export default OnConfig;
