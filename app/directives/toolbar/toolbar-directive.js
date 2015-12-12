import toolbarView from './toolbar-view';

/* @ngInject */
function ToolbarCtrl(AppService) {
    const vm = this;

    vm.toggleSidebar = function _toggleSidebar() {
        AppService.toggleSidebar();
    };
}

function Toolbar() {
    return {
        restrict:     'E',
        replace:      true,
        templateUrl:  toolbarView,
        controller:   ToolbarCtrl,
        controllerAs: 'vm'
    };
}

export default {
    name: 'appToolbar',
    fn:   Toolbar
};
