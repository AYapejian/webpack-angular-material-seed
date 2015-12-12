import userAvatarView from './user-avatar-view';
import './user-avatar-style';
/* @ngInject */
function UserAvatarCtrl() {
    const vm = this;
    vm.user = {
        name: 'Peter Parker'
    };
}

function UserAvatar() {
    return {
        restrict:     'E',
        templateUrl:  userAvatarView,
        controller:   UserAvatarCtrl,
        controllerAs: 'vm',
        scope:        {}
    };
}

export default {
    name: 'appUserAvatar',
    fn:   UserAvatar
};
