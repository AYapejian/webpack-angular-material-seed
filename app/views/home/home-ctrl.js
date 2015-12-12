/* @ngInject */
function HomeCtrl(HomeService) {
    const vm = this;

    vm.testText = HomeService.getTestText();
}

export default {
    name: 'HomeCtrl',
    fn:   HomeCtrl
};
