import sidebarView from './sidebar-view';

/* @ngInject */
function SidebarCtrl($scope, $mdSidenav, $log, AppService) {
    $scope.close = function _closeSidebar() {
        $mdSidenav('left-sidebar').toggle();
    };

    $scope.navigateTo = function _navigateTo(stateName, $event) {
        AppService.navigateTo(stateName);
        $mdSidenav('left-sidebar').toggle();
    };
}

function Sidebar() {
    return {
        restrict:    'E',
        replace:     true,
        templateUrl: sidebarView,
        controller:  SidebarCtrl
    };
}

export default {
    name: 'appSidebar',
    fn:   Sidebar
};
