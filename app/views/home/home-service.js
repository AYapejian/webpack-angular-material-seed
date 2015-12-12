function HomeService() {
    const service = {};

    service.getTestText = function _getTestText() {
        return 'Test text from Services';
    };

    return service;
}

export default {
    name: 'HomeService',
    fn:   HomeService
};
