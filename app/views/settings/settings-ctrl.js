/* @ngInject */
function SettingsCtrl(SettingsService) {
    const vm = this;

    vm.setName = function _setName(name) {
        SettingsService.setName(name);
    };
}

export default {
    name: 'SettingsCtrl',
    fn:   SettingsCtrl
};
