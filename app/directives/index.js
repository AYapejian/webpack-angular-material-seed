import angular from 'angular';

const directives = angular.module('app.directives', []);

import userAvatar   from './user-avatar/user-avatar-directive.js';
import sidebar      from './sidebar/sidebar-directive.js';
import toolbar      from './toolbar/toolbar-directive.js';

// TODO: Look into webpack's dynamic requires
directives.directive(userAvatar.name, userAvatar.fn);
directives.directive(sidebar.name, sidebar.fn);
directives.directive(toolbar.name, toolbar.fn);
