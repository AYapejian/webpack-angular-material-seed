/* @ngInject */
function OnRun($rootScope, $log) {
    $rootScope.$on('$stateChangeSuccess', function _onStateChangeSuccess(event, toState) {
        $log.debug('Changing to state: ' + JSON.stringify(toState));
    });
}

export default OnRun;
