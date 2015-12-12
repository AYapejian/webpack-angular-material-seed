/* @ngInject */
function AppService($state, $mdSidenav) {
    const service = {};

    service.toggleSidebar = function _toggleSidebar() {
        $mdSidenav('left-sidebar').toggle();
    };

    service.navigateTo = function _navigateTo(stateName) {
        return $state.go(stateName);
    };

    return service;
}

export default {
    name: 'AppService',
    fn:   AppService
};
