'use strict';

var appModule = angular.module('configApp', ['ngRoute', 'config.services','config.filters'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/main', {template: 'templates/main.html', controller: MainCtrl})
      .otherwise({redirectTo: '/main'});
  }]);

appModule.controller('MainCtrl', MainCtrl);
