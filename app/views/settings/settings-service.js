function SettingsService() {
    const service = {};

    const SETTINGS = {
        name: null
    };

    service.getName = function _getName() {
        return SETTINGS.name;
    };

    service.setName = function _setName(name) {
        SETTINGS.name = name;
    };


    return service;
}

export default {
    name: 'SettingsService',
    fn:   SettingsService
};
